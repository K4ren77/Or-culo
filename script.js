// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://i1.sndcdn.com/artworks-S64yjfu4Ar5A-0-t500x500.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/SodaStereo_CancionAnimal.jpg/250px-SodaStereo_CancionAnimal.jpg",
  "https://www.latercera.com/resizer/4SDjvx3q00sLy_2jTGI6gGfXRwE=/arc-anglerfish-arc2-prod-copesa/public/464W4GWDJJAGZP73HKHZW7KKPM.JPG",
  "https://fahrenheitmagazine.b-cdn.net/sites/default/files/styles/xl/public/field/image/gustavo_cerati_1.jpg",
  "https://rocknvivo.com/wp-content/uploads/2018/10/charly-garcia-inicio-rock-770x513.jpg",
  "https://akamai.sscdn.co/uploadfile/letras/fotos/1/f/1/b/1f1b8bae061ee5bc5d814bb5f6793357-tb4.jpg",
  "https://i.pinimg.com/736x/53/2c/80/532c8057c0ce6898cfe788050be63be4.jpg",
  "https://i.pinimg.com/474x/f1/c3/67/f1c367afc348bd25f8c05c6e89b9af81.jpg",
  "https://akamai.sscdn.co/uploadfile/letras/fotos/0/1/1/c/011cf7178a2267105a46d52ccd61f5d1.jpg",
  "https://i1.sndcdn.com/artworks-000033542424-gmluwu-t500x500.jpg",
  "https://latinta.com.ar/wp-content/uploads/2017/07/Spinetta-1.jpg",
  "https://akamai.sscdn.co/letras/215x215/fotos/3/d/4/e/3d4e824e0881ca8c71b71ad2905cd696.jpg",
];

const titulos = [
  "Demoliendo Hoteles (Charly García, 1984)",
  "Canción Animal (Soda Stéreo, 1990)",
  "Cactus (Cerati, 2009)",
  "Amor amarillo (1993)",
  "Canción para mi muerte (Sui Generis, 1984)",
  "Mariposa Tecknicolor (Fito Paéz, 1994)",
  "Música Ligera (Soda Stéreo, 1990)",
  "Hazte Fama (Fito Páez,1990)",
  "Mil Horas (Los Abuelos de la Nada, 1983)",
  "Loco (Calamaro, 1997)",
  "Seguir viviendo sin tu amor (Spinetta, 1991)",
  "Barro Tal Vez (Spinetta, 1982)",
];

const frases = [
  "Eres un revolucionario con estilo underground y súper antisistema. Probablemente tiras papas bomba en los tropeles.",
  "Te gusta seguir tus instintos. Aveces llegas a tener una personalidad demasiado salvaje, no cualquiera puede contigo.",
  "Eres medio hippie. Sientes una conexión profunda con la naturaleza y te gusta meditar bajo el sol.",
  "Amas las comedias románticas y dibujas corazones en las esquinitas de las hojas. Estas al servicio por y para el amor.",
  "Eres sensible, nostálgico y tranquilo. En las noches lees poesía mientras cuentas las estrellas.", 
  "Fluyes con el devenir de tu existencia. La vida pasa y tu solo la disfrutas y atesoras las experiencias conseguidas.",
  "Eres un eterno adolescente. Aveces un poco básico, pero llegas a animar la fiesta.",
  "La gente habla y a ti te importa cinco lo que tengan que decir. Vives sin que las criticas te detengan.",
  "Eres un poquito migajero. Siempre que encuentras el amor terminan desilucionandote, pero tu sigues ahi, esperandol@ bajo la lluvia.",
  "Antes eras un loco, probablemente te invitaban a muchas farras. Las cosas han cambiado y por fin te tomas un tiempo para ti mismo lejos de los excesos.",
  "Eres un romántico eterno. El amor lo es todo para ti. Es evidente que das el 100% en todas tus relaciones.",
  "Tienes un alma artística, reflexiva y melancólica. Te pierdes en tus pensamientos y disfrutas disociar escuchando una buena música.",
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