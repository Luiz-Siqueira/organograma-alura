import { useState } from "react";

import CampoSelect from "../CampoSelect";
import CampoTexto from "../CampoTexto";
import Button from "../Button";
import "./style.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const itens = [
    "Cabana na Praia",
    "Cabana na Montanha",
    "Carpintaria",
    "Casinha do Jardim",
    "Clínica do Harvey",
    "Casa da Fazenda",
    "Casa da Robin",
    "Casa da Sam",
    "Casa da Señor Vincente",
    "Casa da Willy",
    "Casa da Jodi",
    "Casa da Kent",
    "Casa da Leah",
    "Casa da Linus",
    "Casa da Pam",
    "Gabinete do Prefeito",
    "JojaMart",
    "Mansão da Bruxa",
    "Salão de Beleza da Emily",
    "Salão de Beleza da Sandy",
    "Sótão Abandonado",
    "Torre do Mago",
    "Caverna do Mutante",
  ];

  const OnSubmit = (event) => {
    event.preventDefault();
    props.handleAddColaborador({ nome, cargo, imagem, time });
  };

  return (
    <section className="formulario">
      <form onSubmit={OnSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          onChange={(value) => setNome(value)}
          required
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          valor={cargo}
          onChange={(value) => setCargo(value)}
          required
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto
          valor={imagem}
          onChange={(value) => setImagem(value)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <CampoSelect
          valor={time}
          onChange={(value) => setTime(value)}
          label="Casa"
          itens={itens}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
