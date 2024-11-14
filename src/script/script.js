import Weapon from "../models/Weapon.js";
import numSymbol from "../utils/numSymbol.js";

// load elements
for (let i = 0; i < Weapon.thisItems.length; i++) {
  Weapon.thisItems[i].appendContentInPage();
}

let items = document.querySelectorAll(".item");
let resultField = document.querySelector(".resultField");

let inputField = document.querySelector("#inputField");

items.forEach(item => {
  item.addEventListener("click", e => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("selected");
    }
    e.target.classList.add("selected");

    let selectedItem = document.querySelector(".item.selected").getAttribute("itemid");
    inputField.addEventListener("input", e => {
      resultField.innerHTML = Weapon.thisItems[selectedItem].calc(e.target.value);
    });
    resultField.removeAttribute("before-content");
    resultField.setAttribute("before-content", `Per ${numSymbol(Weapon.thisItems[selectedItem].per().toFixed(0), "$", "", "", "", "K", "K", "K", "M", "M", "M", "B")}`);
    resultField.innerHTML = Weapon.thisItems[selectedItem].calc(inputField.value);
  });
});

let changeBtn = document.querySelector(".changeBtn");
changeBtn.classList.add("itemsToPrice");
changeBtn.addEventListener("click", e => {
  if (e.target.classList.contains("itemsToPrice")) {
    e.target.classList.remove("itemsToPrice");
    e.target.classList.add("priceToItems");
  } else if (e.target.classList.contains("priceToItems")) {
    e.target.classList.remove("priceToItems");
    e.target.classList.add("itemsToPrice");
  }
  // here
  let x = document.querySelector(".inputField")
  if (x.classList.contains("itemsToPrice")) {
    x.classList.remove("itemsToPrice");
    x.classList.add("priceToItems");
  } else if (x.classList.contains("priceToItems")) {
    x.classList.remove("priceToItems");
    x.classList.add("itemsToPrice");
  }
  let y = document.querySelector(".result");
  if (y.classList.contains("itemsToPrice")) {
    y.classList.remove("itemsToPrice");
    y.classList.add("priceToItems");
  } else if (y.classList.contains("priceToItems")) {
    y.classList.remove("priceToItems");
    y.classList.add("itemsToPrice");
  }
  let selectedItem = document.querySelector(".item.selected").getAttribute("itemid");
  inputField.addEventListener("input", e => {
    resultField.innerHTML = Weapon.thisItems[selectedItem].calc(e.target.value);
  });
  resultField.innerHTML = Weapon.thisItems[selectedItem].calc(inputField.value);
});

let defaultSelectedItem = 21;
items[defaultSelectedItem].classList.add("selected");
let selectedItem = document.querySelector(".item.selected").getAttribute("itemid");
inputField.addEventListener("input", e => {
  resultField.innerHTML = Weapon.thisItems[selectedItem].calc(e.target.value);
});
resultField.innerHTML = Weapon.thisItems[selectedItem].calc(inputField.value);

resultField.removeAttribute("before-content");
resultField.setAttribute("before-content", `Per ${numSymbol(Weapon.thisItems[selectedItem].per().toFixed(0), "$", "", "", "", "K", "K", "K", "M", "M", "M", "B")}`);
