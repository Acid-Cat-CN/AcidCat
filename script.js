function drawCard() {
    const cards = [
        "🌟 你已准备好迎接新的挑战",
        "💫 你的能量正在觉醒",
        "🌿 放下焦虑，相信宇宙的安排",
        "🔥 你即将迎来重大突破",
        "🌊 让情绪自由流动，你会找到答案",
        "✨ 相信你的直觉，它会指引你",
        "🌞 你是光，照亮自己和他人"
    ];
    
    const randomIndex = Math.floor(Math.random() * cards.length);
    const cardElement = document.getElementById("card");
    cardElement.innerText = cards[randomIndex];
    cardElement.classList.remove("hidden");
}
