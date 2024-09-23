function countdown(startNumber, callback) {
    let currentNumber = startNumber;

    const intervalId = setInterval(() => {
        console.log(currentNumber);
        currentNumber--;

        if (currentNumber < 0) {
            clearInterval(intervalId);
            console.log('Countdown finished!');
            if (typeof callback === 'function') {
                callback(); 
            }
        }
    }, 1000);
}

countdown(10, () => {
    console.log('The countdown has completed!');
});
