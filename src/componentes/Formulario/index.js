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


  const OnSubmit = (event) => {
    event.preventDefault();
    props.handleAddColaborador({ nome, cargo, imagem, time });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
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
          value={time}
          onChange={(value) => {
            console.log('value', value)
            setTime(value)
          }}
          label="Casa"
          itens={props.timeSelect}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
