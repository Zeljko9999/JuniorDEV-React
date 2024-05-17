import { useState } from "react";
 
function Kontakt({ setKontaktData }) {
    const [email, postaviEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        postaviEmail(inputValue);

        const isValid = validateEmail(inputValue);
        setIsValidEmail(isValid);

        setKontaktData(inputValue);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
   
    return (
        <div>
          <div className="kontakt-forma">
            <label className="label" htmlFor="email">Kontakt</label>
            <div className="inputElem" >
                <input type="text" id="email" placeholder="Email adresa" value={email} onChange={(e) => handleChange(e)}
                        style={{ borderColor: isValidEmail ? '' : 'red' }} />
                {!isValidEmail && <p style={{ color: 'red', marginTop: "0px" }}>Please enter a valid email address.</p>}
            </div>
          </div>
        </div>
      );
  }
 
export default Kontakt;