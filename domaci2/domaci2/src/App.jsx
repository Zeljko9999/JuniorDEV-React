import React, { useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Semafor from './components/Semafor'
import Tipka from './components/Tipka'
import Statistics from './components/Statistics'
import ProgressBar from './components/ProgressBar'
import Timer from './components/Timer';



function App() {
  const [domacin, postaviBrojace1] = useState({golovi: 0, udarci: 0, kartoni: 0, prekrsaji: 0});
  const [gost, postaviBrojace2] = useState({golovi: 0, udarci: 0, kartoni: 0, prekrsaji: 0});
  const [resetFlag, setReset] = useState(false);

 
  const resetTimer = (stanje) => {
    stanje==false ? setReset(false) : setReset(true)
    
  }

  const resetValuesToZero = () => {
    
    resetTimer();

    const noviDomacin = { ...domacin };
    
    for (let i in noviDomacin) {
      noviDomacin[i] = 0;
    }
    postaviBrojace1(noviDomacin);
   
    const noviGost = { ...gost };

    for (let i in noviGost) {
      noviGost[i] = 0;
    }
    postaviBrojace2(noviGost);
  };

  return (
    <>
      <Semafor resultChild={<> <h2>{domacin.golovi} : {gost.golovi}</h2> <Timer resetValue={resetFlag} akcija={(stanje) => resetTimer(stanje)}></Timer></>}>
        <Tipka natpis="+" akcija={() => { postaviBrojace1({...domacin, golovi: domacin.golovi + 1 });}}>
        </Tipka> 
        <Tipka natpis="-" akcija={() => { postaviBrojace1({...domacin, golovi: domacin.golovi>0 ? domacin.golovi - 1 : domacin.golovi });}}>
        </Tipka> 
        <Tipka natpis="+" akcija={() => { postaviBrojace2({...gost, golovi: gost.golovi + 1 });}}>
        </Tipka> 
        <Tipka natpis="-" akcija={() => { postaviBrojace2({...gost, golovi: gost.golovi>0 ? gost.golovi - 1 : gost.golovi });}}>
        </Tipka> 
      </Semafor>
        
      <Statistics child={<Tipka natpis="Reset" akcija={resetValuesToZero}></Tipka>}>

          <ProgressBar label="Udarci na gol" value1={domacin.udarci} value2={gost.udarci}
                     buttonChild1={<> <Tipka natpis="+" akcija={() => { postaviBrojace1({...domacin, udarci: domacin.udarci + 1 });}}></Tipka> 
                                      <Tipka natpis="-" akcija={() => { postaviBrojace1({...domacin, udarci: domacin.udarci>0 ? domacin.udarci - 1 : domacin.udarci });}}></Tipka> 
                                      <p className='display'> {domacin.udarci} </p>
                                  </>}
                     buttonChild2={<> <p className='display'> {gost.udarci} </p>
                                      <Tipka natpis="+" akcija={() => { postaviBrojace2({...gost, udarci: gost.udarci + 1 });}}>
                                      </Tipka> <Tipka natpis="-" akcija={() => { postaviBrojace2({...gost, udarci: gost.udarci>0 ? gost.udarci - 1 : gost.udarci });}}></Tipka> 
                                  </>}>
          </ProgressBar>
     

          <ProgressBar label="Žuti kartoni" value1={domacin.kartoni} value2={gost.kartoni}
                     buttonChild1={<> <Tipka natpis="+" akcija={() => { postaviBrojace1({...domacin, kartoni: domacin.kartoni + 1 });}}></Tipka> 
                                      <Tipka natpis="-" akcija={() => { postaviBrojace1({...domacin, kartoni: domacin.kartoni>0 ? domacin.kartoni - 1 : domacin.kartoni });}}></Tipka> 
                                      <p className='display'> {domacin.kartoni} </p>
                                  </>}
                     buttonChild2={<> <p className='display'> {gost.kartoni} </p>
                                      <Tipka natpis="+" akcija={() => { postaviBrojace2({...gost, kartoni: gost.kartoni + 1 });}}>
                                      </Tipka> <Tipka natpis="-" akcija={() => { postaviBrojace2({...gost, kartoni: gost.kartoni>0 ? gost.kartoni - 1 : gost.kartoni });}}></Tipka> 
                                  </>}>
          </ProgressBar>
 
          <ProgressBar label="Prekršaji" value1={domacin.prekrsaji} value2={gost.prekrsaji}
                     buttonChild1={<> <Tipka natpis="+" akcija={() => { postaviBrojace1({...domacin, prekrsaji: domacin.prekrsaji + 1 });}}></Tipka> 
                                      <Tipka natpis="-" akcija={() => { postaviBrojace1({...domacin, prekrsaji: domacin.prekrsaji>0 ? domacin.prekrsaji - 1 : domacin.kartoni });}}></Tipka> 
                                      <p className='display'> {domacin.prekrsaji} </p>
                                  </>}
                     buttonChild2={<> <p className='display'> {gost.prekrsaji} </p>
                                      <Tipka natpis="+" akcija={() => { postaviBrojace2({...gost, prekrsaji: gost.prekrsaji + 1 });}}>
                                      </Tipka> <Tipka natpis="-" akcija={() => { postaviBrojace2({...gost, prekrsaji: gost.prekrsaji>0 ? gost.prekrsaji - 1 : gost.prekrsaji });}}></Tipka> 
                                  </>}>
          </ProgressBar>
      </Statistics>
      
    </>
  )
}

export default App
