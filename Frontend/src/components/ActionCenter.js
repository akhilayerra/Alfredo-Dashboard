import React from 'react';

function ActionCenter({ actions }) {
  return (
    <section className="action-center">
      <h2>Action Center</h2>
      <div className="immediate">
        <h3>IMMEDIATE ACTION REQUIRED</h3>
        {actions.slice(0, 1).map((action, idx) => (
          <div key={idx} className="action-item">
            <h4>{action.title}</h4>
            <p>{action.description}</p>
            <small>{action.due}</small>
            <span className="priority high">{action.priority}</span>
          </div>
        ))}
      </div>
      <div className="critical">
        <h3>CRITICAL RISK REGISTER</h3>
        {actions.slice(1).map((action, idx) => (
          <div key={idx} className="action-item">
            <h4>{action.title}</h4>
            <p>{action.description}</p>
            {action.due && <small>{action.due}</small>}
            <span className={`priority ${action.priority.toLowerCase()}`}>{action.priority}</span>
            <span className="status">{action.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActionCenter;