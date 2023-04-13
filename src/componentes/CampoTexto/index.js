import { useState } from "react";
import "./style.css";

const CampoTexto = (props) => {

  const oninput = (event)=>{
    props.onChange(event.target.value)
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={oninput} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
