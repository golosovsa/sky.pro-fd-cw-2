const mounths = {
    ru: [ 
        "январь", "февраль", "март", "апрель", 
        "май", "июнь", "июль", "август", 
        "сентябрь", "октябрь", "ноябрь", "декабрь",
    ],
    en: [
        "january", "february", "march", "april",
        "may", "june", "july", "august",
        "september", "october", "november", "december",],
};

function userDialog() {
    let language = prompt("Введите ru или en");

    if (typeof language !== 'string') {
        alert("Неверные данные");
        return;
    }

    language = language.trim().toLowerCase();

    if (!Object.keys(mounths).includes(language)) {
        alert("Неверные данные");
        return;
    }

    let month = prompt("Введите номер месяца, который вы хотите вывести");

    if (typeof month !== 'string') {
        alert("Неверные данные");
        return;
    }

    month = Number(month.trim());

    if (typeof month !== 'number' || month <= 0 || month > mounths[language].length) {
        alert("Неверные данные");
        return;
    }

    alert(mounths[language][month - 1]);
}

userDialog();