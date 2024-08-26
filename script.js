const boton = document.getElementById("boton")
const texto = document.getElementById("texto")

function funcion(){
    let textoBoton = boton.innerText
    if(textoBoton === "Ocultar"){
        boton.innerText = "Mostrar"
        texto.style.visibility = "hidden"
    }
    else{
        boton.innerText = "Ocultar"
        texto.style.visibility = "visible"
    }
}

boton.addEventListener("click", () => {funcion()})