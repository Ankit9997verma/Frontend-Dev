let arr = [1, 2, 3, 4, 5, 6];

function filterEvenOdd(numbers) {
    let even = [];
    let odd = [];

    for (let num of numbers) {
        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    }

    console.log("Even:", even);
    console.log("Odd:", odd);
}

filterEvenOdd(arr);
