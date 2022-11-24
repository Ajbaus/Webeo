import '../styles/board.scss';

import Board from './game_components/Board';
import OtherPieces from './game_components/OtherPieces';
import PlayerPieces from './game_components/PlayerPieces';
import Resources from './game_components/Resources';
import GameOptions from './game_components/GameOptions';
import Map from './game_components/Map';
import Team from './game_components/Team';
import Gems from './game_components/Gems';
import MapPieces from './game_components/MapPieces';
import Modal from './game_components/Modal';

import getBoard from '../auxiliar/getBoard';
import HealthBar from './game_components/HealthBar';

const hexDict = {1: "hidden", 2: "hidden", 3: "hidden", 4: "hidden", 5: "hidden", 6: "hidden", 7: "hidden"};
const playerPiecesDict = {}
const otherPiecesDict = {}
const playerResourcesDict = {wood: 0, stone: 0, gold: 0};
const playerCharactersDict = {Guerrero: {level: 1}, Sanador: {level: 1}, Mago: {level: 1}}

const playerId = 1;
const matchId = 0;

const playerPos = Object.keys(playerPiecesDict).map((key, _) => key)[0];

function Game() {

  return (
    <div className='div-game'>
      <Modal />
      <div className='game-container'>
        <Resources playerResources={playerResourcesDict}/>
        <div className="div-board">
          <Board hexDict={hexDict} playerPos={playerPos}/>
          <OtherPieces piecesDict={otherPiecesDict}/>
          <PlayerPieces piecesDict={playerPiecesDict}/>
        </div>
        <div className='div-gems-map-team'>
          <Gems />
          <div className='div-map'>
            <Map />
            <MapPieces />
          </div>
          <Team playerCharacters={playerCharactersDict}/>
          {/* <HealthBar /> */}
        </div>
      </div>
      <GameOptions getBoard={getBoard} piecesDict={playerPiecesDict}/>
    </div>
  )
}

export default Game;
export { playerId, matchId };
