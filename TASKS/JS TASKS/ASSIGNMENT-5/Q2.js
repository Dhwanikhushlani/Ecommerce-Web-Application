function countdown(startNumber) {
    let currentNumber = startNumber;

    const intervalId = setInterval(() => {
        console.log(currentNumber);
        currentNumber--;

        if (currentNumber < 0) {
            clearInterval(intervalId);
            console.log('Countdown finished!');
        }
    }, 1000);
}

countdown(10);
