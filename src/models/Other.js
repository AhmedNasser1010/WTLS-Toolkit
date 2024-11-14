import Weapon from "../models/Weapon.js";

export default class Other extends Weapon {
  constructor(id, category, itemName, price, count) {
    super(id, category, itemName, price, count);
  }
}

let ammoBoxes = new Other(27, "other", "Ammo Boxes", 10000, 10);
let counterfeitChips = new Other(28, "other", "Counterfeit Chips", 10000, 5000);
