import React from 'react';


function Zivotopis({children}) {
  return (
    <> 
      <div className="topTitle">
        <span className="crossed">Bru</span> 
        <span className="notCrossed"> Batman</span>
      </div>
      <div className="image-container">
       <img src="batman.jpeg" alt="Batman" className="batman-image" />    
      </div>
       {children} 
      
    </>
  );
}

export default Zivotopis;