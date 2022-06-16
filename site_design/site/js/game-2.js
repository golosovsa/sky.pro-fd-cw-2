const messages = ["Ответ неверный!", "Вы были близки к победе!", "Поздравляю! Верно!"];
const fruits = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
const questions = ["Чему равнялся первый элемент массива?", "Чему равнялся последний элемент массива?"]

const goGame2 = () => {
    let mixed_fruits = fruits.sort(() => { return Math.random() - 0.5; });

    let rightAnswers = []
    rightAnswers.push(mixed_fruits[0].toLowerCase()) 
    rightAnswers.push(mixed_fruits[mixed_fruits.length - 1].toLowerCase())

    alert(`Запомни проследовательность!\n${mixed_fruits.join(", ")}`);
    points = questions.map((msg, index) => {
        return prompt(msg).trim().toLowerCase() === rightAnswers[index];
    }).reduce((akk, value) => {
        return akk + Number(value);
    });

    alert(messages[points])    
}