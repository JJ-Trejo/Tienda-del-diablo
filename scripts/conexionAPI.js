//Esta función hará una peticion del tipo get y devolverá la lista de datos del servidor en json
async function listarVideos(){
    //se hace una peticion del tipo get a la url
    const conexion = await fetch ("http://localhost:3001/imagenes");
    const conexionConvertida = conexion.json(); //convertimos los datos a json
    return conexionConvertida; //se envia la lista de datos en json
}

async function enviarVideo(imagen, nombre, precio){
    //peticion del tipo POST
    const conexion = await fetch("http://localhost:3001/imagenes",{
        method: "POST",
        headers:{"Content-type": "application/json"},
        //cinvierte un elemento de tipo objeto a tipo string
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            precio:precio
        })
    })
    const conexionConvertida = conexion.json();
    //si la conexion no se establecio
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video :(");
    }
    return conexionConvertida;
}

//exportamos la función listarVideos() para poder usarla en otros archivos;
export const conexionAPI = {
    listarVideos, enviarVideo
}