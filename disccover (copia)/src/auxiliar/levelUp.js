import { resourcesDict } from "./getBoard";

export default function levelUp() {
  const playerWood = resourcesDict["wood"];
  const playerStone = resourcesDict["stone"];
  const levelUpWood = parseInt(
    document.getElementById("modal-wood-value").innerHTML.slice(-1));
  const levelUpStone = parseInt(
    document.getElementById("modal-stone-value").innerHTML.slice(-1));
  if (playerWood >= levelUpWood && playerStone >= levelUpStone) {
    return true;
  } else {
    const modalError = document.getElementById("modal-message");
    modalError.style.visibility = "visible";
    return false;
  }
}