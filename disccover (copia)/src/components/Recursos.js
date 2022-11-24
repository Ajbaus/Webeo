import '../styles/recursos.css';

import Imagen from './Imagen';


function Recursos(props) {
    
  return <div class="divSuperior">
            <div class="recursos">
                <h3>Tus Recursos :</h3>
                <div id="oro" class="recurso">
                    <div class="icon"><Imagen ruta={'../img/oro.png'}/></div>
                    <p>X{props.oro}</p>
                </div>
    
                <div id="madera" class="recurso">
                    <div class="icon"><Imagen ruta={'../img/oro.png'}/></div>
                    <p>X{props.madera}</p>
                </div>

                <div id="piedra" class="recurso">
                    <div class="icon"><Imagen ruta={'../img/oro.png'}/></div>
                    <p>X{props.piedra}</p>
                </div>
            </div>
        </div>
    
    
  
}

export default Recursos;