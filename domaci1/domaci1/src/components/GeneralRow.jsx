import React from 'react';

function GeneralRow({ data, value }) {
    return (
        <div className="general-row">
         <strong>{data}</strong> <p>{value}</p>
        </div>
    );
  }

  export default GeneralRow;