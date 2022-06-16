const renovationTypes = ["минимальный", "средний", "максимальный"];
const renovationCosts = [7_000, 10_000, 15_000];

function calcRenovation(cost, length, width) {
    return cost * length * width
}

function userDialog() {

    let length = Number(prompt("Введите длину комнаты"));

    if (typeof length !== 'number' || isNaN(length)) {
        return "Неверные данные";
    }

    let width = Number(prompt("Введите ширину комнаты"));

    if (typeof width !== 'number' || isNaN(width)) {
        return "Неверные данные";
    }
    
    msg = `Какой ремонт вы хотите?\nВведите:\n${
        renovationCosts.map((value, index) => {
            return `${index + 1} ${renovationTypes[index]}: ${value}`;
        }).join("\n")
    }`;
    
    userRennovationType = Number(prompt(msg));
    
    if (typeof userRennovationType !== 'number' || isNaN(userRennovationType) || userRennovationType < 1 || userRennovationType > 3) {
        return "Неверные данные";
    }

    return `Стоимость ремонта: \$${calcRenovation(renovationCosts[userRennovationType - 1], length, width)}`;
}

alert(userDialog());