// alert ("funciona correctamente")


//header//
const seccionImagen = document.getElementById("caja-vertical");
const seccionTexto = document.getElementById("caja-vertical-dos");
const aside = document.getElementById("primera-columna");
const botonImagen = document.getElementById("imagen-btn-caja");
const contenedorMeme = document.getElementById("contenedor-meme");
const botonDescargar = document.getElementById("descargar");
const botonTexto = document.getElementById("texto-btn-caja");
const modoClaro = document.getElementById("light-mode");
const modoOscuro = document.getElementById("dark-mode");
const memeImagen = document.getElementById("meme-imagen");


//contenedor-imagen-meme// 
// const asideCerrar = document.getElementById("boton-cerrar");
// const imagenMeme = document.getElementById("meme-imagen");
// const imagenUrl = document.getElementById("url-imagen");
// const 
// ;



//ESTE CODIGO FUNCIONA CORRECTAMENTE// =>

botonImagen.addEventListener("click", ()=>{
   aside.style.display ="block"; 
   seccionImagen.classList.remove("oculto");
seccionTexto.classList.add("oculto");

});


botonTexto.addEventListener("click", ()=>{
    aside.style.display = "block";
    seccionTexto.classList.remove("oculto");
  seccionImagen.classList.add("oculto");
});


//ESTE CODIGO FUNCIONA CORRECTAMENTE// => 

modoOscuro.addEventListener("click", ()=>{
    modoClaro.classList.remove("oculto");
    modoOscuro.classList.add("oculto");
    });
    
    modoClaro.addEventListener("click", ()=>{
     modoOscuro.classList.remove("oculto");
     modoClaro.classList.add("oculto");
    
    });
    



// -----------esto funciona-- botones oscuro claro-----

// const bdark = document.querySelector("b-mode");
// const body  = document.querySelector("body");
// bdark.addEventListener("click", e =>{
//  body.classList.toggle("darkmode");

// });



//  const bdarkk = document.querySelector("#b-mode");
//  const div = document.querySelector("div");
//  bdarkk.addEventListener("click", e =>{
    
//      div.classList.toggle("dark-mode");
// })

// var dark = document.querySelector("#b-mode");
// var header = document.querySelector("header");
// dark.addEventListener("click", e =>{
//     header.classList.toggle("darkmode2");

// }) 

// var dark =document.querySelector("#b-mde");
// var main = document.querySelector("main")

