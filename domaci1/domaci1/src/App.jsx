import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";
import GeneralRow from "./components/GeneralRow";
import ProgressBar from "./components/ProgressBar";
import Zivotopis from "./components/Zivotopis";


function App() {

  return (
    <>
      <Zivotopis>
        <Card title="Opći podaci">
          <GeneralRow data="Datum rođenja:" value="27. travnja 1975" />
          <GeneralRow data="Adresa:" value="Batcave, Gotham City" />
          <GeneralRow data="Kontakt:" value="batman@gotham.com" />
        </Card>
        <Card title="Sposobnosti">
          <ProgressBar label="Detektivske vještine:" percent={100} />
          <ProgressBar label="Borilačke vještine:" percent={90} />
          <ProgressBar label="javascript:" percent={77} />
        </Card>
      </Zivotopis>
    </>
  )
}

export default App
