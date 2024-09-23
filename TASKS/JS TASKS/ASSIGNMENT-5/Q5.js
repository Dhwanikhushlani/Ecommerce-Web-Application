function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

function countdown(startNumber) {
    return new Promise(async (resolve) => {
        let currentNumber = startNumber;

        while (currentNumber >= 0) {
            console.log(currentNumber);
            await wait(1000); 
            currentNumber--;
        }

        console.log('Countdown finished!');
        resolve();
    });
}

countdown(10).then(() => {
    console.log('The countdown has completed!');
});
