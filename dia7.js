/*
function drawPattern(size, symbol) {
  let pattern = "";
  const border = "#";
  const space = " ";

  if (size > 1) {
    // Dibujar la parte superior de la caja
    pattern += space.repeat(size - 1);
    pattern += border.repeat(size);
    pattern += "\n";
    for (let i = size - 1; i > 1; i--) {
      pattern += space.repeat(i - 1);
      pattern += border.repeat(1);
      if (i != size) pattern += symbol.repeat(size - 2);
      else pattern += border.repeat(1);
      pattern += border.repeat(1);
      if (i != size) pattern += symbol.repeat(size - i - 1);
      pattern += border.repeat(1);
      // pattern += space.repeat(i - 1);
      pattern += "\n";
    }
    pattern += border.repeat(size);
    pattern += symbol.repeat(size - 2);
    pattern += border.repeat(1);
    pattern += "\n";
    // Dibujar la parte inferior de la caja
    for (let i = 1; i < size - 1; i++) {
      pattern += border.repeat(1);
      pattern += symbol.repeat(size - 2);
      pattern += border.repeat(1);
      if (i != size - 1) pattern += symbol.repeat(size - i - 2);
      pattern += border.repeat(1);
      pattern += "\n";
    }
    pattern += border.repeat(size);
    pattern += "\n";
  } else {
    pattern += border.repeat(size);
    pattern += "\n";
  }

  return pattern;
}*/

function drawGift(size, symbol) {
  if (size <= 1) return "#\n";
  let pattern = "";
  pattern += `${" ".repeat(size - 1)}${"#".repeat(size)}\n`;
  for (let i = size - 1; i > 1; i--) {
    const leadingSpaces = " ".repeat(i - 1);
    const sideSymbols = symbol.repeat(size - 2);
    const innerSymbols = symbol.repeat(size - i - 1);
    pattern += `${leadingSpaces}#${sideSymbols}#${innerSymbols}#\n`;
  }
  pattern += `${"#".repeat(size)}${symbol.repeat(size - 2)}#\n`;
  for (let i = 1; i < size - 1; i++) {
    const sideSymbols = symbol.repeat(size - 2);
    const innerSymbols = i !== size - 1 ? symbol.repeat(size - i - 2) : "";
    pattern += `#${sideSymbols}#${innerSymbols}#\n`;
  }
  pattern += `${"#".repeat(size)}\n`;
  return pattern;
}

console.log(drawGift(6, "+"));
