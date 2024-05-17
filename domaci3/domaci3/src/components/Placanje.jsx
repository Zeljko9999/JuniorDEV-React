import React from 'react';

function Placanje({children, emailChild, addressChild, placanjeChild, termsChild}) {
    return (
      <> 

        <div className="title">
            <span className='firstPart'>Račun --</span> 
            <span className="arrow">&gt;</span>
            <span className='secondPart'>Plaćanje</span> 
        </div>

        {emailChild}
        {addressChild}
        {placanjeChild}
        {termsChild}
        {children}

      </>
    );
  }
  
  export default Placanje;