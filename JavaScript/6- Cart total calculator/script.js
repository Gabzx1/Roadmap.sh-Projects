const calculateSubtotal = (items) => {
  let subtotal = 0;

  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
};

const calculateDiscount = (subtotal, discountPercent) => subtotal * (discountPercent / 100);
const calculateTax = (amountAferDiscount, taxPercent) => amountAferDiscount * (taxPercent / 100);

const createCartSummary = (items, discountPercent, taxPercent) => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, discountPercent);
  const amountAferDiscount = subtotal - discount;
  const tax = calculateTax(amountAferDiscount, taxPercent);
  const total = amountAferDiscount + tax;

  return {
    subtotal,
    discount,
    tax,
    total,
  };
};

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

const singleItemCar = [{ name: 'laptop', price: 400, quantity: 1 }];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
console.log(createCartSummary(singleItemCar, 12, 18));
