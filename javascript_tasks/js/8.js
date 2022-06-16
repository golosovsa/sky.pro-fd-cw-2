let data ="abcdefghijklmnopqrstuvwxyz0123456789";

let extendex_data = data.slice(0, -10).toUpperCase() + data;

function randomChoice(str) {
    let randomIndex = Math.floor(str.length * Math.random());
    return str[randomIndex];
}

function randomSample(str, length) {
    let randomList = Array(length).fill(0).map(() => randomChoice(str));
    return randomList.join("");
}

console.log(randomSample(extendex_data, 8));
console.log(randomSample(extendex_data, 8));
console.log(randomSample(extendex_data, 8));
console.log(randomSample(extendex_data, 8));
console.log(randomSample(extendex_data, 8));
