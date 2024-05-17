import axios from "axios";
 
function Promjena({rez, id, postaviUredi, dodaj}) {

  async function saljiZahtjev() {
    await axios.patch(`http://localhost:3001/odjeca/${id}`, {
      ...rez,
    })
        await postaviUredi(false);
        const response  = await axios.get("http://localhost:3001/odjeca");
        dodaj(response .data);
    
  }
  return <button style={{backgroundColor:"rgb(13, 217, 13)"}} onClick={saljiZahtjev}>Spremi</button>;
}
 
export default Promjena;