import Weapon from "./Weapon";

export default class Drug extends Weapon {
  constructor(id, category, itemName, price, count) {
    super(id, category, itemName, price, count);
  }
}


let weed = new Drug(24, "drug", "Weed", 5000, 10);
let cocaine = new Drug(25, "drug", "Cocaine", 4000, 10);
let meth = new Drug(26, "drug", "Meth", 10000, 10);
