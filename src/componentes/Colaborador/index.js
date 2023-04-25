import "./style.css";

const Colaborador = (props) => {
  const { nome, cargo, imagem } = props.colaborador;

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: `${props.colorBackground}` }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
