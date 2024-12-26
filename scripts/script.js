const boton_formulario = document.querySelector(".boton_mostrar_formulario");
const agregar_fruta = document.querySelector(".agregar_fruta");

boton_formulario.addEventListener("click", () =>{
    if (agregar_fruta.classList.contains("esconder_formulario")){
        agregar_fruta.classList.remove("esconder_formulario");
        boton_formulario.textContent = '➖ Ocultar Formulario';
    }
    else{
        agregar_fruta.classList.add("esconder_formulario");
        boton_formulario.textContent = '➕ ¿Encontraste una Fruta? Agregala al stock';
    }
});