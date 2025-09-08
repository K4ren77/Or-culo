// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://gcdn.emol.cl/los-2000/files/2020/03/cerati-crimen.jpg",
  "https://pics.filmaffinity.com/Gustavo_Cerati_Adiaos_Vaideo_musical-683005853-large.jpg",
  "https://www.latercera.com/resizer/4SDjvx3q00sLy_2jTGI6gGfXRwE=/arc-anglerfish-arc2-prod-copesa/public/464W4GWDJJAGZP73HKHZW7KKPM.JPG",
  "https://fahrenheitmagazine.b-cdn.net/sites/default/files/styles/xl/public/field/image/gustavo_cerati_1.jpg",
];

const titulos = [
  "Crimen (2006)",
  "Adiós (2006)",
  "Cactus (2009)",
  "Amor amarillo (1993)",
];

const frases = [
  "Estas obsesionad@ con tu ex. Medio celocillo y drama queen.",
  "Sabes que para que lleguen cosas mejores debes soltar. Eres quien da consejos de amor a tus amigos.",
  "Eres medio hippie. Sientes una conexión profunda con la naturaleza y te gusta meditar bajo el sol.",
  "Eres un romántico empedernido. Al servicio por y para el amor."
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();