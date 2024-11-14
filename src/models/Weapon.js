import numSymbol from "../utils/numSymbol.js";

let gunsContainer = document.querySelector(".categ.guns > div.itemsContainer");
let drugsContainer = document.querySelector(".categ.drugs > div.itemsContainer");
let othersContainer = document.querySelector(".categ.other > div.itemsContainer");
let featuredGuns = document.querySelector(".categ.featuredGuns > div.itemsContainer");

export default class Weapon {
  static thisItems = [];
  // Properties
  constructor(id, category, itemName, price, count) {
    this.id = id;
    this.category = category;
    this.itemName = itemName;
    this.price = price;
    this.count = count;
    this.per = function () {
      return +(price / count).toFixed(1);
    }
    Weapon.thisItems.push(this);
  }
  // methods
  calc(ammunitionNum) {
    let changeBtn = document.querySelector(".changeBtn");
    let calcResult = +(this.price / this.count * ammunitionNum).toFixed(0);

    let per = this.price / this.count;
    let result = +(ammunitionNum / per).toFixed(0);

    if (changeBtn.classList.contains("itemsToPrice")) {
      return numSymbol(calcResult, "$ ", "", "", "", " K", " K", " K", " M", " M", " M", " B");
    } else if (changeBtn.classList.contains("priceToItems")) {
      if (result < 1) {
        return `Less price equal ${per.toFixed(0)}`;
      }
      return numSymbol(result, "Ammo ", "", "", "", " K", " K", " K", " M", " M", " M", " B");
    }
  }
  updatePrice(newPrice) {
    if (newPrice === 0) {
    } else {
      this.price = newPrice;
    }
  }
  appendContentInPage() {
    let span = document.createElement("span");
    span.classList.add("item");
    span.classList.add("onClick");
    span.textContent = this.itemName;
    span.setAttribute("itemid", this.id);
    if (this.category == "gun") {
      gunsContainer.appendChild(span);
    } else if (this.category == "drug") {
      drugsContainer.appendChild(span);
    } else if (this.category == "other") {
      othersContainer.appendChild(span);
    } else if (this.category == "featuredGuns") {
      featuredGuns.appendChild(span);
    }
  }
}

// Guns
let m4 = new Weapon(0, "gun", "M4", 4536, 150);
let akm = new Weapon(1, "gun", "AKM", 3528, 150);
let tuc = new Weapon(2, "gun", "Tuc9", 302, 60);
let microSmg = new Weapon(3, "gun", "Micro SMG", 503, 60);
let smg = new Weapon(4, "gun", "SMG", 2016, 90);
let shotgun = new Weapon(5, "gun", "Shotgun", 605, 15);
let combatShotgun = new Weapon(6, "gun", "Combat Shotgun", 1008, 10);
let swanoffshotgun = new Weapon(7, "gun", "Swanoffshotgun", 806, 12);
let flameThrower = new Weapon(8, "gun", "Flamethrower", 26250, 20);
let molotov = new Weapon(9, "gun", "Molotov", 10500, 10);
let nineMm = new Weapon(10, "gun", "9mm", 230, 30);
let silencedNineMm = new Weapon(11, "gun", "Silenced 9mm", 691, 30);
let desertEagle = new Weapon(12, "gun", "Desert Eagle", 1382, 15);
let rifle = new Weapon(13, "gun", "Rifle", 1000, 20);
// Thrown
let grenades = new Weapon(14, "gun", "Grenades", 4456, 5);
let remoteExplosives = new Weapon(15, "gun", "Remote Explosives", 2304, 1);
let proximityMines = new Weapon(16, "gun", "Proximity Mines", 17280, 1);
let tearGasGrenades = new Weapon(17, "gun", "Tear Gas Grenades", 3456, 1);
let flashBangs = new Weapon(18, "gun", "Flash Bangs", 1728, 1);
let explosives = new Weapon(19, "gun", "Explosives", 5760, 1);
let boobyTraps = new Weapon(20, "gun", "Booby Traps", 9216, 1);
// Featured gun
let mg = new Weapon(21, "featuredGuns", "Minigun", 650000, 20);
let rpg = new Weapon(22, "featuredGuns", "RPG", 168000, 10);
let sniper = new Weapon(23, "featuredGuns", "Sniper", 5000, 10);
