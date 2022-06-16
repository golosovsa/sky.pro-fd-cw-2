function genOdd(end) {
    return Array(Math.ceil((end - end % 2) / 2)).fill(0).map((value, index) => {
       return (index + 1) * 2;
    });
}

function userDialog() {
    
    end = Number(prompt("Введите число от 1 до 20"));

    if (typeof end !== "number" || isNaN(end) || end < 1 || end > 20) return "Неверный ввод."

    return `[${genOdd(end).join(", ")}]`
}

console.log(userDialog());
