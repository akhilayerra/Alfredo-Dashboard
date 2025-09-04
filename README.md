# Alfredo-Dashboard
## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v14.x or later) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Python** (v3.8 or later) - [Download](https://www.python.org/)
- **pip** (Python package manager)
- **Git** (for cloning the repository) - [Download](https://git-scm.com/)

Additionally, you need a Google Maps API key for the `ProjectSite` map functionality. Replace the placeholder `AIzaSyB98DGX2EPB_v6VZz7C9ozFGuD5j_h4l8s` in `ProjectSite.js` with your own key. Obtain one from the [Google Cloud Console](https://console.cloud.google.com/).

## Installation(backend)
    
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/alfred-dashboard.git
   cd alfred-dashboard
2.**installation**
    pip install -r requirements.txt
    contents:
    Flask==2.3.2
    Flask-SQLAlchemy==3.0.3
    Flask-CORS==4.0.0
    Flask-SocketIO==5.3.2

    .env file
    FLASK_APP=app.py
    FLASK_ENV=development



3.**installation(Frontend)**
    npm install
    npm start----to start application

## Functionality

1.Open Daily site briefing by clicking on daily site brifing on top
2.Added Google map API to show map

**API Endpoints**

GET /api/projects

Retrieves all projects with their insights and actions.


GET /api/projects/int:id

Retrieves details for a specific project by ID.


POST /api/projects/int:id/insights

Adds a new insight to the project.


POST /api/projects/int:id/actions

Adds a new action to the project.


POST /api/projects/int:id/risks

Flags an insight as a risk, adding it to the action list.


GET /api/projects/int:id/briefing

Retrieves briefing data for the project (e.g., stages, completion).

## Daily-Site-Briefing
1.Open Daily site briefing by clicking on daily site brifing on top
2.Added Google map API to show map