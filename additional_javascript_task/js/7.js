function isOdd(num) {
    if (num % 2 == 0) {
        return "The number is odd";
    }
    return "The number is not odd";
}

theNumber = Number(prompt("Enter number"));
alert(isOdd(theNumber));