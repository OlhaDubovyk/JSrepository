function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * 901) + 100;

        if (number % 2 === 0) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }
    }

    let evenPercent = (even / count) * 100;
    let oddPercent = (odd / count) * 100;

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + even);
    console.log("Непарних чисел: " + odd);
    console.log("Відсоток парних: " + evenPercent.toFixed(2) + "%");
    console.log("Відсоток непарних: " + oddPercent.toFixed(2) + "%");
}
checkProbabilityTheory(1000);