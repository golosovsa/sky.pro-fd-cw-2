const arr = [10, 12, 15, 22, 33, 37, 45, 50];

function firstDigit(num) {
    while (num / 10 >= 1) {
        num = Math.floor(num / 10)
    }
    return num
}

arr.map((value) => [1, 3].includes(firstDigit(value))  ? console.log(value) : null);