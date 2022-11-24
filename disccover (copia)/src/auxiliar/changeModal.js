import healer from "../img/healer.png";
import wizard from "../img/wizard.png";
import warrior from "../img/warrior.png";
import lumberjack from "../img/lumberjack.png";
import miner from "../img/miner.png";
import { playerCharactersDict } from "./getBoard";

let charName;

function changeModal(newCharName) {
  const imagesDict = {
    Mago: wizard,
    Guerrero: warrior,
    Sanador: healer,
    Leñador: lumberjack,
    Minero: miner
  }

  if (newCharName) {
    charName = newCharName;
  }

  const modal = document.getElementById("myModal");
  modal.style.display = "block";

  const modalTitle = document.getElementById("modal-title");
  modalTitle.innerHTML = charName;
  const modalImg = document.getElementById("character-img-modal");
  modalImg.src = imagesDict[charName];

  const attackValue = playerCharactersDict[charName]["attack"];
  const defenseValue = playerCharactersDict[charName]["defense"];
  const velocityValue = playerCharactersDict[charName]["velocity"];
  const attackBar = document.getElementById("inner-progress-bar-1");
  const defenseBar = document.getElementById("inner-progress-bar-2");
  const velocityBar = document.getElementById("inner-progress-bar-3");
  attackBar.style.width = `${Math.round(attackValue / 100 * 450)}px`;
  defenseBar.style.width = `${Math.round(defenseValue / 100 * 450)}px`;
  velocityBar.style.width = `${Math.round(velocityValue / 100 * 450)}px`;
  
  const levelText = document.getElementById("modal-level-text");
  levelText.innerHTML = playerCharactersDict[charName]["level"];

  const woodValue = document.getElementById("modal-wood-value");
  const stoneValue = document.getElementById("modal-stone-value");
  const modalLevelContainer = document.getElementById("modal-level-up-container");
  if (playerCharactersDict[charName]["level"] === 1) {
    modalLevelContainer.style.visibility = "visible";
    woodValue.innerHTML = "X2";
    stoneValue.innerHTML = "X1";
  } else if (playerCharactersDict[charName]["level"] === 2) {
    modalLevelContainer.style.visibility = "visible";
    woodValue.innerHTML = "X2";
    stoneValue.innerHTML = "X3";
  } else {
    modalLevelContainer.style.visibility = "hidden";
  }
}

export default changeModal;