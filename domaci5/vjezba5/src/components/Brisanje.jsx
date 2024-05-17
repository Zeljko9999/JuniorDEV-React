import axios from "axios";
import { useState } from "react";
import stil from './Brisanje.module.css'
 
function Brisanje(props) {
 
  async function brisiPodatak() {
    const confirmDelete = window.confirm("Are you sure you want to delete this data?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:3001/odjeca/${props.id}`);
      props.dodaj(stanje => stanje.filter(el => el.id != props.id));
     }
    }   

  return (
    <div style={{display: "inline-block", padding:"10px"}}>
      <button className={stil.brisiButton} onClick={brisiPodatak}></button>
    </div>
  );
}
 
export default Brisanje;