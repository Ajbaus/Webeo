import axios from "axios";
import getBoard from "./getBoard";
import {matchId, playerId} from '../components/Game';
import { adyacentMapDict2 } from "./dictionaries";
import { currentHex } from "./changeView";
import levelUp from "./levelUp";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const newPlay = async (event) => {
  let body;
  const url = `${SERVER_URL}/plays`;
  const target = event.target.id;

  if (target === "gather-option") {
    body = {
      action : 'gather',
      id: playerId,
      matchId: matchId
    };
  } else if (target === "pass-option") {
    body = {
      action : 'pass',
      id: playerId,
      matchId: matchId
    };
  } else if (target === "level-up-option") {
    if (!levelUp()) {
      console.log( document.getElementById("modal-title").innerHTML);
      return;
    }
    body = {
      action : 'levelUp',
      id: playerId,
      matchId: matchId,
      character: document.getElementById("modal-title").innerHTML,
    };
  } else {
    const target = event.target.id.slice(-1);
    const newPos = adyacentMapDict2[currentHex][target - 1];
    body = {
      action: 'move',
      newPos : newPos,
      id: playerId,
      matchId: matchId
    };
  };
  await axios
    .post(url, body)
    .then(() => {
      getBoard(playerId, matchId);
    })
    .catch((error) =>
      alert(`[${error.response.status}] ${error.response.data}`)
    );
};

export default newPlay;
