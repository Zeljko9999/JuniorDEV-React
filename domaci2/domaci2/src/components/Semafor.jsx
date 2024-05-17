import React from 'react';

function Semafor({children, resultChild}) {
    return (
      <> 
        <div className="date">
          <span>22/4/2024</span> 
        </div>
        <div className='mid'>
          <div className='club'>
            <img src="barca.png" alt="Barca" className="club-image" />
            <h2 className="club-name">Barcelona</h2>
          </div>
          <div className="result">
            {resultChild}
          </div>
          <div className='club'>
            <img src="realmadrid.png" alt="Real" className="club-image" />
            <h2 className="club-name">Real Madrid</h2>
          </div>
        </div>
        <div className="buttons">
          {children}
        </div>
        
      </>
    );
  }
  
  export default Semafor;