import "./style.css";

const CampoTexto = (props) => {
  return (
    //   <header>
    //     <img src="/images/banner.png" alt="teste"/>
    //   </header>
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
