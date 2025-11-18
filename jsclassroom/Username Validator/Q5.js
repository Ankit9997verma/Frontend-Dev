function validateUsername(username) {
    if (username.length >= 5 && username.length <= 12) {
        console.log("Valid Username");
    } else {
        console.log("Invalid Username");
    }
}

validateUsername("ankur12");
