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

let result = arr[0] * arr[1] + arr[2] * arr[3];

alert(`[${arr.join(", ")}]\n${result}`);