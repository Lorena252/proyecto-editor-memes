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
const textoColorIn = document.getElementById("blend-mode-color-input");
const fondoColorIn = document.getElementById("blend-mode-color-fondo-input");
const  textTop = document.getElementById("top-texto");
const textBottom = document.getElementById("bottom-texto");
const inputFondo = document.getElementById("mode-color-input");
const btnAlignIzq = document.getElementById("btn-align-left");
const btnAlignCent = document.getElementById("btn-align-center");
const btnAlignRight = document.getElementById("btn-align-right");
const fondoTransparente = document.getElementById("fondo-transparente");
const colorModeInput = document.getElementById("mode-color-input");
const blendModeColor = document.getElementById("blend-mode-color");
const superiorr = document.getElementById("superiorr");
const inferiorr = document.getElementById("inferiorr");
const sinTextSuperior = document.getElementById("sin-texto-superior");
const sinTextInferior = document.getElementById("sin-texto-inferior");
const  brightnessFiltro = document.getElementById("brightness");
const   opacityFiltro = document.getElementById ("opacity");
const   contrasteFiltro = document.getElementById("contraste");
const   blurFiltro = document.getElementById("blur");
const   grayscaleFiltro = document.getElementById("grayscale");
const   sepiaFiltro = document.getElementById("sepia");
const    hueFiltro = document.getElementById("hue");
const    saturateFiltro = document.getElementById("saturate");
const   invertFiltro = document.getElementById("invert");
const  resetBtn = document.getElementById("reset-btn");
const btnNinguno = document.getElementById("boton-ninguno");
const btnClaro = document.getElementById("boton-claro");
const btnOscruo = document.getElementById("boton-oscuro");




//  modo oscuro y modo claro para boton//

modoClaro.addEventListener("click", ()=>{
  modoOscuro.classList.remove("oculto");
  modoClaro.classList.add("oculto");
  });
  
 modoClaro.addEventListener("click", ()=>{
   modoOscuro.classList.remove("oculto");
   modoClaro.classList.add("oculto");
  
});


// Aside. texto e imagen//


botonImagen.addEventListener("click", ()=>{
  aside.style.display ="block"; 
  seccionImagen.classList.remove("oculto");
seccionTexto.classList.add("oculto");

});

//boton descargar// FUNCIONA
btnDescargar.addEventListener("click", ()=>
domtoimage.toBlob(document.getElementById("contenedor-meme")).then(blob=>
   saveAs (blob, "meme-png")));



botonTexto.addEventListener("click", ()=>{
   aside.style.display = "block";
   seccionTexto.classList.remove("oculto");
 seccionImagen.classList.add("oculto");
});

//mostrar y cerrar panel aside// FUNCIONA//

btnCerrar.addEventListener('click', ()=>{
  aside.style.display ='none';
});


 //aside url// 
 urlImagen.addEventListener("keyup", (e) => {
  e.preventDefault();
  const valueUrl = urlImagen.value;
  memeImagen.style.backgroundImage = `url("${valueUrl}")`;
  memeImagen.style.backgroundPosition = "center"
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
});

//FILTROS//
const filtrosDeImagen = () =>{
  memeImagen.style.filter = `brightness(${brightnessFiltro.value}) opacity(${opacityFiltro.value}) contrast(${contrasteFiltro.value}%) blur(${blurFiltro.value}px) grayscale(${grayscaleFiltro.value}%) sepia(${sepiaFiltro.value}%) hue-rotate(${hueFiltro.value}deg) saturate(${saturateFiltro.value}%) invert(${invertFiltro.value})`;
};

brightnessFiltro.addEventListener("change",filtrosDeImagen);
opacityFiltro.addEventListener("change", filtrosDeImagen);
contrasteFiltro.addEventListener("change", filtrosDeImagen);
blurFiltro.addEventListener("change", filtrosDeImagen);
grayscaleFiltro.addEventListener("change", filtrosDeImagen);
sepiaFiltro.addEventListener("change", filtrosDeImagen);
hueFiltro.addEventListener("change", filtrosDeImagen);
saturateFiltro.addEventListener("change", filtrosDeImagen);
invertFiltro.addEventListener("change", filtrosDeImagen);


//reestablecer los filtros//

resetBtn.addEventListener("click", ()=>{
brightnessFiltro.value="1";
opacityFiltro.value="1";
contrasteFiltro.value="100";
blurFiltro.value="0";
grayscaleFiltro.value="0";
sepiaFiltro.value="0";
hueFiltro.value="0";
saturateFiltro.value="100";
invertFiltro.value="0";
filtrosDeImagen();
});



//fondo del texto y color de texto// 

textoColorIn.addEventListener("input", (event) =>{
  textTop.style.color = event.target.value;
  textBottom.style.color = event.target.value;
});

fondoColorIn.addEventListener("input", (event)=>{
  textTop.style.background = event.target.value;
  textBottom.style.background = event.target.value;
});

//color FONDO caja meme //
colorModeInput.addEventListener("input", (event)=>{
  memeImagen.style.background = event.target.value;
});


//TEXTO SUPERIOR E INFERIOR//

superiorr.addEventListener("keyup", () =>{
  const changedTexBottom = superiorr.value;
textTop.innerHTML= changedTexBottom;
});

inferiorr.addEventListener("keyup", ()=>{
  const changedTextTop = inferiorr.value;{
    textBottom.innerHTML=changedTextTop;
  }
});

//sin texto supeior e inferior. top y bottom//

sinTextSuperior.addEventListener("change",()=>{
  if(sinTextSuperior.checked){
    textTop.classList.add("oculto");
  }else{
   textTop.classList.remove("oculto");
  }
});


sinTextInferior.addEventListener("change",()=>{
if(sinTextInferior.checked){
  textBottom.classList.add("oculto");
  
}else{
  textBottom.classList.remove("oculto");
}
});

// botones aling// 

btnAlignIzq.addEventListener("click", () =>{
  textTop.style.textAlign = "left";
  textBottom.style.textAlign = "left";
});

btnAlignCent.addEventListener("click", () =>{
textTop.style.textAlign = "center";
textBottom.style.textAlign = "center";
});

btnAlignRight.addEventListener("click", ()=>{
  textTop.style.textAlign = "right";
  textBottom.style.textAlign = "right";
});


//fondo transparente//

fondoTransparente.addEventListener("change", ()=>{
  if(fondoTransparente.checked){
    textTop.style.backgroundColor = "transparent";
    textTop.style.position="absolute";
    textTop.style.top ="150px";
    textBottom.style.backgroundColor ="transparent";
    textBottom.style.position = "absolute";
    textBottom.style.top ="550px";
    
 }else {
  textTop.style.backgroundColor = `${fondoColorIn.value}`;
  textTop.style.position = "static";
  textBottom.style.backgroundColor = `${fondoColorIn.value}`;
  textBottom.style.position = "static";
}
});












