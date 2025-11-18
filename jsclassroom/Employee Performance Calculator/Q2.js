function performanceCalculator(sales) {
    let bonus = 0;

    if (sales > 100000) {
        bonus = 10000;
    } else if (sales > 50000) {
        bonus = 5000;
    } else {
        bonus = 1000;
    }

    console.log("Sales:", sales, "Bonus:", bonus);
}

performanceCalculator(75000);
