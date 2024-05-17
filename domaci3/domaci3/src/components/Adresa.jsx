import { useState, useEffect } from "react";
 
function Adresa({ setAdresaData }) {
    const [adresa, postaviAdresu] = useState({ime: "", drzava: "", adresa: ""});
    const [isValidIme, setIsValidIme] = useState(true);
    const [isValidAdresa, setIsValidAdresa] = useState(true);


    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        postaviAdresu(prevState => ({
            ...prevState,
            [fieldName]: value
        }));

        if (fieldName === 'ime') {
            setIsValidIme(value.length >= 2 && value.length <= 40);
        }

        if (fieldName === 'adresa') {
            setIsValidAdresa(value.length >= 5 && value.length <= 50);
        }      
    };

    useEffect(() => {
        setAdresaData(adresa.ime, adresa.drzava, adresa.adresa);
    }, [adresa]);
   
    
    return (
        <div>
            <div className="adresa-forma">
                <label className="label" >Adresa</label> 
                <div className="inputElem" >
                    <label className="secondLabel" htmlFor="ime">Ime:</label>           
                    <input type="text" id="ime" value={adresa.ime} onChange={(e) => handleChange(e, 'ime')} 
                        style={{ borderColor: isValidIme ? '' : 'red' }} />
                    {!isValidIme && <p style={{ color: 'red', margin: "0px auto" }}>Name must be between 2 and 40 characters.</p>}

                    <label className="secondLabel" htmlFor="drzava">Država:</label>  
                    <div>
                         <select className="select-list" id="drzava" value={adresa.drzava} onChange={(e) => handleChange(e, 'drzava')}>
                            <option value="">Select...</option>
                            <option value="Hrvatska">Hrvatska</option>
                            <option value="Slovenija">Slovenija</option>
                            <option value="Njemačka">Njemačka</option>
                            <option value="Austrija">Austrija</option>
                            <option value="Mađarska">Mađarska</option>
                            <option value="Italija">Italija</option>
                        </select>
                    </div>         

                    <label className="secondLabel" htmlFor="adresa">Adresa:</label>           
                    <input type="text" id="adresa" value={adresa.adresa} onChange={(e) => handleChange(e, 'adresa')} 
                        style={{ borderColor: isValidAdresa ? '' : 'red' }} />
                    {!isValidAdresa && <p style={{ color: 'red', margin: "0px auto" }}>Address must be between 5 and 50 characters.</p>}
                </div>
            </div>
        </div>
      );
  }
 
export default Adresa;