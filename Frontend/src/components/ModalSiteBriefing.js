import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function ModalSiteBriefing({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <header className="modal-header">
          <h2>Daily Site Briefing - Maharashtra Solar Network</h2>
          <button onClick={onClose} color='inherit'>×</button>
        </header>
        <div className="modal-tabs">
          <button className="active">Network Overview</button>
          <button>Project Schematic</button>
        </div>
        <div className="schematic">
          <div className="completion">SPI Completion 0.85 42%</div>
          <div className="flow">
            <div className="stage">
              <h3>Development & Permitting</h3>
              <div className="subitem ">
                <p>Land Acquisition</p><button className='completed'>100% Completed</button></div>
              <div className="subitem ">
                <p>Land Acquisition</p><button className='completed'>100% Completed</button></div>
              <div className="subitem ">
                <p>Land Acquisition</p><button className="completed">100% Completed</button></div>            </div>
            <div className="stage">
              <h3>Engineering & Design</h3>
              <div className="subitem complete">Design Approvals 100% Completed</div>
              <div className="subitem complete">Engineering Complete 100% Completed</div>
              <div className="subitem in-progress">Layout Finalized 75% Jul 17</div>
            </div>
            <div className="stage">
              <h3>Procurement</h3>
              <div className="subitem warning">Module Delivery 35% Monsoon Impact</div>
              <div className="subitem complete">Inverter Completed 100%</div>
              <div className="subitem in-progress">BOS Procurement ~60% Aug 10</div>
            </div>
            <div className="stage">
              <h3>Construction</h3>
              <div className="subitem complete">Civil Works 100% Completed</div>
              <div className="subitem in-progress">Mounting Structure 45% In Progress</div>
              <div className="subitem">Electrical Installation 0% Sep 15</div>
            </div>
            <div className="stage">
              <h3>Testing & Commissioning</h3>
              <div className="subitem">Pre-Commissioning 0% A Delay In Module</div>
              <div className="subitem">Grid Sync 0% Oct 5</div>
              <div className="subitem">Final Acceptance 0% Oct 15</div>
            </div>
          </div>
        </div>
        <footer className="modal-footer">
          <button>Close</button>
          <button>Export Network Report</button>
        </footer>
      </Box>
    </Modal>
  );
}

export default ModalSiteBriefing;