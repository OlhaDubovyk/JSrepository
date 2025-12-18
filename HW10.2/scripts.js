const text = "Wonderful Joyful Happiness Time Task Apple";
const result = text.match(/\b[^Aa\s]{6,}\b/g);
console.log(result);