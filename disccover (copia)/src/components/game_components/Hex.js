function Hex(props) {
  return <li 
  id={`hex-${props.hexId}`} 
  className={`hex ${props.type}-hex ${props.hover ? 'hover-hex' : ''}`}
  onClick={props.onClickProp}>
  </li>;
}

export default Hex;
