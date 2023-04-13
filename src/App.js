import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import { useState } from "react";

function App() {

  const [colaboradores, setColabores] = useState([])

  const handleColaborador = (colaborador) => {
    setColabores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Header />
      <Formulario handleAddColaborador={(colaborador)=> handleColaborador(colaborador)}/>
    </div>
  );
}

export default App;
