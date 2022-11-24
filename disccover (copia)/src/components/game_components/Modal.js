import ProgressBar from "./ProgressBar";
import stone from "../../img/stone.png";
import wood from "../../img/wood.png";
import newPlay from "../../auxiliar/newPlay";

function Modal(props) {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span 
          className="close"
          onClick={() => {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("modal-message").style.visibility = "hidden";
          }}
          >&times;</span>
        <div className="modal-container">
          <div>
            <h3 id="modal-title">Title</h3>
            <ProgressBar text="Ataque" id={1}/>
            <ProgressBar text="Defensa" id={2}/>
            <ProgressBar text="Velocidad" id={3}/>
          </div>
          <div className="character-div-modal">
            <img
              alt="char-logo"
              className="character-img-modal"
              id={"character-img-modal"}
            />
            <div className="modal-level-container">
              <h3 id="modal-level-text">1</h3>
            </div>
            <div className="modal-level-up-container" id="modal-level-up-container">
              <p id="level-up-option" onClick={newPlay}>
                Subir nivel
              </p>
              <img 
                alt="resource"
                src={wood}
                className="modal-resource"/>
              <p id="modal-wood-value">X1</p>
              <img
                alt="resource"
                src={stone}
                className="modal-resource"/>
              <p id="modal-stone-value">X1</p>
            </div>
            <p id="modal-message">No tienes suficientes recursos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;