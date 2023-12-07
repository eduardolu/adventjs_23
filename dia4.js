/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
*/

function decode(message) {
  // Iteramos hasta que ya no haya paréntesis en la cadena
  let resultado = message;

  while (resultado.includes("(")) {
    // Utilizamos una expresión regular para encontrar el contenido dentro de los paréntesis
    resultado = resultado.replace(/\(([^()]*)\)/g, (_, contenido) =>
      // Invertimos el contenido dentro de los paréntesis
      contenido.split("").reverse().join("")
    );
  }

  // Devolvemos el resultado final después de procesar todos los paréntesis
  return resultado;
}

console.log(decode("hola (odnum)"));
