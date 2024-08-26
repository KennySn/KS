//Funcion del boton de inicio (funcion:redirigir al usuario a discord)
document.getElementById('Boton-Inicio').addEventListener('click', function() {
  window.location.href = "https://discord.gg/vyR2pYkwRx";
});

//Funciona para poner las imagenes que yo quiera 
var imagenes = ["https://i.imgur.com/hRMiTjR.png", "https://i.imgur.com/56bWmpa.png", "https://i.imgur.com/Py9fAyT.png"];
var imagenActual = 0;

//Funcion de los botones de la galeria
document.getElementById('B-Siguiente').addEventListener('click', function() {
  mostrarImagen(-1);
});

document.getElementById('B-Anterior').addEventListener('click', function() {
  mostrarImagen(1);
});

function mostrarImagen(n) {
  imagenActual += n;
  if (imagenActual < 0) {
    imagenActual = imagenes.length - 1;
  }
  if (imagenActual >= imagenes.length) {
    imagenActual = 0;
  }
  document.getElementById('imagenGaleria').src = imagenes[imagenActual];
}