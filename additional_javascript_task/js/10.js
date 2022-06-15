function dayOfWeek(day) {
    const week = ["Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return (day - 1 in week) ? week[day - 1] : "Day must be in a range 1..7";
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(5));
console.log(dayOfWeek(7));

console.log(dayOfWeek(0));
console.log(dayOfWeek(8));

console.log(dayOfWeek(-99));
console.log(dayOfWeek(99));

console.log(dayOfWeek("some-str"));

