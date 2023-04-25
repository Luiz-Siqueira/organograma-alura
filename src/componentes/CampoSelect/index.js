import "./style.css";
import { v4 as uuidv4} from 'uuid';

const CampoSelect = (props) => {

  const oninput = (event)=>{
    props.onChange(event.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <select value={props.value} onChange={oninput}>
      <option value=""></option>
        {props.itens.map((item)=> <option key={uuidv4()}>{item}</option>)}
      </select>
    </div>
  );
};

export default CampoSelect;
