import CampoSelect from "../CampoSelect";
import CampoTexto from "../CampoTexto";
import Button from "../Button";
import "./style.css";

const Formulario = (props) => {

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
    "Caverna do Mutante"
  ];

  const OnSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <section className="formulario">
      <form onSubmit={OnSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto required label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto required label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto  label="Imagem" placeholder="Informe o endereço da imagem" />
        <CampoSelect label="Time" itens={itens}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Formulario;
