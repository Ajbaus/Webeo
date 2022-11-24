
import NavBar from './NavBar';
import JugEspera from './JugEspera';
import Boton from './Boton';

import Nombre from './NombreSala';
import Codigo from './CodigoSala';
import getSala from '../auxiliar/getSala'

const salaCodigo = 'XDZ123';
function SalaEspera(){
    return(
        <div className='App'>
            <NavBar />
            <Nombre name={getSala}/>
            <Codigo name={salaCodigo} />
            <JugEspera player1={'0'} player2={'1'} player3={'2'} player4={'3'}/>
            <Boton submit="Jugar" />
            
        </div>
    );
}

export default SalaEspera;

