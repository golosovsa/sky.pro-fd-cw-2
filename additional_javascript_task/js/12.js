function calcCoast3By2(coasts) {
    return coasts.filter((value) => value !== Math.min(...coasts)).reduce((akk, value) => akk + value, 0);
}

function userDialog() {
    userInputs = prompt("Введите через запятую и пробел стоимость покупок (3 раза)").split(", ").map((value) => Number(value));

    if (userInputs.length != 3 || userInputs.some((value) => typeof value !== 'number' || isNaN(value))) {
        alert("Неверный ввод!");
        return;
    }

    alert(`Ваша цена \$${calcCoast3By2(userInputs)}`);
}

userDialog();
