import healer from "../../img/healer.png";
import wizard from "../../img/wizard.png";
import warrior from "../../img/warrior.png";
import lumberjack from "../../img/lumberjack.png";
import miner from "../../img/miner.png";
import changeModal from "../../auxiliar/changeModal";

function GameCharacter(props) {
  const imagesDict = {
    Mago: wizard,
    Guerrero: warrior,
    Sanador: healer,
    Leñador: lumberjack,
    Minero: miner
  }
  return (
    <div className="game-character">
        <p id={`character-name-${props.id}`}>{props.name}</p>
        <img
          src={imagesDict[props.name]}
          alt="char-logo"
          className="character-img"
          id={`character-img-${props.id}`}
          onClick={() => {
            const charName = document.getElementById(`character-name-${props.id}`).innerHTML;
            changeModal(charName);
          }}
        />
        <div className="char-level-container" id={`character-lvl-${props.id}`}>
          <p id={`character-lvl-p-${props.id}`}>{props.level}</p>
        </div>
        {/* <p className="stats-text">Nivel {props.level}</p>
        <p className="stats-text">Energía</p>
        <div className="energy-bars-container">
          <div className="energy-bar"></div>
          <div className="energy-bar"></div>
        </div>
        <p className="stats-text see-char-text">Ver</p> */}
    </div>
    
  );
}

export default GameCharacter;