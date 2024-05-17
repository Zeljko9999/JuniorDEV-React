import Brisanje from "./Brisanje";
import { useState, useEffect } from "react";
import axios from "axios";
import Promjena from "./Promjena";

function RedakTablice({ rez, id, dodaj }) {

const [uredi, postaviUredi] = useState(false);
const [vrste, postaviVrste] = useState([]);
const [velicine, postaviVelicine] = useState([]);
const [formaPodaci, postaviPodatke] = useState({
  vrsta: rez.vrsta,
  velicina: rez.velicina,
  boja: rez.boja,
  date: rez.date,
  slika: rez.slika,

});

  useEffect(() => {
    Promise.all([
    axios.get("http://localhost:3001/vrste"),
    axios.get("http://localhost:3001/velicine")
  ]) 
      .then(([rezVrste, rezVelicine]) => {
        postaviVrste(rezVrste.data);
        postaviVelicine(rezVelicine.data);
      })
      .catch(err => console.log(err.message));
  }, []);


  function promjenaPrikaza() {
    postaviUredi(true);
  }

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...formaPodaci, [name]: value });
  }

    if (uredi === false) {
      return (
      <tr>
        <td>{rez.vrsta}</td>
        <td>{rez.velicina}</td>
        <td>  <div style={{ backgroundColor: rez.boja, padding: '15px' }}> </div> </td>
        <td>{rez.date}</td>
        <td><img style={{maxWidth: "100px" }} src={rez.slika} /></td>
        <td> <button onClick={promjenaPrikaza}>Uredi</button> <Brisanje dodaj={dodaj} id={id}/></td>
      </tr>
      );}
    else {
      return (
      <tr>
        <td>
          <div>
            <select
            name='vrsta'
            value={formaPodaci.vrsta}
            onChange={promjenaUlaza}
            required>
            {vrste.map(vrsta => (
            <option key={vrsta.id} value={vrsta.naziv}>
            {vrsta.naziv}
            </option>
            ))}
            </select>
          </div>
        </td>
        <td>
          <div>
            <select
            name='velicina'
            value={formaPodaci.velicina}
            onChange={promjenaUlaza}
            required>
            {velicine.map(velicina => (
            <option key={velicina.id} value={velicina.oznaka}>
            {velicina.oznaka}
            </option>
            ))}
            </select>
          </div>
        </td>
        <td>
          <div style={{width:"100%"}}>
            <input 
            type="color"  
            name="boja" 
            value={formaPodaci.boja}
            onChange={promjenaUlaza}
            />
            </div>
        </td>
        <td>
          <div>
            <input
            type="date"
            name="date"
            value={formaPodaci.date}
            onChange={promjenaUlaza}
            />
          </div>
        </td>
        <td>
          <div>
            <input
            placeholder="Slika"
            type="text"
            name="slika"
            value={formaPodaci.slika}
            onChange={promjenaUlaza}
            />
          </div>  
        </td>
        <td>
          <Promjena rez={formaPodaci} id={id} postaviUredi={postaviUredi} dodaj={dodaj} />
        </td>
      </tr>
      );
    }
    
  }
   
  export default RedakTablice;