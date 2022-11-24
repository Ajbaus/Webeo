import gem from "../../img/gem.png";
import plus from "../../img/plus.png";
import Logout from "../logout";

function Gems(props) {
  return (
    <>
    <div className="gems-container">
      <img src={gem} alt="gem-logo" className="gem-logo"></img>
      <div className="gems-bar">
        <p>15</p>
      </div>
      <a className="App-link" href="account-info">
        <img src={plus} alt="plus-logo" className="plus-logo"></img>
      </a>
      <div>  <a onClick={Logout()} href="registro" ><button class="iniciar-sesion">LOGOUT</button></a></div>
    </div>

    </>
  );
}

export default Gems;