const calculateDiscount = (price, discountPercent) => price * (discountPercent / 100);

const calculateTax = (priceAfterDiscount, taxPercent) => priceAfterDiscount * (taxPercent / 100);

const createPriceSummary = (price, discountPercent, taxPercent) => {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = priceAfterDiscount + tax;

  return {
    price,
    discount,
    tax,
    finalPrice,
  };
};

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));