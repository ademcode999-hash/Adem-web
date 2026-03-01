//🍉💥🔫
window.onblur = () => {
    document.title = "Mohamed Adem Mosbah 💥🔫";
}

window.onfocus = () => {
    document.title = "Mohamed Adem Mosbah";
}

const watermelonBtn = document.querySelector(".watermelon");
const jsConfetti = new JSConfetti;

watermelonBtn.addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['🍉'],
        emojiSize: 80,
        confettiNumber: 15,
    });
});