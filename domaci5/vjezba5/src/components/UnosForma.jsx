import axios from "axios";
import { useState, useEffect } from "react";
import stil from './UnosForma.module.css'
 
function UnosForma(props) {
  const [formaPodaci, postaviPodatke] = useState({
    vrsta: "",
    velicina: "",
    boja: "#000000",
    date:"",
    slika: "",

  });
  const [vrste, postaviVrste] = useState([]);
  const [velicine, postaviVelicine] = useState([]);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...formaPodaci, [name]: value });
  }
 
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
 
  const saljiPodatke = event => {
    event.preventDefault();
  
    axios.post('http://localhost:3001/odjeca', formaPodaci)
    .then(rez => { props.dodaj(stanje => [...stanje, rez.data])} )
  };
 
  return (
  <form className={stil.forma} onSubmit={saljiPodatke}>
    <h3 className={stil.naslovForma}>Dodaj novu </h3>
    <div>
     <select
      name='vrsta'
      value={formaPodaci.vrsta}
      onChange={promjenaUlaza}
      required>
      <option value=''>Vrsta</option>
      {vrste.map(vrsta => (
        <option key={vrsta.id} value={vrsta.naziv}>
          {vrsta.naziv}
        </option>
      ))}
      </select>
    </div>

    <div>
     <select
      name='velicina'
      value={formaPodaci.velicina}
      onChange={promjenaUlaza}
      required>
      <option value=''>Veličina</option>
      {velicine.map(velicina => (
        <option key={velicina.id} value={velicina.oznaka}>
          {velicina.oznaka}
        </option>
      ))}
      </select>
    </div>

    <div style={{width:"100%"}}>
    <label htmlFor="boja">Boja:</label>
    <input 
      type="color"  
      name="boja" 
      value={formaPodaci.boja}
      onChange={promjenaUlaza}
         />
    </div>

    <div>
      <input
        type="date"
        name="date"
        value={formaPodaci.date}
        onChange={promjenaUlaza}
      />
    </div>

    <div>
      <input
        placeholder="Slika"
        type="text"
        name="slika"
        value={formaPodaci.slika}
        onChange={promjenaUlaza}
      />
    </div>


      <button type='submit'>Spremi</button>
  </form>
  );
}
 
export default UnosForma;