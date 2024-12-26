//importamos la función conexionAPI del archivo conexionAPI.js
import { conexionAPI } from "./conexionAPI.js";

//Accedemos a la lista del stock de frutas para añadir codigo HTML
const lista = document.querySelector("[data-lista]");

function crearCard(imagen, nombre,  precio){
    const var_imagen = document.createElement("li"); //crea un elemento tipo lista
    var_imagen.className = "fruta_item"; //agraga una clase
    //agregar codigo html combinado con los datos recibidos
    var_imagen.innerHTML = `<img src="${imagen}" alt="Fruta del diablo Gomu Gomu no Mi" class="imagen_fruta">
                    <div class="descripcion_imagen">
                        <h3>${nombre}</h3>
                        <div class="descripcion_precio">
                            <p>${precio}</p>
                            <button>
                                <img class="icono_eliminar" src="./assets/icono_basura.png" alt="icono de eliminar">
                            </button> 
                        </div>
                    </div>`;
    return var_imagen;
}

//Esta función guarda la lista de datos enviada por la función conexionAPI.listarVideos() en la constante listaAPI
//despues envia estos datos para agregarlos dentro del HTML con la función crearCard()
async function listarVideos(){
    try{
        const listaAPI = await conexionAPI.listarVideos();
        console.log(listaAPI);
        listaAPI.forEach(video => lista.appendChild(crearCard(video.imagen, video.nombre, video.precio)));
    }catch{
        console.log("Error");
    }
}

//Se ejecuta inicialmente
listarVideos();