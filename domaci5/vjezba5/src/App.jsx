import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import Tablica from "./components/Tablica";
import stil from './App.module.css'
import UnosForma from "./components/UnosForma";

//npm install axios
//npm install react-bootstrap bootstraps
//npm install sass

function App() {

  const [odjeca, postaviOdjecu] = useState([]);
 
 useEffect(() => {
   axios
     .get("http://localhost:3001/odjeca/")
     .then(res => postaviOdjecu(res.data));
 }, []);

 return (
  <>
   <div className='App'>
     <h2 className={stil.glavniNaslov}>Moja garderoba</h2>
     <div className={stil.komponente}>
        <UnosForma dodaj={postaviOdjecu}/>
        <Tablica dodaj={postaviOdjecu} odjeca={odjeca} />  
     </div>
   </div>
    </>
  )
}

export default App
