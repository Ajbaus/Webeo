import axios from "axios";
import {matchId, playerId} from '../components/Game';
import { circlesPos } from "./dictionaries";
import healer_img from "../img/healer.png";
import wizard_img from "../img/wizard.png";
import warrior_img from "../img/warrior.png";
import lumberjack_img from "../img/lumberjack.png";
import miner_img from "../img/miner.png";
import { currentHex, updateBoard } from "./changeView";
import changeModal from "./changeModal";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export let mapDict = {};
const idList = [...Array(61).keys()];
idList.map(key => {
  mapDict[key] = "hidden";
  return 0;
})
export let otherPiecesDict = {};
export let playerPiecesDict = {};
export let currentPayer;
export let playerCharactersDict;
export let resourcesDict;

const getBoard = async () => {
  const url = `${SERVER_URL}/matches/${matchId}/players/${playerId}`;
  await axios.get(url).then((response) => {
    mapDict = response.data["hexDict"];
    playerPiecesDict = response.data["playerPiecesDict"];
    otherPiecesDict = response.data["otherPiecesDict"];
    resourcesDict = response.data["resourcesDict"];
    playerCharactersDict = response.data["playerCharactersDict"];
    currentPayer = response.data["currentPlayer"];

    const playerPos = Object.keys(playerPiecesDict).map((key, _) => key)[0];
    const playerPiecesList = Object.keys(playerPiecesDict).map(key => {
      return playerPiecesDict[key]
    })[0];
    const playerHexType = mapDict[playerPos];

    // Change map hexagons
    Object.keys(mapDict).map((key, _) => {
      const hex = document.getElementById(`mini-hex-${key}`);
      hex.className = `mini-hex ${mapDict[key]}-hex`;
      return 0;
    });

    // Change resources count
    const woodCount = document.getElementById("wood-count");
    woodCount.innerText = `X${resourcesDict["wood"]}`;
    const stoneCount = document.getElementById("stone-count");
    stoneCount.innerText = `X${resourcesDict["stone"]}`;
    const goldCount = document.getElementById("gold-count");
    goldCount.innerText = `X${resourcesDict["gold"]}`;

    // Change characters images and names
    const imagesDict = {
      Mago: wizard_img,
      Guerrero: warrior_img,
      Sanador: healer_img,
      Leñador: lumberjack_img,
      Minero: miner_img
    }
    Object.keys(playerCharactersDict).map((key, index) => {
      const characterName = document.getElementById(`character-name-${index + 1}`);
      characterName.style.display = "block";
      characterName.innerText = key;
      const characterImg = document.getElementById(`character-img-${index + 1}`);
      characterImg.style.display = "block";
      characterImg.src = imagesDict[key];
      const characterLvl = document.getElementById(`character-lvl-${index + 1}`);
      characterLvl.style.display = "block";
      const characterLvlText = document.getElementById(`character-lvl-p-${index + 1}`)
      characterLvlText.innerHTML = playerCharactersDict[key]["level"];
      return 0;
    })

    // Change options
    if (currentPayer) {
      document.getElementById("options-title").innerText = "¿Qué quieres hacer?";
      if (["gold", "stone", "wood"].includes(playerHexType)) {
        document.getElementById("gather-option").style.display = "block";
      };
      if (playerPiecesList.includes("S")) {
        document.getElementById("heal-option").style.display = "block";
      };
      document.getElementById("pass-option").style.display = "block";
    } else {
      document.getElementById("options-title").innerText = "Esperando a otros jugadores...";
      document.getElementById("gather-option").style.display = "none";
      document.getElementById("heal-option").style.display = "none";
      document.getElementById("pass-option").style.display = "none";
    }

    // Change mini map pieces
    Object.keys(otherPiecesDict).map((key, i) => {
      const miniCircle = document.getElementById(`mini-circle-${i + 2}`);
      miniCircle.style.top = `${circlesPos[key][0]}px`;
      miniCircle.style.left = `${circlesPos[key][1]}px`;
      miniCircle.style.visibility = "visible";
      return 0;
    });
    const miniCircle = document.getElementById(`mini-circle-1`);
    miniCircle.style.top = `${circlesPos[playerPos][0]}px`;
    miniCircle.style.left = `${circlesPos[playerPos][1]}px`;
    miniCircle.style.visibility = "visible";

    // Update Board
    if (currentHex) {
      updateBoard(currentHex);
    } else {
      document.getElementById("circles-group-1")
        .className = "circles-group-1 hidden-group";
      document.getElementById("circles-group-2")
        .className = "circles-group-1 hidden-group";
      document.getElementById("circles-group-3")
        .className = "circles-group-1 hidden-group";
      document.getElementById("player-circles-group")
        .className = "circles-group-1 player-circles-group hidden-group";
      for (const i of Array(7).keys()) {
        document.getElementById(`hex-${i + 1}`).className = "hex hidden-hex";
        document.getElementById(`hex-${i + 1}`).onclick = null;
      }
    }

    // Uopdate Modal
    const modal = document.getElementById("myModal");
    if (modal.style.display === "block") {
      changeModal(false)
    }

  }).catch((error)=>alert(`[${error.response.status}] ${error.response.data}`));
};


export default getBoard;
