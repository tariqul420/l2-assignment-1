function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
