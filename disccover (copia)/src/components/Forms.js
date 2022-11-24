import { Form } from 'react-router-dom';
import '../styles/forms.css';


function Forms(props) {

    return <div className='forms'>
            <form className={props.nombre}>
                <h2>{props.titulo}</h2>
                <div>
                    {props.input1}
                    {props.input2}
                    {props.input3}
                    {props.input4}
                    {props.input5}
                    {props.input6}
                    {props.input7}
                <button >{props.submit}</button>
                </div>
            </form>
        </div>
    
    
}

export default Forms;