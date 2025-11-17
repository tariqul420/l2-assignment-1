type FormatValueType = string | number | boolean;

function formatValue(value: FormatValueType): FormatValueType {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

type GetLengthType = string | (string | number)[];

function getLength(value: GetLengthType): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type FilterByRatingType = { title: string; rating: number };

function filterByRating(items: FilterByRatingType[]): FilterByRatingType[] {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error("Rating must be between 0 and 5");
    }

    return item.rating >= 4;
  });
}

type FilterActiveUsersType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(
  users: FilterActiveUsersType[]
): FilterActiveUsersType[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
}

type GetUniqueValuesType = (number | string)[];

function getUniqueValues(
  arr1: GetUniqueValuesType,
  arr2: GetUniqueValuesType
): GetUniqueValuesType {
  const result: GetUniqueValuesType = [];

  function existsInArray(
    array: GetUniqueValuesType,
    value: number | string
  ): boolean {
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

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    if (product.quantity < 0 || product.quantity > 100) {
      throw new Error("Quantity must be between 0 and 100");
    }

    const price = Math.max(product.price, 0);
    const quantity = Math.max(product.quantity, 0);
    const discount =
      typeof product.discount === "number" &&
      product.discount >= 0 &&
      product.discount <= 100
        ? product.discount
        : 0;

    const discountPrice = price * (1 - discount / 100);
    return total + discountPrice * quantity;
  }, 0);
}
