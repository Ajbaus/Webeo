import gold from "../../img/gold.png";
import stone from "../../img/stone.png";
import wood from "../../img/wood.png";

function Resources(props) {
    
  return (
    <div className="div-resources">
      <h3>Recursos</h3>
      <div className="resource-container">
        <img src={wood} alt="wood" className="resource-img"></img>
        <p id="wood-count">X{props.playerResources.wood}</p>
      </div>
      <div className="resource-container">
        <img src={stone} alt="stone" className="resource-img"></img>
        <p id="stone-count">X{props.playerResources.stone}</p>
      </div>
      <div className="resource-container">
        <img src={gold} alt="gold" className="resource-img"></img>
        <p id="gold-count">X{props.playerResources.gold}</p>
      </div>
    </div>
  )  
}

export default Resources;