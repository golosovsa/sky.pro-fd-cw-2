const riddles = [
    {
        pk: 1,
        text: "На носу сидим,\nНа мир глядим,\nЗа уши держимся.",
        hints: ["У меня есть стекло", "Я помогаю лучше видеть"],
        answer: "очки",
    },
    {
        pk: 2,
        text: "Говорит она беззвучно,\nА понятно и нескучно.\nТы беседуй чаще с ней —\nСтанешь вчетверо умней.",
        hints: ["Я сделана из бумаги", "Чтение - лучшее учение"],
        answer: "книга",
    },
    {
        pk: 3,
        text: "Жил я посреди двора,\nГде играет детвора,\nНо от солнечных лучей\nПревратился я в ручей.",
        hints: ["У меня морковка вместо носа", "Я сделан из снега"],
        answer: "снеговик",
    },
    {
        pk: 4,
        text: "После осени пришла.\nИ сугробы намела.",
        hints: ["Когда я прихожу, становится холодно", "Когда я прихожу, реки покрываются льдом"],
        answer: "зима",
    },
    {
        pk: 5,
        text: "Белая звездочка с неба упала,\nМне на ладошку легла и пропала.",
        hints: ["Я сделана из воды", "Зимой нас очень много"],
        answer: "снежинка",
    },
];

function randRange(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

const goGame3 = () => {
    
    let riddleIndex = randRange(0, riddles.length);

    let riddleAndHints = [
        `Отгадай загадку:\n\n${riddles[riddleIndex].text}`,
        ...riddles[riddleIndex].hints.map(value => `Неправильно.\nПодсказка:\n\n${value}`),
    ];

    for (let message of riddleAndHints) {

        let userAnswer = prompt(message);

        if (typeof userAnswer === "string") {

            userAnswer = userAnswer.trim().toLowerCase();

            if (riddles[riddleIndex].answer === userAnswer) {
                alert("Правильно! Ты победил!");
                return;
            }
        }
    }
    alert("Увы и ах! Ты проиграл!");
}