import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MetricsCard from './MetricsCard';


function ModalSiteBriefing({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <header className="modal-header">
          <h2>Daily Site Briefing - Maharashtra Solar Network</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color:"#ffffff",fontSize:"24px" }}>×</button>
        </header>
        <div className="modal-tabs">
          <button className="active">Network Overview</button>
          <button>Project Schematic</button>
        </div>
        <div className="schematic">
          <div ><MetricsCard></MetricsCard></div>
          <div className="flow">
            <div className="stage">
              <h4 style={{ color: 'orange'}}>Development & Permitting</h4>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}>
                <p>Land Acquisition</p><button style={{backgroundColor: '#18ba61e4',marginBottom:"10px",borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button></div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}>
                <p>PPA Signed</p><button style={{backgroundColor: '#18ba61e4',marginBottom:"10px",borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button></div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}>
                <p>Permits Secured</p><button style={{backgroundColor: '#18ba61e4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button></div></div>
            <div className="stage">
              <h4 style={{ color: 'orange'}}>Engineering & Design</h4>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Design Approvals</p><button style={{backgroundColor: '#18ba61e4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Engineering Complete</p><button style={{backgroundColor: '#18ba61e4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Grid Connection</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Layout Finalized</p><button style={{backgroundColor: '#f2ca00d2',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Jun 17</button> </div>
            </div>
            <div className="stage">
              <h4 style={{ color: 'orange'}}>Procurement</h4>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Module Delivery 30%</p><button style={{backgroundColor: '#e7232de4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Monsoon Impact</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Inverter Delivery</p><button style={{backgroundColor: '#18ba61e4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>BOS Procurement</p><button style={{backgroundColor: '#f2ca00d2',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Aug 10</button> </div>
            </div>
            <div className="stage">
              <h4 style={{ color: 'orange'}}>Construction</h4>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Civil Works</p><button style={{backgroundColor: '#18ba61e4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>100% Completed</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Mounting Structure</p><button style={{backgroundColor: '#f2ca00d2',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>In Progress</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Electrical Installation</p><button style={{backgroundColor: '#89918de4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Sep 15</button> </div>
            </div>
            <div className="stage">
              <h4 style={{ color: 'orange'}}>Testing & Commissioning</h4>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Pre-commissioning</p><button style={{backgroundColor: '#89918de4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>A delay in module</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Grid Sync</p><button style={{backgroundColor: '#89918de4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Oct 7</button> </div>
              <div style={{backgroundColor: '#5a5f5ba7', borderRadius: '5px',alignItems: 'center',paddingLeft:"20px"}}><p>Final Acceptance</p><button style={{backgroundColor: '#89918de4',borderRadius:"6px",color:"#ffffff",fontSize:"12px",fontWeight:"bold",padding:"3px"}}>Oct 15</button> </div>
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