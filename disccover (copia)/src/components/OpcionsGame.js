
import Button from './Buttons';
import '../styles/opcionesGame.css';

const adyacentDict = {
  1: [2, 3, 4],
  2: [1, 4, 5],
  3: [1, 4, 6],
  4: [1, 2, 3, 5, 6, 7],
  5: [2, 4, 7],
  6: [3, 4, 7],
  7: [4, 5, 6]
}

function eleccionOpciones(pos, dict){
    const pjs = dict[pos]
    console.log( pjs[1])
    if (pjs.includes("S")) {
        return ["Sanar", false]
        
    } else {
        return ["", true]
        
    }

}

function opcionRecolectar(pos, tipoHexagono){
    const tipo = tipoHexagono[pos]
    if (tipo == "wood" || tipo == "stone" || tipo == "gold") {
        return ["Sanar", false]
    } else {
        return ["", true]
        
    }

}

function Opciones(props) {
    eleccionOpciones(props.pos, props.dict)
  return (
    <div className='containerOpciones'>
        <p>¿Qué desea hacer?</p>
        <Button hidden={eleccionOpciones(props.pos, props.dict)[1]} submit={eleccionOpciones(props.pos, props.dict)[0]}/>
        <Button submit="Quedarse en la casilla"/>
        <Button submit="Avanzar"/>
        <Button hidden={opcionRecolectar(props.pos, props.tipoHexagono)[1]} submit={opcionRecolectar(props.pos, props.tipoHexagono)[0]}/>

    </div>
    
  );
}

export default Opciones;