type Value = string | number | boolean;

function formatValue(value: Value): Value {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
