import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from './components/Header';
import ProjectSite from './components/ProjectSite';
import CommunicationHub from './components/CommunicationHub';
import ActionCenter from './components/ActionCenter';
import ModalSiteBriefing from './components/ModalSiteBriefing';
import './App.css';

function App() {
  const [progress, setProgress] = useState(40);
  const [insights, setInsights] = useState([]);
  const [actions, setActions] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProjectId(data[0].id);
          setProgress(data[0].progress);
          setInsights(data[0].insights);
          setActions(data[0].actions);
        }
      });

    const socket = io('http://localhost:5000');
    socket.on('progress_update', (data) => setProgress(data.progress));
    socket.on('insight_update', (data) => setInsights((prev) => [...prev, data]));

    return () => socket.disconnect();
  }, []);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInteraction = (action, insight) => {
    console.log(`${action} triggered for: ${insight.title}`);
    if (projectId && action === 'Flag Risk') {
      fetch(`http://localhost:5000/api/projects/${projectId}/risks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: insight.title,
          description: insight.description,
          priority: insight.priority,
          due: 'Due in 24 hours', // Default due time
        }),
      })
        .then((res) => res.json())
        .then((newRisk) => {
          setActions((prev) => [...prev, newRisk]);
          alert(`Risk flagged for: ${insight.title}`);
        })
        .catch((error) => console.error('Error flagging risk:', error));
    } else if (projectId && ['Clarify', 'Update'].includes(action)) {
      fetch(`http://localhost:5000/api/projects/${projectId}/insights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `${action}: ${insight.title}`,
          description: `${action} requested on ${new Date().toLocaleString()}`,
          priority: insight.priority,
        }),
      })
        .then((res) => res.json())
        .then((newInsight) => setInsights((prev) => [...prev, newInsight]));
    }
  };

  return (
    <div className="App">
      <Header onOpenModal={handleOpenModal} />
      <main className="main">
        <ProjectSite progress={progress}  />
        <CommunicationHub insights={insights} onInteraction={handleInteraction} />
        <ActionCenter actions={actions} />
      </main>
      <ModalSiteBriefing open={openModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;