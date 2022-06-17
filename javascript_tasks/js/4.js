const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    ["пн", "пон", "понедельник"], 
    ["вт", "втр", "втор", "вторник"], 
    ["ср", "срд", "сред", "среда"], 
    ["чт", "чтв", "чет", "четв", "четверг"], 
    ["пт", "птн", "пятн", "пятница"], 
    ["сб", "суб", "суббота"], 
    ["вс", "вос", "вск", "вскр", "воск", "воскр", "воскресенье"]
];

function genObj(keys, values) {
    let obj = {};
    let length = Math.min(keys.length, values.length);
    for (let i = 0; i < length; i++) obj[keys[i]] = values[i];
    return obj;
}

const weakDay = genObj(en, ru);

const weakWork = {
    workDays: en.slice(0, 5),
};

function userDialog() {
    
    userAnswer = prompt("Напиши день недели");

    if (typeof userAnswer !== "string") {
        alert("Неверный ввод");
        return;
    }

    userAnswer = userAnswer.trim().toLowerCase();
    
    if (userAnswer === "5") {
        alert("Пятница");
        return;
    }

    day = ""

    Object.keys(weakDay).some((key) => {
        if (weakDay[key].includes(userAnswer)) {
            day = key;
            return true;
        }
        return false;
    });

    if (day === "") {
        alert("Неверный ввод");
        return;
    }

    if (weakWork.workDays.includes(day)) {
        alert("будний день");
    } else {
        alert("выходной день");
    }
}

console.log(weakDay);
console.log(weakWork);

userDialog();