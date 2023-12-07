/*
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/
function manufacture(gifts, materials) {
  const materialSet = new Set(materials);
  const result = [];

  for (let gift of gifts) {
    let isGift = true;
    for (let i = 0; i < gift.length; i++) {
      const letter = gift.charAt(i);
      if (!materialSet.has(letter)) {
        isGift = false;
        break;
      }
    }
    if (isGift) {
      result.push(gift);
    }
  }

  return result;
}
