let currentTime = 0;
let timer = 0;
let timerBlur = 0;

function UI() {
    let m = 50; 
    switch (state) {
        case 1:
            timer = focusTimer;
            break;
        case 2:
            timer = swooshTimer;
            break;
        case 3:
            timer = memoTimer;
            break;
        default:
            break;
    }
    timer += (-millis() + currentTime)/1000;
    if (timer <= 0) {
        state = 4;
    }
    let timerInt = ~~timer;
    textSize(30);
    fill(0);
    if (timer < 5) {
        timerBlur = map(timer, 5, 0, 0, 10);
    } else {
        timerBlur = 0;
    }
    drawingContext.filter = 'blur('+str (timerBlur)+ 'px)';
    text(timerInt, 4*m/5, 6*m/5);
    text(score, width - 4*m/5, 6*m/5);
}

function gameProg() {
    //focus
    nwords = floor(map(score, 0, 100, 4, 40));
    voiceFocusRate = map(score, 0, 100, 0.2, 2.5);
    focusTimer = map(score, 0, 100, 10, 5);
    // swoosh
    swooshSpeed = map(score, 0, 100, 15, 100);
    swooshTimer = map(score, 0, 100, 15, 4);
    // memo
    nwordsMemo = floor(map(score, 0, 100, 3, 11));
    memoTimer = map(score, 0, 100, 15, 9);

    currentTime = millis();


}