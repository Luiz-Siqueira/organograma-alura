import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [colaboradores, setColabores] = useState([]);

  const handleColaborador = (colaborador) => {
    setColabores([...colaboradores, colaborador]);
    console.log(colaborador);
  };

  const times = [
    {
      nome: "Cabana na Praia",
      primaryColor: "#F2D4B4",
      secondaryColor: "#E8C9AF",
    },
    {
      nome: "Cabana na Montanha",
      primaryColor: "#C7C7C7",
      secondaryColor: "#A8A8A8",
    },
    {
      nome: "Carpintaria",
      primaryColor: "#C19A6B",
      secondaryColor: "#A7814E",
    },
    {
      nome: "Casinha do Jardim",
      primaryColor: "#7C9F70",
      secondaryColor: "#5B7D50",
    },
    {
      nome: "Clínica do Harvey",
      primaryColor: "#E3D8D0",
      secondaryColor: "#D1C5BD",
    },
    {
      nome: "Casa da Fazenda",
      primaryColor: "#F2CF9D",
      secondaryColor: "#D8B47B",
    },
    {
      nome: "Casa da Robin",
      primaryColor: "#BACAD7",
      secondaryColor: "#8E9EA9",
    },
    {
      nome: "Casa da Sam",
      primaryColor: "#B6C0D4",
      secondaryColor: "#9AA4BA",
    },
    {
      nome: "Casa da Señor Vincente",
      primaryColor: "#D3C9B7",
      secondaryColor: "#B7A88E",
    },
    {
      nome: "Casa da Willy",
      primaryColor: "#BDBDBD",
      secondaryColor: "#9E9E9E",
    },
    {
      nome: "Casa da Jodi",
      primaryColor: "#E3C3B3",
      secondaryColor: "#D0A494",
    },
    {
      nome: "Casa da Kent",
      primaryColor: "#9FB4C7",
      secondaryColor: "#829EBA",
    },
    {
      nome: "Casa da Leah",
      primaryColor: "#9CB6A9",
      secondaryColor: "#7C9C84",
    },
    {
      nome: "Casa da Linus",
      primaryColor: "#D0C8B7",
      secondaryColor: "#B7A98E",
    },
    {
      nome: "Casa da Pam",
      primaryColor: "#A68A63",
      secondaryColor: "#896F4F",
    },
    {
      nome: "Gabinete do Prefeito",
      primaryColor: "#C5C5C5",
      secondaryColor: "#A7A7A7",
    },
    {
      nome: "JojaMart",
      primaryColor: "#C19A6B",
      secondaryColor: "#A7814E",
    },
    {
      nome: "Mansão da Bruxa",
      primaryColor: "#A12C5D",
      secondaryColor: "#852647",
    },
    {
      nome: "Salão de Beleza da Emily",
      primaryColor: "#D7C2BB",
      secondaryColor: "#C3A8A0",
    },
    {
      nome: "Salão de Beleza da Sandy",
      primaryColor: "#F7D5B5",
      secondaryColor: "#E9C1AA",
    },
    {
      nome: "Sótão Abandonado",
      primaryColor: "#8C8C8C",
      secondaryColor: "#6F6F6F",
    },
    {
      nome: "Torre do Mago",
      primaryColor: "#5F9EA0",
      secondaryColor: "#E6E6FA",
    },
    {
      nome: "Caverna do Mutante",
      primaryColor: "#8B008B",
      secondaryColor: "#FF69B4",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Formulario
        timeSelect={times.map((time) => time.nome)}
        handleAddColaborador={(colaborador) => handleColaborador(colaborador)}
      />

      {times.map((time) => {
        return (
          <Time
            key={uuidv4}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
