function discountPrice(price, discount) {
    let finalPrice = price - (price * discount / 100);
    console.log("Final Price:", finalPrice);
}

discountPrice(1000, 20);
