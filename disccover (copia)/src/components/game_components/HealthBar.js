import heart from "../../img/heart.png"

function HealthBar(props) {
  return (
    <div className="health-bar-div">
      <div className="health-bar-container">
        <div className="health-bar">
          <div className="inner-health-bar"></div>
          <div className="outer-health-bar"></div>
        </div>
        <img src={heart} alt="heart-logo" className="heart-logo" />
      </div>
    </div>
  )
}

export default HealthBar