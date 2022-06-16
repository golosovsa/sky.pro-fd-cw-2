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

let arr = randArr(6, rand10);
let average = arr.reduce((akk, value) => { return akk + value;}, 0) / arr.length;

console.log(average);