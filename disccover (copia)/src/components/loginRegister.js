import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useCookieAuth from './hooks/useCookieAuth';
import "../styles/login.css"
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function Login() {
    console.log(SERVER_URL)
    const [usuario, setUser] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {handleUserLogin} = useCookieAuth();
    const userValidation = async (e) => {
        const url = `${SERVER_URL}/usuariosLogin`;
        e.preventDefault();
        console.log(mail, password)
        const response = await axios.post(url,  {
            "email": mail,
            "password": password
        });
        if (!response.data.error) {
            handleUserLogin()
           
            navigate("../landing-user");

        } else {
            console.log(response.data.error);  
        }
    };

    const userCreation= async (e) => {
        const url = `${SERVER_URL}/usuariosCreate`;
        e.preventDefault();
        console.log(usuario, mail, password)
        await axios.post(url, {usuario, password, mail}).then(response =>{
            console.log(response)
            alert('Usuario Creado')})
        .catch((error)=>{
            console.log(error)
            alert(`[${error.response.data}] ${error.response.status}`)})
        
    };

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
        <div class="navbar-spacer"></div>

    </div>
        <div id="1" className="contenido">
            <div className='contenedorFondo'>
                <div className="form-entrar">
                    <h2 className="titulo">
                        ¡Inicia Sesión!
                    </h2>
                    <form className="login" onSubmit={userValidation}>
                        <p>
                            <input
                                type="text"
                                className="formulario"
                                placeholder="Correo electrónico"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)} required />
                        </p>
                        <p>
                            <input type="password"
                                className="formulario"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required />
                        </p>
                        <input id="submit-login" type="submit" value="Iniciar Sesión" className='Button'/>
                    </form>
                </div>
                <div className='espacio'></div>
                <div className="form-registro">
                    <h2 className="titulo">
                        ¡Regístrate!
                    </h2>
                    <form className="registro" onSubmit={userCreation}>
                        <p>
                            <input type="text"
                                className="formulario"
                                placeholder="Nombre Usuario"
                                value={usuario}
                                onChange={(e) => setUser(e.target.value)} required />
                        </p>
                        <p>
                            <input
                                type="text"
                                className="formulario"
                                placeholder="Correo electrónico"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)} required />
                        </p>
                        <p>
                            <input type="password"
                                className="formulario"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required />
                        </p>
                        <input id="submit-register" type="submit" value="Registrarse" className='Button'/>
                    </form>
                </div>
            </div>
            </div>
        </>
    );

}






































// function iniciarSesion(){
//     var formLogin = document.getElementById("4")   
//     var formRegistro = document.getElementById("5")  
//     var contenedorForms = document.getElementById("form1")  
//     var contenedorFondoLogin = document.getElementById("2")  
//     var contenedorFondoRegistro = document.getElementById("3")  
//     var contenido = document.getElementById("1")  
//     var botonLogin = document.getElementById("botonSubmitLogin")
//     var botonRegister = document.getElementById("botonSubmitRegister")  
//     if (window.innerWidth > 850) {
//         formRegistro.style.display = "none";
//         contenedorForms.style.left = "10px";
//         formLogin.style.display = "block";
//         contenedorFondoRegistro.style.opacity = "1";
//         contenedorFondoLogin.style.opacity = "0";
//         botonRegister.style.opacity = "0";
//         botonRegister.style.display = "none";
//         botonLogin.style.display = "block";
//     }
//     else{
//         formRegistro.style.display = "none";
//         contenedorForms.style.left = "0px";
//         formLogin.style.display = "block";
//         contenedorFondoRegistro.style.display = "block";
//         contenedorFondoLogin.style.display = "none";
//         contenedorForms.style.top = "-600px"
//         contenido.style.top = "300px"


//     }

// }


// function registro(){
//     var formLogin = document.getElementById("4")   
//     var formRegistro = document.getElementById("5")  
//     var contenedorForms = document.getElementById("form1")  
//     var contenedorFondoLogin = document.getElementById("2")  
//     var contenedorFondoRegistro = document.getElementById("3")  
//     var contenido = document.getElementById("1")  
//     var botonLogin = document.getElementById("botonSubmitLogin")
//     var botonRegister = document.getElementById("botonSubmitRegister")  
//     if (window.innerWidth > 850) {
//         formRegistro.style.display = "block";
//         contenedorForms.style.left = "340px";
//         formLogin.style.display = "none";
//         contenedorFondoRegistro.style.opacity = "0";
//         contenedorFondoLogin.style.opacity = "1";
//         botonRegister.style.opacity = "1";
//         botonRegister.style.display = "block";
//         botonLogin.style.display = "none";

//     } else {
//         formRegistro.style.display = "block";
//         contenedorForms.style.left = "0px";
//         formLogin.style.display = "none";
        
//         contenedorFondoRegistro.style.display = "none";
//         contenedorFondoLogin.style.display = "block";
//         contenedorForms.style.top = "0px"
//         contenido.style.top = "200px"
//         contenedorForms.style.height = "0px"

//     }


// }


// function Login() {
    

//     return <div id="1" className="contenido">
//                 <div className="contenedorFondo"> 
    
//                     <div id="2" className="inicioSesion">
//                         <h3>¿Ya estás registrado?</h3>
//                         <button onClick={iniciarSesion}  id="iniciaSesion">Iniciar Sesión</button>
//                     </div>
//                     <div id="3" className="registro">
//                         <h3>¿No tienes una cuenta?</h3>
//                         <button onClick={registro} id="registrar">Registrarse</button>
//                     </div>
//                 </div>
//                 <div id="form1" className="forms">
//                     <form id="4" action="landing_usuario.html" className="formLogin">
//                         <h2>Iniciar Sesión</h2>
//                         <input id='inputUsuarioLogin'  type="text" placeholder="Nombre de Usuario" required></input>
//                         <input id='inputPasswordLogin' type="password" placeholder="Contraseña" required></input>
                        
//                     </form>
                    
//                     <form id="5" action="landing_usuario.html" className="formRegistro">
//                         <h2>Regístrate</h2>
//                         <input id='inputUsuario' type="text" placeholder="Nombre de Usuario" required></input>
//                         <input id='inputEmail' type="text" placeholder="Correo electrónico" required></input>
//                         <input id='inputPassword' type="password" placeholder="Contraseña" required></input>
                        
//                     </form>


//                 </div>
//                 <div className='botonesTemporal'>
//                     <button id='botonSubmitRegister' onClick={getUsuario} >Registrarse</button>
//                     <button id='botonSubmitLogin' onClick={getUsusarioLogin} >Inicia Sesión</button> 
//                 </div>
                
//             </div>

// }   

