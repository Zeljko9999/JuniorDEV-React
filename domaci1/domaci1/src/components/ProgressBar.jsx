import React from 'react';

function ProgressBar({ label, percent }) {
    return (
      <div className="progress-bar-section">
        <strong>{label}</strong>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${percent}%` }}>
            {percent}
          </div>
        </div>
      </div>
    );
  }

  export default ProgressBar;