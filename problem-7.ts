type ArrayType = (number | string)[];

function getUniqueValues(arr1: ArrayType, arr2: ArrayType) {
  const result: ArrayType = [];

  function existsInArray(array: ArrayType, value: number | string): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!existsInArray(result, arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!existsInArray(result, arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
