const rand10 = (...argv) => {
    return Math.round(10 * Math.random());
}

const randArr = (len, func) => {
    let result = Array(len);
    for (let i = 0; i < result.length; i++) {
        result[i] = func(i);        
    }
    return result;
}

let arr = randArr(4, rand10);
let arrPow3 = arr.map((value) => value ** 3);

console.log(arr);
console.log(arrPow3);
