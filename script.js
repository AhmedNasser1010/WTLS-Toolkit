let gunsContainer = document.querySelector(".categ.guns > div");
let drugsContainer = document.querySelector(".categ.drugs > div");
let othersContainer = document.querySelector(".categ.other > div");

class Weapon {
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
		}
	}
}

class Drug extends Weapon {
	constructor(id, category, itemName, price, count) {
		super(id, category, itemName, price, count);
	}
}

class Other extends Weapon {
	constructor(id, category, itemName, price, count) {
		super(id, category, itemName, price, count);
	}
}

// class Vehicle {
// 	constructor(
// 		vehicleName,
// 		vehiclePrice,
// 		nitroXOne,
// 		nitroXTwo,
// 		nitroXThree,
// 		wheelsAccess,
// 		wheelsAhab,
// 		wheelsAtomic,
// 		wheelsClassic,
// 		wheelsCutter,
// 		wheelsDollar,
// 		wheelsGrove,
// 		wheelsImport,
// 		wheelsMega,
// 		wheelsOffroad,
// 		wheelsRimshine,
// 		wheelsShadow,
// 		wheelsSwitch,
// 		wheelsTrance,
// 		wheelsTwist,
// 		wheelsVirtual,
// 		wheelsWires,
// 		exhaustXFlow,
// 		exhaustUpswept,
// 		exhaustTwin,
// 		exhaustSmall,
// 		exhaustSlaminExhaust,
// 		exhaustSlamin,
// 		exhaustMedium,
// 		exhaustLarge,
// 		exhaustChromeExhaust,
// 		exhaustChrome,
// 		exhaustAlien,
// 		spoilerAlien,
// 		spoilerAlpha,
// 		spoilerChamp,
// 		spoilerDrag,
// 		spoilerFury,
// 		spoilerPro,
// 		spoilerRace,
// 		spoilerWin,
// 		spoilerWorx,
// 		spoilerXFlow,
// 		bullbarChromeGrill,
// 		bullbarsBullbarChromeBars,
// 		bullbarsBullbarChromeLights,
// 		frontBullbarsChrome,
// 		frontBullbarsSlamin,
// 		frontBullbarsAlien,
// 		frontBullbarsXFlow,
// 		hoodLeftOvalHoods,
// 		hoodLeftSquareHoods,
// 		hoodRightOvalHoods,
// 		hoodRightSquareHoods,
// 		hydraulics,
// 		lampsRoundFog,
// 		lampsSquareFog,
// 		rearBullbarsChrome,
// 		rearBullbarsSlamin,
// 		rearBullbarsAlien,
// 		rearBullbarsXFlow,
// 		roofAlien,
// 		roofAlienRoofVent,
// 		roofCovertible,
// 		roofHardtop,
// 		roofRoofScoop,
// 		roofSofttop,
// 		roofVinylHardtop,
// 		roofXFlow,
// 		roofXFlowRoofVent,
// 		sideskirtChromeArches,
// 		sideskirtChromeFlames,
// 		sideskirtChromeStrip,
// 		sideskirtChromeTrim,
// 		sideskirtWheelcovers,
// 		sideskirtAlien,
// 		sideskirtChrome,
// 		sideskirtSideskirt,
// 		sideskirtXFlow,
// 		) {
// 		this.vehicleName = vehicleName;
// 		this.vehiclePrice = vehiclePrice;
// 		this.nitroXOne = nitroXOne;
// 		this.nitroXTwo = nitroXTwo;
// 		this.nitroXThree = nitroXThree;
// 		this.wheelsAccess = wheelsAccess;
// 		this.wheelsAhab = wheelsAhab;
// 		this.wheelsAtomic = wheelsAtomic;
// 		this.wheelsClassic = wheelsClassic;
// 		this.wheelsCutter = wheelsCutter;
// 		this.wheelsDollar = wheelsDollar;
// 		this.wheelsGrove = wheelsGrove;
// 		this.wheelsImport = wheelsImport;
// 		this.wheelsMega = wheelsMega;
// 		this.wheelsOffroad = wheelsOffroad;
// 		this.wheelsRimshine = wheelsRimshine;
// 		this.wheelsShadow = wheelsShadow;
// 		this.wheelsSwitch = wheelsSwitch;
// 		this.wheelsTrance = wheelsTrance;
// 		this.wheelsTwist = wheelsTwist;
// 		this.wheelsVirtual = wheelsVirtual;
// 		this.wheelsWires = wheelsWires;
// 		this.exhaustXFlow = exhaustXFlow;
// 		this.exhaustUpswept = exhaustUpswept;
// 		this.exhaustTwin = exhaustTwin;
// 		this.exhaustSmall = exhaustSmall;
// 		this.exhaustSlaminExhaust = exhaustSlaminExhaust;
// 		this.exhaustSlamin = exhaustSlamin;
// 		this.exhaustMedium = exhaustMedium;
// 		this.exhaustLarge = exhaustLarge;
// 		this.exhaustChromeExhaust = exhaustChromeExhaust;
// 		this.exhaustChrome = exhaustChrome;
// 		this.exhaustAlien = exhaustAlien;
// 		this.spoilerAlien = spoilerAlien;
// 		this.spoilerAlpha = spoilerAlpha;
// 		this.spoilerChamp = spoilerChamp;
// 		this.spoilerDrag = spoilerDrag;
// 		this.spoilerFury = spoilerFury;
// 		this.spoilerPro = spoilerPro;
// 		this.spoilerRace = spoilerRace;
// 		this.spoilerWin = spoilerWin;
// 		this.spoilerWorx = spoilerWorx;
// 		this.spoilerXFlow = spoilerXFlow;
// 		this.bullbarChromeGrill = bullbarChromeGrill;
// 		this.bullbarsBullbarChromeBars = bullbarsBullbarChromeBars;
// 		this.bullbarsBullbarChromeLights = bullbarsBullbarChromeLights;
// 		this.frontBullbarsChrome = frontBullbarsChrome;
// 		this.frontBullbarsSlamin = frontBullbarsSlamin;
// 		this.frontBullbarsAlien = frontBullbarsAlien;
// 		this.frontBullbarsXFlow = frontBullbarsXFlow;
// 		this.hoodLeftOvalHoods = hoodLeftOvalHoods;
// 		this.hoodLeftSquareHoods = hoodLeftSquareHoods;
// 		this.hoodRightOvalHoods = hoodRightOvalHoods;
// 		this.hoodRightSquareHoods = hoodRightSquareHoods;
// 		this.hydraulics = hydraulics;
// 		this.lampsRoundFog = lampsRoundFog;
// 		this.lampsSquareFog = lampsSquareFog;
// 		this.rearBullbarsChrome = rearBullbarsChrome;
// 		this.rearBullbarsSlamin = rearBullbarsSlamin;
// 		this.rearBullbarsAlien = rearBullbarsAlien;
// 		this.rearBullbarsXFlow = rearBullbarsXFlow;
// 		this.roofAlien = roofAlien;
// 		this.roofAlienRoofVent = roofAlienRoofVent;
// 		this.roofCovertible = roofCovertible;
// 		this.roofHardtop = roofHardtop;
// 		this.roofRoofScoop = roofRoofScoop;
// 		this.roofSofttop = roofSofttop;
// 		this.roofVinylHardtop = roofVinylHardtop;
// 		this.roofXFlow = roofXFlow;
// 		this.roofXFlowRoofVent = roofXFlowRoofVent;
// 		this.sideskirtChromeArches = sideskirtChromeArches;
// 		this.sideskirtChromeFlames = sideskirtChromeFlames;
// 		this.sideskirtChromeStrip = sideskirtChromeStrip;
// 		this.sideskirtChromeTrim = sideskirtChromeTrim;
// 		this.sideskirtWheelcovers = sideskirtWheelcovers;
// 		this.sideskirtAlien = sideskirtAlien;
// 		this.sideskirtChrome = sideskirtChrome;
// 		this.sideskirtSideskirt = sideskirtSideskirt;
// 		this.sideskirtXFlow = sideskirtXFlow;
// 	// 78 item
// }

