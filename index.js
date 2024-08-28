let textbox_resultado = document.getElementById("textbox_resultado");
let textarea_input = document.getElementById("input_texto");
let caja_sin_salida = document.getElementById("no_output_container")
let caja_con_salida = document.getElementById("output_container")

document.getElementById("btn-encriptar").addEventListener("click", function(){
    var texto1 = textarea_input.value;
    if (texto1.length == 0){
        alert("Debes ingresar un texto a encriptar");
        return;
    } 
    var texto_encriptado = encriptar(texto1);
    textbox_resultado.innerText = texto_encriptado;
})

textarea_input.addEventListener("input", function(){
   let texto2 = textarea_input.value;
   if (texto2.length >0){
    if (caja_con_salida.classList.contains("display-none")){
        caja_con_salida.classList.remove("display-none");
    };
    if(!(caja_sin_salida.classList.contains("display-none"))){
        caja_sin_salida.classList.add("display-none");
    }
   }else{
    if(!(caja_con_salida.classList.contains("display-none"))){
        caja_con_salida.classList.add("display-none");
    }
    if(caja_sin_salida.classList.contains("display-none")){
        caja_sin_salida.classList.remove("display-none");
    }
   }
})

document.getElementById("btn-desencriptar").addEventListener('click', function(){
    var texto3 = textarea_input.value;
    if (texto3.length == 0){
        alert("Debes ingresar un texto a desencriptar");
        return;
    }
    var texto_desencriptado = desencriptar(texto3);
    textbox_resultado.innerText = texto_desencriptado;

})

document.getElementById("btn-copiar").addEventListener("click", function(){
    var texto4 = textbox_resultado.innerText;
    if (texto4.length == 0){
        alert ("No existe texto para copiar")
        return;
    }
    let textoCopiado = copiarTexto();
    console.log(textoCopiado);
})


function encriptar(texto) {
    // Reemplaza cada letra de acuerdo a la llave de encriptado 
    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    
    return textoEncriptado;
    
}


function desencriptar(texto) {
    // Reemplaza cada patrón encriptado por su letra correspondiente
    let textoDesencriptado =   texto.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function copiarTexto() {
    // Guardar el texto dentro del párrafo en una variable
    var textoSeleccionado = textbox_resultado.innerText;
    
    // Copiar el texto al portapapeles utilizando la API Clipboard
    navigator.clipboard.writeText(textoSeleccionado)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto', err);
    });

    // Retornar el texto seleccionado
    return textoSeleccionado;
}


