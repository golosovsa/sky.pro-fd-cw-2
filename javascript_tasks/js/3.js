function randRange(min, max) {
    return min + Math.round(Math.random() * (max - min));
}

function sumDigits(num) {
    result = 0;
    while (num != 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    } 
    return result;
}

num = randRange(1000, 9999);
console.log(num);
console.log(sumDigits(num));
