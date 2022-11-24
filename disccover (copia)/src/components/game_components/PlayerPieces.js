import PieceGroup from "./PieceGroup";

function PlayerPieces (props) {
    // return (
    //     <>
    //     {Object.keys(props.piecesDict).map((key, _) => {
    //       return (
    //         <div className={`circles-group-${key} player-circles-group`} id="player-circles-group">
    //           <PieceGroup piecesList={props.piecesDict[key]} />
    //         </div>
    //       );
    //     })}
    //     </>
    // )
    const key = Object.keys(props.piecesDict).map(key => key)[0]
    if (key) {
      return (
        <div className={`circles-group-${key} player-circles-group`} id="player-circles-group">
          <PieceGroup piecesList={props.piecesDict[key]} />
        </div>
      );
    } else {
      return (
        <div className={`circles-group-1 player-circles-group hidden-group`} id="player-circles-group">
          <PieceGroup piecesList={["", "", ""]} />
        </div>
      );
    };
}

export default PlayerPieces;
