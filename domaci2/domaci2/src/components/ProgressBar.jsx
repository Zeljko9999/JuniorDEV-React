import React, { useState} from 'react';
import Tipka from './Tipka'

function ProgressBar({ label, value1, value2, buttonChild1, buttonChild2 }) {
 
    let progress = 100
    if (value1 != 0 || value2 != 0){
      progress = (value1/(value1 + value2)) * 100
    }
    


    return (
      <div className= "stat-row">
            <div className="buttons">
            {buttonChild1}
            </div>
            
           <div className="progress-bar-section">
            <strong>{label}</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}
              </div>
            </div>
          </div>
          
          <div className="buttons">
          {buttonChild2}
          </div>
      </div>
    );
  }

  export default ProgressBar;