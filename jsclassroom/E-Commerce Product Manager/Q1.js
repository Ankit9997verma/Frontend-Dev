// Global variable
let bonus = 5000;

function calculateSalary() {
    let baseSalary = 40000;
    let bonus = 2000;   // Local variable

    let total = baseSalary + bonus;
    console.log("Inside function total:", total);
}

calculateSalary();
console.log("Global bonus:", bonus);
