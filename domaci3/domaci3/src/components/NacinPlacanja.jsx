import { useState } from "react";
 
function NacinPlacanja({ setPlacanjeData }) {
    const [placanje, postaviPlacanje] = useState("");
   
    const handleChange = e => {
        postaviPlacanje(e.target.value);
        setPlacanjeData(e.target.value); 
    }

        

    return (
        <div className="placanje-section">
        <label className="label-placanje" htmlFor="placanje">Način plaćanja:</label>
        <div className="placanje-form">
            <label className="option">
                <input type="radio" name="placanje" value="Pouzeće" checked={placanje === "Pouzeće"} onChange={(e) => handleChange(e)} />
                <span className="circle"></span>
                Pouzeće
            </label>
            <label className="option">
                <input type="radio" name="placanje" value="Kartica" checked={placanje === "Kartica"} onChange={(e) => handleChange(e)} />
                <span className="circle"></span>
                Kartica
            </label>
        </div>
    </div>
      );
  }
 
export default NacinPlacanja;