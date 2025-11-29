function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    let temp = 0;
    for (let j = 0; j < x; j++) {
      temp = temp + result;
    }
    result = temp;
  }
  return result;
}

console.log(pow(2, 3));

