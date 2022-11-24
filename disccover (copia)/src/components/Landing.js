import Cookies from "js-cookie";

import Logout from "./logout";

const session = false




function Landing() {
  console.log(session)
   
  if (session) {

    return (
      <>
        <div class="navbar-container">
        <img class="logo" src="src/images/logo-dark.svg" alt="logo"></img>
        <ul class="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="../old/src/views/comojugar.html">Cómo Jugar</a></li>
          <li><a href="src/views/nosotros.html">Nosotres</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <div class="navbar-spacer">
        </div>
  
        <a onClick={Logout()} href="registro" ><button class="iniciar-sesion">LOGOUT</button></a>
  
      </div>
  
      <div class="main-container">
        <div class="container-1">
          <h1>Acerca de Three Treasures</h1>
          <p>Este es un juego de cuatro jugadores de tipo aventura, estrategia y gestión de recursos que
            se lleva a cabo en un mapa con celdas hexagonales ocultas, los cuales cuentan con
            distintos efectos en el juego que se irán mostrando a medida que los jugadores los vayan
            descubriendo. El objetivo de los jugadores es competir entre ellos para obtener tesoros, el
            primer jugador en conseguir tres de estos será el vencedor.</p>
          <a href="src/views/personajes.html"><button class="large-button">JUGAR THREE TREASURES</button></a>
          <br/>
          <a href="src/views/landing_usuario.html"><button class="large-button">CREAR PARTIDA</button></a>
        </div>
        <div class="container-2">
          <img class="dragon-chistoso" src="https://thumbs.dreamstime.com/b/fun-trex-d-illustration-121330906.jpg" alt="Dragon Chistoso"></img>
        </div>
      </div>
  
  
      </>    
    )
    
  } else {
    return (
      <>
        <div class="navbar-container">
        <img class="logo" src="src/images/logo-dark.svg" alt="logo"></img>
        <ul class="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="../old/src/views/comojugar.html">Cómo Jugar</a></li>
          <li><a href="src/views/nosotros.html">Nosotres</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <div class="navbar-spacer">
        </div>
  
        <a href="registro"><button class="iniciar-sesion">INICIAR SESIÓN</button></a>
        <a href="registro"><button class= "registrarse">REGISTRARSE</button></a>
  
      </div>
  
      <div class="main-container">
        <div class="container-1">
          <h1>Acerca de Three Treasures</h1>
          <p>Este es un juego de cuatro jugadores de tipo aventura, estrategia y gestión de recursos que
            se lleva a cabo en un mapa con celdas hexagonales ocultas, los cuales cuentan con
            distintos efectos en el juego que se irán mostrando a medida que los jugadores los vayan
            descubriendo. El objetivo de los jugadores es competir entre ellos para obtener tesoros, el
            primer jugador en conseguir tres de estos será el vencedor.</p>
          <a href="src/views/personajes.html"><button class="large-button">JUGAR THREE TREASURES</button></a>
          <br/>
          <a href="src/views/landing_usuario.html"><button class="large-button">CREAR PARTIDA</button></a>
        </div>
        <div class="container-2">
          <img class="dragon-chistoso" src="https://thumbs.dreamstime.com/b/fun-trex-d-illustration-121330906.jpg" alt="Dragon Chistoso"></img>
        </div>
      </div>
  
  
      </>    
    )
  }
    
  }
  


export default Landing;
