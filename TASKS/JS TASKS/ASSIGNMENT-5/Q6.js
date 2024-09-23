function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

function delayedLogSequence(messages, delay) {
    return messages.reduce((promise, message) => {
        return promise.then(() => {
            console.log(message);
            return wait(delay);
        });
    }, Promise.resolve()); 
}

const messages = ['Hello!', 'How are you?', 'This is a delayed log sequence.', 'Goodbye!'];
const delay = 1000; 

delayedLogSequence(messages, delay);
