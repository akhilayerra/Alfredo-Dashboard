from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    progress = db.Column(db.Integer, default=0)
    capacity = db.Column(db.Integer, nullable=False)
    weather_temp = db.Column(db.Integer)
    weather_wind = db.Column(db.Integer)
    weather_condition = db.Column(db.String(50))

    insights = db.relationship('Insight', backref='project', lazy=True)
    actions = db.relationship('Action', backref='project', lazy=True)

class Insight(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    time = db.Column(db.DateTime, default=db.func.current_timestamp())
    priority = db.Column(db.String(50))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    due = db.Column(db.String(100))
    priority = db.Column(db.String(50))
    status = db.Column(db.String(50))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))