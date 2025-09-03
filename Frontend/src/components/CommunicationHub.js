import React from 'react';
import RiskCard from './RiskCard';


function CommunicationHub({ insights, onInteraction }) {
  const handleFlagRisk = (insight) => {
    onInteraction('Flag Risk', insight); // Pass insight data for context
    alert(`Risk flagged for: ${insight.title}`); // Simple alert
  };

  return (
    <section className="communication-hub">
      <h2>Communication Hub</h2>
      <div className="tabs">
        <button className="active">Communications</button>
        <button>AI Assistant</button>
      </div>
      {insights.map((insight, idx) => (
        <RiskCard idx={idx} insight={insight} handleFlagRisk={handleFlagRisk} onInteraction={onInteraction} />
      ))}
    </section>
  );
}

export default CommunicationHub;