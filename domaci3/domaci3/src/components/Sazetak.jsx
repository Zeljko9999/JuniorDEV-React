import React, { useState } from 'react';

function Sazetak({ object }) {

  const podaciValues = Object.values(object);

  return (
  <>
    <h2 style={{ textAlign:'center' }}>Podaci o narudžbi:</h2>  
    <div className='sazetak-section'>     
      <div className='sazetak-varijable'>
        <p>Email:</p>
        <p>Ime:</p>
        <p>Država:</p>
        <p>Adresa:</p>
        <p>Način plaćanja:</p>
      </div>
      <div className='sazetak-podaci'>
      {podaciValues.map((value, index) => (
            <p key={index}>{value}</p> ))}
      </div>
    </div>
  </> 
  );
}

export default Sazetak;