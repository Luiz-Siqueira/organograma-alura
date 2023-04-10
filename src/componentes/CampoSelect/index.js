import "./style.css";
import { v4 as uuidv4} from 'uuid';

const CampoSelect = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item)=> <option key={uuidv4()}>{item}</option>)}
      </select>
    </div>
  );
};

export default CampoSelect;
