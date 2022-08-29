
const predictor = (myColor, n) => {
    myColor = myColor.toUpperCase();
    let start = 0;
    let end = 14;
    for (let i = 0; i < n; i++) {
        let ball = Math.floor(Math.random() * (end - start + 1)) + start;
        document.write(ball + '</br>');
    }
}

predictor('red', 11);