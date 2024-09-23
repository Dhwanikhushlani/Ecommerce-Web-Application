function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;

    return wait(randomDelay).then(() => {
        console.log(message);
    });
}

randomDelayMessage('This message is displayed after a random delay!');
