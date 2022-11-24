var formLogin = document.querySelector(".formLogin")
var formRegistro = document.querySelector(".formRegistro")
var contenedorForms = document.querySelector(".forms")
var contenedorFondoLogin = document.querySelector(".inicioSesion")
var contenedorFondoRegistro = document.querySelector(".registro")
var contenido = document.querySelector(".contenido")


document.getElementById("registrar").addEventListener("click", registro)
document.getElementById("iniciaSesion").addEventListener("click", iniciarSesion)

function registro(){
    if (window.innerWidth > 850) {
        formRegistro.style.display = "block";
        contenedorForms.style.left = "410px";
        formLogin.style.display = "none";
        contenedorFondoRegistro.style.opacity = "0";
        contenedorFondoLogin.style.opacity = "1";

    } else {
        formRegistro.style.display = "block";
        contenedorForms.style.left = "0px";
        formLogin.style.display = "none";
        contenedorFondoRegistro.style.display = "none";
        contenedorFondoLogin.style.display = "block";
        contenedorForms.style.top = "0px"
        contenido.style.top = "200px"
        contenedorForms.style.height = "0px"

    }


}

function iniciarSesion(){
    if (window.innerWidth > 850) {
        formRegistro.style.display = "none";
        contenedorForms.style.left = "10px";
        formLogin.style.display = "block";
        contenedorFondoRegistro.style.opacity = "1";
        contenedorFondoLogin.style.opacity = "0";
    }
    else{
        formRegistro.style.display = "none";
        contenedorForms.style.left = "0px";
        formLogin.style.display = "block";
        contenedorFondoRegistro.style.display = "block";
        contenedorFondoLogin.style.display = "none";
        contenedorForms.style.top = "-600px"
        contenido.style.top = "300px"


    }

}