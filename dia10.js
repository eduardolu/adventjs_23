/*

*/
function createChristmasTree(ornaments, height) {
  let result = "";

  let currentOrnamentIndex = 0;

  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    let currentOrnaments = "";

    for (let index = 1; index <= i; index++) {
      const ornamentIndex = currentOrnamentIndex % ornaments.length;
      currentOrnaments += ornaments[ornamentIndex] + " ";
      currentOrnamentIndex++;
    }

    result += `${spaces}${currentOrnaments.trimEnd()}\n`;
  }

  result += " ".repeat(height - 1) + "|\n";
  //   const trunk = `${trunkSpaces}|\n`;
  //   result += trunk;

  return result;
}
const tree1 = createChristmasTree("123", 4);
console.log(tree1);

// Ejemplo 2
const tree2 = createChristmasTree("*@o", 3);
console.log(tree2);

function getIndexsForPalindrome(word) {
  let reversedStr = "";
  reversedStr = word.split("").reverse().join("");
  if (word === reversedStr) {
    return [];
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      let charArray = word.split("");
      let temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
      let modifiedStr = charArray.join("");
      reversedStr = modifiedStr.split("").reverse().join("");
      if (reversedStr === modifiedStr) {
        return [i, j];
      }
    }
  }
  return null;
}
