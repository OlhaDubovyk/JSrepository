var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function () {
  let sum = 0;

  for (let key in this) {
    if (typeof this[key] === "string") {
      sum += parseInt(this[key]);
    }
  }

  return sum + " грн";
};

services.minPrice = function () {
  let min;

  for (let key in this) {
    if (typeof this[key] === "string") {
      let price = parseInt(this[key]);
      if (min === undefined || price < min) {
        min = price;
      }
    }
  }

  return min + " грн";
};

services.maxPrice = function () {
  let max;

  for (let key in this) {
    if (typeof this[key] === "string") {
      let price = parseInt(this[key]);
      if (max === undefined || price > max) {
        max = price;
      }
    }
  }

  return max + " грн";
};
// Перевірка:
console.log("Сумарна ціна:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
