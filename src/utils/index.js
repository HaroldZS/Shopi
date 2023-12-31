const totalPrice = (products) =>
  products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedYear = year < 10 ? "0" + year : year;
  const formattedDate =
    formattedDay + "." + formattedMonth + "." + formattedYear;
  return formattedDate;
};

export { totalPrice, currentDate };
