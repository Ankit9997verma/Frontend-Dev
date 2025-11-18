let cart = [299, 499, 199, 150];

function calculateTotal(items) {
    let total = 0;

    for (let price of items) {
        total += price;
    }

    console.log("Cart Total:", total);
}

calculateTotal(cart);
