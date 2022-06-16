const riddle = "Висит груша нельзя скушать";
const answers = ["лампа", "лампочка"];
const attempts = 3;

function userDialog() {
    for (let attempt = 0; attempt < attempts; attempt++) {
        userAnswer = prompt(`Отгадай загадку:\n${riddle}`).trim().toLowerCase();
        if (answers.includes(userAnswer)) {
            alert("Поздравляю! Верно!");
            break;
        } else {
            if (attempt === attempts - 1) {
                alert("Ты проиграл.");
            } else {
                alert("Неверно, попробуй еще раз.");
            }
        }
    } 
}

userDialog();