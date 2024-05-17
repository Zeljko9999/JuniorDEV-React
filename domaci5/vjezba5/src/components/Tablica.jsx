import RedakTablice from "./RedakTablice";
import stil from './Tablica.module.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tablica.scss';
import axios from "axios";
import { useState, useEffect } from "react";
 
function Tablica({ odjeca, dodaj }) {

  const [velicine, postaviVelicine] = useState([])
  const [selectedVelicina, postaviSelectedVelicina] = useState("");
 
//Filter logika

  useEffect(() => {
    axios
      .get("http://localhost:3001/velicine")
      .then(rez => postaviVelicine(rez.data))
      .catch(err => console.log(err.message));
  }, []);

  const promjenaUlaza = (event) => {
    const selectedValue = event.target.value;
    postaviSelectedVelicina(selectedValue);

    axios.get(`http://localhost:3001/odjeca?velicina=${selectedValue}`)
      .then(response => {
        dodaj(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered velicine:", error);
      });
  };

  return (
  <div className={stil.tableSection}>
    <div className={stil.filter}>
      <h4 className={stil.filterNaslov}>Filter:</h4>
      <input
      type='radio'
      name='velicina'
      id="sve"
      value=""
      onChange={promjenaUlaza}
      />
      <label htmlFor="sve" className={stil.filterLabela} key="" >Sve</label>
      {velicine.map(velicina => (
      <>     
      <input
      type='radio'
      name='velicina'
      id={velicina.oznaka}
      value={velicina.oznaka}
      onChange={promjenaUlaza}
      />
      <label htmlFor={velicina.oznaka} className={stil.filterLabela} key={velicina.oznaka}>{velicina.oznaka}</label>
      </>
      ))}

    </div>
    <h3 className={stil.naslovPopis}>Popis</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th >Vrsta</th>
          <th >Veličina</th>
          <th >Boja</th>
          <th >Datum</th> 
          <th >Slika</th>
          <th >Opcije</th>
        </tr>
      </thead>
      <tbody>
      {odjeca.map(({ id, ...rest }) => (
      <RedakTablice  key={id} id = {id} rez={rest} dodaj={dodaj}>
       
      </RedakTablice>
       ))}
      </tbody>
    </Table>
  </div>
  );
}

export default Tablica;