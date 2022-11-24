import newPlay from '../../auxiliar/newPlay';
import Hex from './Hex';

const adyacentDict = {
  0: [],
  1: [2, 3, 4],
  2: [1, 4, 5],
  3: [1, 4, 6],
  4: [1, 2, 3, 5, 6, 7],
  5: [2, 4, 7],
  6: [3, 4, 7],
  7: [4, 5, 6]
}

function Board(props) {
  let playerPos;
  if (props.playerPos) {
    playerPos = props.playerPos;
  } else {
    playerPos = 0;
  }
  return (
    <div className="container">
      <ol className="even">
        <Hex 
          type={props.hexDict[1]}
          hover={adyacentDict[playerPos].includes(1)} 
          hexId={1}
          onClickProp={adyacentDict[playerPos].includes(1) ? newPlay : null}/>
        <Hex 
          type={props.hexDict[2]}
          hover={adyacentDict[playerPos].includes(2)} 
          hexId={2}
          onClickProp={adyacentDict[playerPos].includes(2) ? newPlay : null}/>
      </ol>  
      <ol className="odd">
        <Hex 
          type={props.hexDict[3]}
          hover={adyacentDict[playerPos].includes(3)} 
          hexId={3}
          onClickProp={adyacentDict[playerPos].includes(3) ? newPlay : null}/>
        <Hex 
          type={props.hexDict[4]}
          hover={adyacentDict[playerPos].includes(4)} 
          hexId={4}
          onClickProp={adyacentDict[playerPos].includes(4) ? newPlay : null}/>
        <Hex 
          type={props.hexDict[5]}
          hover={adyacentDict[playerPos].includes(5)} 
          hexId={5}
          onClickProp={adyacentDict[playerPos].includes(5) ? newPlay : null}/>
      </ol>
      <ol className="even">
        <Hex 
          type={props.hexDict[6]}
          hover={adyacentDict[playerPos].includes(6)} 
          hexId={6}
          onClickProp={adyacentDict[playerPos].includes(6) ? newPlay : null}/>
        <Hex 
          type={props.hexDict[7]}
          hover={adyacentDict[playerPos].includes(7)} 
          hexId={7}
          onClickProp={adyacentDict[playerPos].includes(7) ? newPlay : null}/>
      </ol>  
    </div>
  );
}

export default Board;
