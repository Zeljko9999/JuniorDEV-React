import React, { useState, useEffect} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Placanje from './components/Placanje';
import Kontakt from './components/Kontakt';
import Adresa from './components/Adresa';
import NacinPlacanja from './components/NacinPlacanja';
import Uvjeti from './components/Uvjeti';
import Sazetak from './components/Sazetak';
import TemaContext from "./components/Context";

function App() { 
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [podaci, setPodatke] = useState({ kontaktData:null, imeData:null, drzavaData:null, adresaData:null, placanjaData:null })
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [tema, postaviTemu] = useState("light");
  const [empty, setEmpty] = useState(false);
  

  const variablesToCheck = ['kontaktData', 'imeData', 'drzavaData', 'adresaData', 'placanjaData'];

  
  useEffect(() => {
    const variablesToCheck = Object.keys(podaci);

    for (const variable of variablesToCheck) {
      if (podaci[variable] === null || podaci[variable] === "") {
        setEmpty(false);
        return;
      }
    }
    setEmpty(true);
  }, [podaci]);

  // function checkEmpty () {
  //   for (const variable of variablesToCheck) {
  //     if (podaci[variable] === null || podaci[variable] === "") {
  //       setEmpty(false)
  //       break;
  //     }
  //     else {
  //       setEmpty(true)
  //     }
  //   }
  // }

  const checkTerms = () => {
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
    } else {
      setOrderPlaced(true);
    }
  }
  
  const handleNaruciClick = () => {
    checkTerms();
   // checkEmpty();
  }

  function promjenaTeme(){
    postaviTemu(tema == "light" ? "dark" : "light")
  }

  if(!orderPlaced || !empty) {
    return ( 
      <>
    <button style={{margin:"20px"}} onClick={promjenaTeme}>Light/Dark</button>
    <style dangerouslySetInnerHTML ={{
      __html: `
      body{
        background: ${tema === "dark" ? "black" : "white"};
        color: ${tema === "dark" ? "white" : "black"};
      }
    `,
    }}>
    </style>
      <TemaContext.Provider value={tema}>  
     <Placanje emailChild={<Kontakt setKontaktData={kontakt => setPodatke({ ...podaci, kontaktData: kontakt })} />}
        addressChild={<Adresa setAdresaData={(ime, drzava, adresa) => setPodatke({ ...podaci, imeData: ime, drzavaData: drzava, adresaData: adresa})} />}  
        placanjeChild={<NacinPlacanja setPlacanjeData={placanje => setPodatke({ ...podaci, placanjaData: placanje })}/>} 
        termsChild={<Uvjeti setAcceptedTerms={setAcceptedTerms} />}>         
      <div className='naruci'>
       <button className='naruci-button' onClick={() => handleNaruciClick() }>
        Naruči
        </button>
        {!empty && <p style={{ color: 'red', margin: "30px", display:"block"}}>All inputs must be filled up!</p>}
      </div>
    </Placanje>
    </TemaContext.Provider>
    </>
    )}
  else {
    return (
    <Sazetak object={podaci}/>
  )}
  
}
export default App;