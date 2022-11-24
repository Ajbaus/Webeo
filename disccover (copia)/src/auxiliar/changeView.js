import { adyacentMapDict2, adyacentMapDict, adyacentSmallDict } from "./dictionaries"
import { mapDict, otherPiecesDict, playerPiecesDict, currentPayer } from "./getBoard";
import newPlay from "./newPlay";

let currentHex;

function changeView (event) {
  const target = event.target.id.slice(9);
  updateBoard(target);
};

function updateBoard (target) {
  currentHex = target;
  const playerPos = Object.keys(playerPiecesDict).map((key, _) => key)[0];
  const adyacentDict = {
    0: [],
    1: [2, 3, 4],
    2: [1, 4, 5],
    3: [1, 4, 6],
    4: [1, 2, 3, 5, 6, 7],
    5: [2, 4, 7],
    6: [3, 4, 7],
    7: [4, 5, 6]
  };

  // Change board hexagons
  const hexDict = {};
  let count = 0;
  [...Array(7).keys()].forEach(element => {
    if (adyacentSmallDict[target].includes(element + 1)) {
      hexDict[element + 1] = mapDict[adyacentMapDict[target][count]]
      count += 1;
    } else {
      hexDict[element + 1] = undefined
    }
  });
  Object.keys(hexDict).map((key, _) => {
    const hex = document.getElementById(`hex-${key}`);
    if (hexDict[key]) {
      const boardPosition = adyacentMapDict2[target].indexOf(parseInt(playerPos)) + 1
      const hover = adyacentDict[boardPosition ? boardPosition : 0].includes(parseInt(key))
        && currentPayer;
      hex.className = `hex ${hexDict[key]}-hex ${hover ? 'hover-hex' : ''}`;
      hex.onclick = hover ? newPlay : null
      return 0;
    } else {
      hex.className = "hex background-hex";
      hex.onclick = null
    }
    return 0;
  });

  // Place other players pieces
  Object.keys(otherPiecesDict).map((key, i) => {
    const otherPieces = document.getElementById(`circles-group-${i + 1}`);
    if (adyacentMapDict[target].includes(parseInt(key))) {
      const boardPosition = adyacentMapDict2[target].indexOf(parseInt(key)) + 1
      otherPieces.className = `circles-group-${boardPosition}`;
      otherPiecesDict[key].map((symbol, j) => {
        document
          .getElementById(`circles-group-${i + 1}`)
          .getElementsByClassName(`circle-container-${j + 1}`)[0]
          .getElementsByClassName("circle-symbol")[0].innerText = symbol;
        return 0;
      });
    } else {
      otherPieces.className = "circles-group-1 hidden-group";
    }
    return 0;
  })

  // PLace player pieces
  const playerPieces = document.getElementById("player-circles-group");
    if (adyacentMapDict[target].includes(parseInt(playerPos))) {
      const boardPosition = adyacentMapDict2[target].indexOf(parseInt(playerPos)) + 1
      playerPieces.className = `circles-group-${boardPosition} player-circles-group`;
      playerPiecesDict[playerPos].map((symbol, index) => {
        document
          .getElementById("player-circles-group")
          .getElementsByClassName(`circle-container-${index + 1}`)[0]
          .getElementsByClassName("circle-symbol")[0].innerText = symbol;
        return 0;
      });
    } else {
      playerPieces.className = "circles-group-1 player-circles-group hidden-group";
    };
};

export default changeView;
export {updateBoard, currentHex};
