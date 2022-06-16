const attempts = 3;

const rand10 = (...argv) => {
    return Math.ceil(10 * Math.random());
}

function userDialog() {
    num = rand10();
    for (let attempt = 1; attempt <= attempts; attempt++) {
        userNum = Number(prompt(`Отгадай число от 1 до 10`).trim());

        if (typeof userNum !== 'number' || isNaN(userNum) || num < 1 || num > 10) {
            alert(`Неверный ввод. У тебя осталось ${attempts - attempt} попытки`);
            continue;
        }

        if (userNum === num) {
            alert("Угадал!");
            break;
        } else if (attempt === attempts) {
            alert("Ты проиграл!");
            break;
        }

        if (num > userNum) {
            alert(`Я задумал число больше. У тебя осталось ${attempts - attempt} попытки`);
        } else {
            alert(`Я задумал число меньше. У тебя осталось ${attempts - attempt} попытки`);
        }
    }
}

userDialog();