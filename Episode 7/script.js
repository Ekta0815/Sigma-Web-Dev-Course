const messages = [
    "📚 Learn today, lead tomorrow.",
    "✨ Small steps every day lead to big success.",
    "🎓 Your future starts with today's effort.",
    "☕ Study hard, dream big.",
    "🚀 Knowledge is your superpower.",
    "😄 Keep calm and finish your assignments!"
];

let index = 0;

function changeText() {
    document.getElementById("changing-text").textContent = messages[index];
    index = (index + 1) % messages.length;
}

changeText();
setInterval(changeText, 3000);