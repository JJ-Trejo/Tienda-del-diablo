//Este archivo captura los datos del formulario

//importa la funcion conexionAPI del archivo conexionAPI.js para posteriormente hacer una peticion POST
import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const reset = document.querySelector(".boton_reset")

async function crearVideo(evento){
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    try{ //llama a la función conexionAPI.enviarVideo para hacer la peticion POST
        const respuesta = await conexionAPI.enviarVideo(imagen, nombre, precio);
        alert("Envío concluido con éxito");
    }catch(error){ //captura el mensaje de error
        alert(error); //genera un ventana emergente con el error
    }
}

async function resetearFormulario(evento){
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    imagen.value = "";
    nombre.value = "";
    precio.value = "";
}

// boton_enviar.addEventListener("submit", evento => crearVideo(evento));
formulario.addEventListener("submit", evento => crearVideo(evento));
reset.addEventListener("reset", evento => resetearFormulario(evento));

