function ProgressBar(props) {
  return <div>
    <p>{props.text}</p>
    <div className="inner-progress-bar" id={`inner-progress-bar-${props.id}`}></div>
    <div className="outer-progress-bar"></div>
  </div>;
}

export default ProgressBar;