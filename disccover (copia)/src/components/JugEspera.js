import '../styles/sala.css';


function JugEspera(props){
    return(
        <div class="list-wrapper" ng-app="app" ng-controller="MainCtrl as ctrl">
            <ul class="list">
              <li class="list-item">
                <div>
                  <img src="../images/pngegg (8).png" class="list-item-image" alt=""></img>
                </div>
                <div class="list-item-content">
                  <h4>{props.player1}</h4>
                </div>
              </li>
              <li class="list-item">
                <div>
                  <img src="../images/pngegg (8).png" class="list-item-image" alt=""></img>
                </div>
                <div class="list-item-content">
                  <h4>{props.player2}</h4>
                </div>
              </li>
              <li class="list-item">
                <div>
                  <img src="../images/pngegg (8).png" class="list-item-image" alt=""></img>
                </div>
                <div class="list-item-content">
                  <h4>{props.player3}</h4>
                </div>
              </li>
              <li class="list-item">
                <div>
                  <img src="../images/pngegg (8).png" class="list-item-image" alt=""></img>
                </div>
                <div class="list-item-content">
                  <h4>{props.player4}</h4>
                </div>
              </li>  
              <p> Esperando jugadores... </p>
              <div class="loader"></div>
            </ul>
            
        </div>
    );
}

export default JugEspera;
