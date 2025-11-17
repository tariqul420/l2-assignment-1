type Type = string | (string | number)[];

function getLength(value: Type): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
