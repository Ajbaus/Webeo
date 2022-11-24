import newPlay from '../../auxiliar/newPlay';

function GameOptions(props) {
  return (
    <div className="div-options">
        <h3 id="options-title">¿Qué quieres hacer?</h3>
        <div className="options-container">
          <p id="gather-option" onClick={newPlay}>Recolectar recurso</p>
          <p id="heal-option">Sanar equipo</p>
          <p onClick={newPlay} id="pass-option">Pasar turno</p>
          <p onClick={props.getBoard}>Actualizar tablero</p>
        </div>
    </div>
    
  );
}

export default GameOptions;