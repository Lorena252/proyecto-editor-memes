// alert ("funciona correctamente")


//header//
const seccionImagen = document.getElementById("caja-vertical");
const seccionTexto = document.getElementById("caja-vertical-dos");
const aside = document.getElementById("primera-columna");
const botonImagen = document.getElementById("imagen-btn-caja");
const contenedorMeme = document.getElementById("contenedor-meme");
const botonDescargar = document.getElementById("descargar");
const botonTexto = document.getElementById("texto-btn-caja");
const modoClaro = document.getElementById("light-theme");
const modoOscuro = document.getElementById("dark-theme");
const memeImagen = document.getElementById("meme-imagen");
const urlImagen = document.getElementById("url-imagen");
const contmeme = document.getElementById("contenedor-meme")
const btnDescargar = document.getElementById("descargar");
const btnCerrar = document.getElementById("boton-cerrar");




// Aside, texto e imagen// FUNCIONA=>

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


//mostrar y cerrar panel aside// FUNCIONA//

btnCerrar.addEventListener('click', ()=>{
  aside.style.display ='none';
});

 //aside url// //FUNCIONA//


urlImagen.addEventListener("keyup", (e) => {
  e.preventDefault();
  const valueUrl = urlImagen.value;
  memeImagen.style.backgroundImage = `url("${valueUrl}")`;
  memeImagen.style.backgroundPosition = "center"
});

//boton descargar// FUNCIONA
btnDescargar.addEventListener("click", ()=>
domtoimage.toBlob(document.getElementById("contenedor-meme")).then(blob=>
   saveAs (blob, "meme-png")));



//ESTE CODIGO FUNCIONA CORRECTAMENTE//  modo oscuro y modo claro para boton=> (aca camnie el "click" por el onclick)

modoOscuro.addEventListener("onclick", ()=>{
  modoClaro.classList.remove("oculto");
  modoOscuro.classList.add("oculto");
  });
  
  modoClaro.addEventListener("onclick", ()=>{
   modoOscuro.classList.remove("oculto");
   modoClaro.classList.add("oculto");
  
});

//background para claro y oscuro// funciona//

const boton = document.getElementById("dark-theme");
const confiUser = window.matchMedia("(prefers-color-scheme: light)");
boton.addEventListener("click", ()=>{
 console.log(confiUser.matches)
 if (confiUser.matches){
  document.body.classList.toggle("light-theme");
 } else {
  document.body.classList.toggle("dark-theme");

 }
})

//mostrar y cerrar panel aside//


// const ocultarPanel = () => {
//   $('panel').classList.add('oculto')
// }

// const mostrarPanel = () => {
//   $('panel').classList.remove('oculto')
// }

// const mostrarPanelImagen = () => {
//   $(`panel-text`).classList.add('oculto')
//   $(`panel-img`).classList.remove('oculto')
// }

// const mostrarPanelTexto = () => {
//   $(`panel-img`).classList.add('oculto')
//   $(`panel-text`).classList.remove('oculto')
// }

















//contenedor-imagen-meme// 
// const asideCerrar = document.getElementById("boton-cerrar");
// const imagenMeme = document.getElementById("meme-imagen");
// const imagenUrl = document.getElementById("url-imagen");
// const 
// ;

// const modeOscuro = document.getElementById("dark-mode");
// const body = document.querySelector("header");
// modeOscuro.addEventListener("click", e =>{
//  body.classList.toggle("darkmode");
// });

