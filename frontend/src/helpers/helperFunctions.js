export const formatPrice = num => {
  /**
   * format number to have commas for thousands
   */
  const internationalNumFormat = new Intl.NumberFormat("en-US");

  const newPrice = internationalNumFormat.format(num);

  return newPrice;
};

export const formatCheckoutPrice = num => {
  /**
   * format number to have commas for thousands and dollar sign with two-decimal places for each number
   */
  const internationalNumFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const newPrice = internationalNumFormat.format(num);

  return newPrice;
};

export const getShortenedName = cartItemName => {
  /**
   * take full product name and remove the category at the end so when showing
   * in the cart and order summary the product name isn't as long
   */
  let arr = cartItemName.split(" ");
  arr.pop();
  return arr.join(" ");
};
