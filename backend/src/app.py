from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from models import db, Project, Insight, Action
import time
from datetime import datetime, timedelta
import random

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///alfred.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db.init_app(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Seed initial data
with app.app_context():
    db.create_all()
    if not Project.query.filter_by(name='Site Alpha').first():
        project = Project(
            name='Site Alpha',
            progress=40,
            capacity=150,
            weather_temp=23,
            weather_wind=12,
            weather_condition='Clear'
        )
        db.session.add(project)
        db.session.commit()

        db.session.add_all([
            Insight(project=project, title='Alfred Insight: Risk Detected',
                    description='Schedule conflict identified between equipment delivery and site preparation phases. Recommend immediate stakeholder coordination.',
                    priority='High', time=datetime.now() - timedelta(minutes=2)),
            Insight(project=project, title='EPC Contractor Status Update',
                    description='Foundation work progressing on schedule. Requesting confirmation on electrical delivery timeline.',
                    priority='Normal', time=datetime.now() - timedelta(hours=1)),
        ])
        db.session.add_all([
            Action(project=project, title='RFI from EPC Contractor',
                   description='Technical review required for foundation specifications.',
                   due='Due in 2 hours', priority='High Priority'),
            Action(project=project, title='Logistics Delay Risk',
                   description='Schedule conflict detected in equipment delivery.',
                   priority='High', status='New'),
        ])
        db.session.commit()

# API Routes
@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'progress': p.progress,
        'capacity': p.capacity,
        'weather': {'temperature': p.weather_temp, 'windSpeed': p.weather_wind, 'condition': p.weather_condition},
        'insights': [{'id': i.id, 'title': i.title, 'description': i.description, 'time': i.time.isoformat(), 'priority': i.priority} for i in p.insights],
        'actions': [{'id': a.id, 'title': a.title, 'description': a.description, 'due': a.due, 'priority': a.priority, 'status': a.status} for a in p.actions]
    } for p in projects])

@app.route('/api/projects/<int:id>', methods=['GET'])
def get_project(id):
    project = Project.query.get_or_404(id)
    return jsonify({
        'id': project.id,
        'name': project.name,
        'progress': project.progress,
        'capacity': project.capacity,
        'weather': {'temperature': project.weather_temp, 'windSpeed': project.weather_wind, 'condition': project.weather_condition},
        'insights': [{'id': i.id, 'title': i.title, 'description': i.description, 'time': i.time.isoformat(), 'priority': i.priority} for i in project.insights],
        'actions': [{'id': a.id, 'title': a.title, 'description': a.description, 'due': a.due, 'priority': a.priority, 'status': a.status} for a in project.actions]
    })

@app.route('/api/projects/<int:id>/insights', methods=['POST'])
def add_insight(id):
    project = Project.query.get_or_404(id)
    data = request.get_json()
    insight = Insight(project=project, title=data['title'], description=data['description'], priority=data['priority'])
    db.session.add(insight)
    db.session.commit()
    return jsonify({'id': insight.id, 'title': insight.title, 'description': insight.description, 'time': insight.time.isoformat(), 'priority': insight.priority})

@app.route('/api/projects/<int:id>/actions', methods=['POST'])
def add_action(id):
    project = Project.query.get_or_404(id)
    data = request.get_json()
    action = Action(project=project, title=data['title'], description=data['description'], due=data['due'], priority=data['priority'], status=data['status'])
    db.session.add(action)
    db.session.commit()
    return jsonify({'id': action.id, 'title': action.title, 'description': action.description, 'due': action.due, 'priority': action.priority, 'status': action.status})

@app.route('/api/projects/<int:id>/risks', methods=['POST'])
def add_risk(id):
    project = Project.query.get_or_404(id)
    data = request.get_json()
    risk = Action(
        project=project,
        title=f"Flagged Risk: {data['title']}",
        description=f"Risk flagged from insight on {datetime.now().isoformat()}: {data['description']}",
        due=data['due'] or 'Due in 24 hours',
        priority=data['priority'],
        status='New'
    )
    db.session.add(risk)
    db.session.commit()
    return jsonify({
        'id': risk.id,
        'title': risk.title,
        'description': risk.description,
        'due': risk.due,
        'priority': risk.priority,
        'status': risk.status
    })

# Real-time updates with application context and AI insight
def update_progress_and_insights():
    with app.app_context():
        while True:
            project = Project.query.filter_by(name='Site Alpha').first()
            if project:
                # Update progress
                new_progress = min(project.progress + 1, 100)
                project.progress = new_progress
                db.session.commit()
                socketio.emit('progress_update', {'progress': new_progress})

                # Simulate new Alfred Insight every 2 minutes
                new_insight = {
                    'title': 'Alfred Insight: New Risk Detected',
                    'description': f'Random risk identified: {random.choice(["Equipment delay", "Weather impact", "Staff shortage"])} at {datetime.now().isoformat()}.',
                    'priority': random.choice(['High', 'Medium', 'Normal']),
                    'time': datetime.now()
                }
                insight = Insight(project=project, **new_insight)
                db.session.add(insight)
                db.session.commit()
                socketio.emit('insight_update', new_insight)

                # Basic AI-generated insight
                if project.progress > 70 and project.weather_temp > 30:
                    ai_insight = {
                        'title': 'AI Insight: Heat Risk',
                        'description': 'High temperature may affect worker safety and equipment. Recommend schedule adjustment.',
                        'priority': 'High',
                        'time': datetime.now()
                    }
                    ai_insight_db = Insight(project=project, **ai_insight)
                    db.session.add(ai_insight_db)
                    db.session.commit()
                    socketio.emit('insight_update', ai_insight)

            time.sleep(120)  # Update every 2 minutes

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('initial_data', {'progress': 40})

# Start the update thread with application context
import threading
threading.Thread(target=update_progress_and_insights, daemon=True).start()

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)