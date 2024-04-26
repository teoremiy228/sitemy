let currentState = 0;
const scenarios = [
    {
        text: "Вы просыпаетесь в темной комнате. Куда пойдете?",
        choices: [
            "Открыть дверь",
            "Остаться на месте"
        ],
        next: [1, 2]
    },
    {
        text: "За дверью был светлый коридор и выход на улицу. Вы свободны!",
        choices: [
            "Начать заново",
            ""
        ],
        next: [0, 0]
    },
    {
        text: "Вы решили остаться. В комнате становится всё темнее...",
        choices: [
            "Начать заново",
            ""
        ],
        next: [0, 0]
    }
];

// Функция для вывода текущего состояния игры
function displayState() {
    const scenario = scenarios[currentState];
    document.getElementById('story').innerText = scenario.text;
    document.getElementById('choice1').innerText = scenario.choices[0];
    document.getElementById('choice2').innerText = scenario.choices[1];

    // Скрываем вторую кнопку, если второй выбор пуст
    document.getElementById('choice2').style.display = scenario.choices[1] ? 'block' : 'none';
}
function makeChoice(choice) {
    currentState = scenarios[currentState].next[choice - 1];
    displayState();
}
window.onload = function() {
    displayState();
};
