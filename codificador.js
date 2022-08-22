var btnEencriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var imagen = document.querySelector(".contenedor-imagen");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector("#texto-resultado");
btnCopiar=document.querySelector(".btn-copiar");

area.focus()

function encriptar(){
    ocultarImg();
    resultado.textContent= encriptarTexto(recuperarTexto());
    
}
function desencriptar(){
    ocultarImg();
    resultado.textContent= desencriptarTexto(recuperarTexto());
    
}

function copiarTexto(){
   let texto = resultado.value;
   navigator.clipboard.writeText(texto)
}
btnEencriptar.onclick= encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiarTexto;


function recuperarTexto(){
    let area = document.querySelector("#area");
    return area.value ;
}
function ocultarImg(){
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar")
    parrafo.classList.add("ocultar")

}

function encriptarTexto(mensaje){
var texto = mensaje;
var textoFinal = "";

for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal=textoFinal + "ai"
        }
        else if(texto[i] == "e"){
        textoFinal=textoFinal + "enter"
        }
        else if(texto[i] == "i"){
        textoFinal=textoFinal + "imes"
        }
        else if(texto[i] == "o"){
        textoFinal=textoFinal + "ober"
        }
        else if(texto[i] == "u"){
        textoFinal=textoFinal + "ufat"
        }
        else{
        textoFinal= textoFinal + texto[i];
        }    

    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    
    for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
            textoFinal=textoFinal + "a"
            i=i+1;
            }
            else if(texto[i] == "e"){
            textoFinal=textoFinal + "e"
            i=i+4
            }
            else if(texto[i] == "i"){
            textoFinal=textoFinal + "i"
            i=i+3
            }
            else if(texto[i] == "o"){
            textoFinal=textoFinal + "o"
            i=i+3
            }
            else if(texto[i] == "u"){
            textoFinal=textoFinal + "u"
            i=i+3
            }
            else{
            textoFinal= textoFinal + texto[i];
            }    
    
        }
        return textoFinal;
    }
    