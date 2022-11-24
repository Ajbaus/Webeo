import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;




const getUsusario = async () => {
    const usuario = document.getElementById("inputUsuario").value
    const password = document.getElementById("inputPassword").value
    const email = document.getElementById("inputEmail").value
    
    
    
    const url = `${SERVER_URL}/usuariosCreate`;
    await axios.post(url, {usuario, password, email}).then(response =>alert('Usuario Creado'))
    .catch((error)=>alert(`[${error.response.status}] ${error.response.data}`))
  };
    

export default getUsusario;