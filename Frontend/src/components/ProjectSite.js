import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 18.9582,
  lng: 72.8321,
};

const markers = [
  { position: { lat: 19.3530, lng: 73.2765 }, label: 'Konkan' },
  { position: { lat: 18.6263, lng: 73.8055 }, label: 'Pimpri' },
  { position: { lat: 18.9582, lng: 72.8321 }, label: 'Mumbai' },
];

function ProjectSite({ progress,openSiteBrief }) {
  return (
    <section className="project-site">
      <h2>Project Site Alpha</h2>
      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyB98DGX2EPB_v6VZz7C9ozFGuD5j_h4l8s">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10} >
            {markers.map((marker, idx) => (
              <Marker key={idx} position={marker.position} label={marker.label} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="weather">
        <span>🌡️ 23 C</span>
        <span>💨 12km/h</span>
        <span>☀️ Clear</span>
      </div>
      <div className="stats">
        <div className="capacity">
          <h3>TOTAL CAPACITY</h3>
          <p>150 MM</p>
          <small>+15% from planned</small>
        </div>
        <div className="progress">
          <h3>PROGRESS</h3>
          <p>{progress}%</p>
          <div className="progress-bar">
            <div style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSite;