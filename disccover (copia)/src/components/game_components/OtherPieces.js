import PieceGroup from "./PieceGroup";

function OtherPieces (props) {
    // return (
    //     <>
    //     {Object.keys(props.piecesDict).map((key, _) => {
    //       return (
    //         <div className={`circles-group-${key} other-circles-group`}>
    //           <PieceGroup piecesList={props.piecesDict[key]} />
    //         </div>
    //       );
    //     })}
    //     </>
    // )
  return (
    <>
    {[1, 2, 3].map(i => {
      let pos;
      let pieces;
      let hidden = "";
      if (i <= Object.keys(props.piecesDict).length) {
        const key = Object.keys(props.piecesDict)[i - 1];
        pos = key;
        pieces = props.piecesDict[key];
      } else {
        pos = 1;
        pieces = ["", "", ""];
        hidden = "hidden-group"
      }
      return (
        <div className={`circles-group-${pos} ${hidden}`} id={`circles-group-${i}`} key={i}>
          <PieceGroup piecesList={pieces}/>
        </div>
      );
    })}
    </>
  )
}

export default OtherPieces;
