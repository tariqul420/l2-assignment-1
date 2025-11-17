interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const totalPrice = products
    .map((product) => {
      const price = product.price >= 0 ? product.price : 0;
      const quantity = product.quantity >= 0 ? product.quantity : 0;
      const discount =
        typeof product.discount === "number" &&
        product.discount >= 0 &&
        product.discount <= 100
          ? product.discount
          : 0;

      const discountPrice = price * (1 - discount / 100);

      return discountPrice * quantity;
    })
    .reduce((total, itemTotal) => total + itemTotal, 0);

  return totalPrice;
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
