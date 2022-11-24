import changeView from "../../auxiliar/changeView";

function MiniHex(props) {
  return <li 
    id={props.id}
    className={`mini-hex ${props.type}-hex`}
    onClick={changeView}
    >
  </li>;
}

export default MiniHex;