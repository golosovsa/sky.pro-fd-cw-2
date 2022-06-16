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

let arr = randArr(5, rand10);

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}