export default function numSymbol(num = 0, process = "", lengthOne = "", lengthTwo = "", lengthThree = "", lengthFour = "", lengthFive = "", lengthSix = "", lengthSeven = "", lengthEight = "", lengthNine = "", lengthTen = "") {
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