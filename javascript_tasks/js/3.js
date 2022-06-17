const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function genObj(keys, values) {
    let obj = {};
    let length = Math.min(keys.length, values.length);
    for (let i = 0; i < length; i++) obj[keys[i]] = values[i];
    return obj;
}

const yearDict = genObj(en, ru);

console.log(yearDict);