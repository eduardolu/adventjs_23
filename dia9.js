/*
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢) 
*/
function adjustLights(lights) {
  let red = 0,
    green = 0,
    i = 0;

  while (i < lights.length) {
    if (i % 2 === 0) {
      red += lights[i] !== "🔴" ? 1 : 0;
      green += lights[i] !== "🟢" ? 1 : 0;
    } else {
      red += lights[i] !== "🟢" ? 1 : 0;
      green += lights[i] !== "🔴" ? 1 : 0;
    }
    i++;
  }

  return red < green ? red : green;
}

const lightsArray = ["🔴", "🟢", "🔴", "🔴", "🔴", "🟢"];
const minimumChanges = adjustLights(lightsArray);

console.log(`Número mínimo de cambios necesarios: ${minimumChanges}`);