// Weapons
// Guns
let m4 = new Weapon(0, "gun", "M4", 4536, 150);
let akm = new Weapon(1, "gun", "AKM", 3528, 150);
let tuc = new Weapon(2, "gun", "Tuc9", 302, 60);
let microSmg = new Weapon(3, "gun", "Micro SMG", 503, 60);
let smg = new Weapon(4, "gun", "SMG", 2016, 90);
let shotgun = new Weapon(5, "gun", "Shotgun", 605, 15);
let combatShotgun = new Weapon(6, "gun", "Combat Shotgun", 1008, 10);
let swanoffshotgun = new Weapon(7, "gun", "Swanoffshotgun", 806, 12);
let rpg = new Weapon(8, "gun", "RPG", 168000, 10);
let mg = new Weapon(9, "gun", "Minigun", 600000, 20);
let flameThrower = new Weapon(10, "gun", "Flamethrower", 26250, 20);
let molotov = new Weapon(11, "gun", "Molotov", 10500, 10);
let nineMm = new Weapon(12, "gun", "9mm", 230, 30);
let silencedNineMm = new Weapon(13, "gun", "Silenced 9mm", 691, 30);
let desertEagle = new Weapon(14, "gun", "Desert Eagle", 1382, 15);
// Thrown
let grenades = new Weapon(15, "gun", "Grenades", 4456, 5);
let remoteExplosives = new Weapon(16, "gun", "Remote Explosives", 2304, 1);
let proximityMines = new Weapon(17, "gun", "Proximity Mines", 17280, 1);
let tearGasGrenades = new Weapon(18, "gun", "Tear Gas Grenades", 3456, 1);
let flashBangs = new Weapon(19, "gun", "Flash Bangs", 1728, 1);
let explosives = new Weapon(20, "gun", "Explosives", 5760, 1);
let boobyTraps = new Weapon(21, "gun", "Booby Traps", 9216, 1);
// ^Weapon^

