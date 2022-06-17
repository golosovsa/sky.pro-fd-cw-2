function mounthToSeason(mounth) {
    
    if (typeof mounth !== 'number' || Number.isNaN(mounth) || mounth < 1 || mounth > 12) {
        return "Неверные данные. Введите номер месяца в диаппазоне от [1..12]";
    }

    if (mounth > 11 || mounth < 3) return "Зима";
    if (mounth < 6) return "Весна";
    if (mounth < 9) return "Лето";
    return "Осень";

}

const goGame1 = () => {
    let mounth = Number(prompt("Введите номер месяца в диаппазоне от [1..12]"));
    alert(mounthToSeason(mounth));
}

for (let mounth = 1; mounth <= 12; mounth++) {
    console.log(`${mounth} месяц это ${mounthToSeason(mounth)}`);    
}

console.log(mounthToSeason(0));
console.log(mounthToSeason(0.5));
console.log(mounthToSeason(12.1));
console.log(mounthToSeason(13));
console.log(mounthToSeason("some-str"));
console.log(mounthToSeason(true));
console.log(mounthToSeason(null));
console.log(mounthToSeason(Infinity));
