// =======================
// Guns Functions
function m4(ammu) {
	function info() {
		let gunName = "M4";
		let Price = 4536;
		let oneBuy = 150;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function akm(ammu) {
	function info() {
		let gunName = "AKM";
		let Price = 3528;
		let oneBuy = 150;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function tuc(ammu) {
	function info() {
		let gunName = "Tuc9";
		let Price = 302;
		let oneBuy = 60;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function microSmg(ammu) {
	function info() {
		let gunName = "Micro SMG";
		let Price = 503;
		let oneBuy = 60;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function smg(ammu) {
	function info() {
		let gunName = "SMG";
		let Price = 2016;
		let oneBuy = 90;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function shotgun(ammu) {
	function info() {
		let gunName = "Shotgun";
		let Price = 605;
		let oneBuy = 15;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function combatShotgun(ammu) {
	function info() {
		let gunName = "Combat Shoutgun";
		let Price = 1008;
		let oneBuy = 10;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function swanoffShotgun(ammu) {
	function info() {
		let gunName = "Swanoff Shotgun";
		let Price = 806;
		let oneBuy = 12;
		let Per = Price / oneBuy;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuy}\n Per = $${Per}\n ${calc()}`;
			function calc() {
				if (ammu === undefined) {
					return `No Calc`
				} else {
					return `Calc: $${Per} X A${ammu} = $${Per * ammu}`;
				}
			}
	}
	console.log(`${info()}`);
}

function customGun(gunName, Price, oneBuyAmmu, ammuToCalc) {
	function info() {
		let Per = Price / oneBuyAmmu;
		return `GUN - ${gunName}\n Price = $${Price}\n One Buy = A${oneBuyAmmu}\n Per = $${Per}\n ${calc()}`;
		function calc() {
			if (ammuToCalc === undefined) {
				return `No Calc`
			} else {
				return `Calc: $${Per} X A${ammuToCalc} = $${Per * ammuToCalc}`;
			}
		}
	}
	console.log(`${info()}`);
}
// =======================

function cmds() {
	console.log(`Gun Cmds\n m4()\n akm()\n tuc()\n smg()\n smg()\n shotgun()\n combatShotgun()\n swanoffShotgun()\n customGun()\nOther Cmds\n clear()`);
}