// Drugs
let weed = new Drug(22, "drug", "Weed", 5000, 10);
let cocaine = new Drug(23, "drug", "Cocaine", 4000, 10);
let meth = new Drug(24, "drug", "Meth", 10000, 10);
// ^Drugs^

// Other
let ammoBoxes = new Other(25, "other", "Ammo Boxes", 10000, 10);
let counterfeitChips = new Other(26, "other", "Counterfeit Chips", 10000, 5000);
// ^Other

function numSymbol(num = 0, process = "", lengthOne = "", lengthTwo = "", lengthThree = "", lengthFour = "", lengthFive = "", lengthSix = "", lengthSeven = "", lengthEight = "", lengthNine = "", lengthTen = "") {
	let toString = num.toString();
	let toArray = toString.split("");
	switch (toArray.length) {
		case 1:
			// 1 one one Field
			return `${process}${toArray.join("")}${lengthOne}`;
			break;
		case 2:
			// 10 ten two Field
			return `${process}${toArray.join("")}${lengthTwo}`;
			break;
		case 3:
			// 100 one hundred three Field
			return `${process}${toArray.join("")}${lengthThree}`;
			break;
		case 4:
			// 1000 one thousand four Field
			toArray.splice(1, 0, ",");
			return `${process}${toArray.join("")}${lengthFour}`;
			break;
		case 5:
			// 10000 ten thousand five Field
			toArray.splice(2, 0, ",");
			return `${process}${toArray.join("")}${lengthFive}`;
			break;
		case 6:
			// 100000 one hundred thousand six Field
			toArray.splice(3, 0, ",");
			return `${process}${toArray.join("")}${lengthSix}`;
			break;
		case 7:
			// 1000000 one million seven Field
			toArray.splice(1, 0, ",");
			toArray.splice(5, 0, ",");
			return `${process}${toArray.join("")}${lengthSeven}`;
			break;
		case 8:
			// 10000000 ten million eight Field
			toArray.splice(2, 0, ",");
			toArray.splice(6, 0, ",");
			return `${process}${toArray.join("")}${lengthEight}`;
			break;
		case 9:
			// 100000000 one hundred million nine Field
			toArray.splice(3, 0, ",");
			toArray.splice(7, 0, ",");
			return `${process}${toArray.join("")}${lengthNine}`;
			break;
		case 10:
			// 1000000000 one billion ten Field
			toArray.splice(1, 0, ",");
			toArray.splice(5, 0, ",");
			toArray.splice(9, 0, ",");
			return `${process}${toArray.join("")}${lengthTen}`;
			break;
		default:
			return `The number is too high!`;
			break;
	}
}

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
		resultField.setAttribute("before-content", `Per ${numSymbol(Weapon.thisItems[selectedItem].per().toFixed(0), "$", "", "", "", "K", "K", "K", "M", "M", "M", "B" )}`);
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

let defaultSelectedItem = 9;
items[defaultSelectedItem].classList.add("selected");
let selectedItem = document.querySelector(".item.selected").getAttribute("itemid");
inputField.addEventListener("input", e => {
	resultField.innerHTML = Weapon.thisItems[selectedItem].calc(e.target.value);
});
resultField.innerHTML = Weapon.thisItems[selectedItem].calc(inputField.value);

resultField.removeAttribute("before-content");
resultField.setAttribute("before-content", `Per ${numSymbol(Weapon.thisItems[selectedItem].per().toFixed(0), "$", "", "", "", "K", "K", "K", "M", "M", "M", "B" )}`);
