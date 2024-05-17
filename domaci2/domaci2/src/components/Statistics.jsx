import React from 'react';
import Tipka from './Tipka'

function Statistics({ children, child}) {
    return (
      <div className="statistics-section">
        <div className="full-stat">

            {children}

        </div>
        <div className='reset-button'>
        {child}
        </div>
      </div>
    );
  }

  export default Statistics;