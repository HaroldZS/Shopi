export const totalPrice = (products) =>
  products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
