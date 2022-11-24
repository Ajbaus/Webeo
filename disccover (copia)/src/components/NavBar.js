import '../styles/usuario.css'

function NavBar(){
    return(
        <div className="navbar-container">
            <img className="logo" src="../img/logo-dark.svg" alt="logo"></img>
            <ul class="nav-links">
                <li><a href="../../index.html">Inicio</a></li>
                <li><a href="comojugar.html">Cómo Jugar</a></li>
                <li><a href="nosotros.html">Nosotres</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <div className="navbar-spacer">
            </div>
            <a href="registro.html"><button className="iniciar-sesion">INICIAR SESIÓN</button></a>
            <a href="registro.html"><button className= "registrarse">REGISTRARSE</button></a>
        </div>
        );
    }

export default NavBar;
