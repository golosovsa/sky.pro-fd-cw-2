function howOldAreYou(age) {
    if (age <= 0) {
        alert("Вы ввели неправильное значение");
    } else if (age < 13) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

howOldAreYou(Number(prompt("How old are you?")));