export const elements = {
  menuArea: document.getElementById("menu-area"),
  buttonsArea: document.querySelector("#buttons-area"),
  filterBtn: document.querySelector(".filter-btn"),
  outlet:document.querySelector("#outlet")
};

export const calculatePrice = (price) => {
  let newPrice = price * 15;
  newPrice = newPrice.toFixed(2);
  return newPrice;
};
