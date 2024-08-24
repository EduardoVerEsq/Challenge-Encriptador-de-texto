// variables donde se toma el texto y donde lo deposita
const txt = document.querySelector(".text-area");
const msg = document.querySelector(".mensaje");

// negar caracteres especiales y acentos
function limpiarTexto(texto) {
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-zA-Z\s]/g, "");

    return texto;
}

// para encriptar
function btnEncriptar(){
    let texto = txt.value;

    // Validar y limpiar texto
    texto = limpiarTexto(texto);

    const textoEncriptado = encriptar(texto);
    msg.value = textoEncriptado;
    txt.value = "";

}

function encriptar(stringEncriptada){
    let matriz = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matriz.length ; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    } return stringEncriptada
}

// para desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(txt.value);
    msg.value = textoEncriptado;
    txt.value = "";

}

function desencriptar(stringDesencriptada){
    let matriz = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matriz.length ; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0])
        }
    } return stringDesencriptada
}


// para copiar
function cop() {
    // seleccion de contenido
    msg.select();
    msg.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Texto copiado: " + msg.value);
}