function PieceGroup (props) {
  return (
    <>
    {props.piecesList.map((symbol, index) => (
      <div className={`circle-container-${index + 1}`} key={index}>
        <div className="circle">
          <p className="circle-symbol">{symbol}</p>
        </div>
      </div>
    ))}
    </>
  )
}

export default PieceGroup;
