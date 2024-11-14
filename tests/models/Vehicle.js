// fetch('../../data/vehiclePartsData.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.error('Error loading JSON:', error));


export class Part {
  constructor(name = 'Unspecified Part', price = 0) {
    this.name = name;
    this.price = price;
  }
}

export class Vehicle {
  constructor(
    vehicleName = 'Unspecified Vehicle',
    vehicleStockPrice = 0,
    vehicleStockPriceTokens = 0,
    parts = []
  ) {
    this.vehicleName = vehicleName;
    this.vehicleStockPrice = vehicleStockPrice;
    this.vehicleStockPriceTokens = vehicleStockPriceTokens;
    this.parts = parts;
  }

  addPart(part) {
    this.parts.push(part);
  }

  calculateTotalPrice() {
    return this.parts.reduce((total, part) => total + part.price, this.vehicleStockPrice);
  }
}

const vehicleData = {
  name: 'Car Model X',
  stock: 10000,
  parts: [
    new Part('Wheels Access', 200),
    new Part('Exhaust XFlow', 400)
  ]
};

const vehicle = new Vehicle(vehicleData.name, vehicleData.stock, 0, vehicleData.parts);

console.log(vehicle)
console.log(vehicle.calculateTotalPrice());
