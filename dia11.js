/*
En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.
Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:
Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
Por ejemplo:
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.
*/
function getIndexsForPalindrome(word) {
  // Verifica si la palabra ya es un palíndromo
  if (word === word.split("").reverse().join("")) {
    return [];
  }

  // Intenta intercambiar caracteres para formar un palíndromo
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      // Intercambia los caracteres en los índices i y j
      let charArray = word.split("");
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];

      // Verifica si la palabra modificada es un palíndromo
      if (charArray.join("") === charArray.slice().reverse().join("")) {
        return [i, j];
      }
    }
  }

  // Si no se encuentra ningún palíndromo, devuelve null
  return null;
}
// END: getIndexsForPalindrome
console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
