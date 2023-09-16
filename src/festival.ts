setTimeout(() => {
    let button = document.getElementById("chat-bot-launcher-button");

    while (!button)
        button = document.getElementById("chat-bot-launcher-button");

    button.click();
}, 25000)

export {}