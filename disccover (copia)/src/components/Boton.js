import '../styles/sala.css'

function Boton(props){
    return(

        <a href='game' align="center"> <button className="button">{props.submit}</button></a>
    );
}

export default Boton;