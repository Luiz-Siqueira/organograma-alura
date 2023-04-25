import Colaborador from "../Colaborador";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section
            className="time"
            style={{ backgroundColor: `${props.time.primaryColor}` }}
        >
            <h3 style={{ borderColor: `${props.time.secondaryColor}` }}>
                {props.time.nome}
            </h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador colorBackground={props.time.secondaryColor} key={uuidv4()} colaborador={colaborador} />
                ))}
            </div>
        </section>

    );
};

export default Time;
