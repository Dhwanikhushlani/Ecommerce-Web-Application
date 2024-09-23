function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

async function delayedLogSequence(messages, delay) {
    for (const message of messages) {
        console.log(message);
        await wait(delay); 
    }
}

const messages = ['Hello!', 'How are you?', 'This is a delayed log sequence.', 'Goodbye!'];
const delay = 1000;

delayedLogSequence(messages, delay);
