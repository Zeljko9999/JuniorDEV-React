import React, { useState } from 'react';

function Uvjeti({ setAcceptedTerms  }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    
  };

  setAcceptedTerms(isChecked);

  return (
    <div className="single-choice-option">
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox"></span>
        Prihvaćam uvjete narudžbe
      </label>
    </div>
  );
};

export default Uvjeti;