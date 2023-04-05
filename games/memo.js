let subwordsMemo = [];
let wordMemoPos = [];
let wordMemoSize = [];
let nwordsMemo = 5;
let targetMemo = 0;
let memoTimer = 15;
let memoBeginTime = 0;
let said = false;

function displayMemo() {
    let frac = map(memoTimer, 15, 9, 3, 4);
    background(255);
    for (let i = 0; i < nwordsMemo; i++) {

        if(millis() - currentTime > memoTimer/frac + i * (memoTimer/frac * 1000)/ nwordsMemo && millis() - currentTime < memoTimer/frac + (i + 1) * (memoTimer/frac * 1000)/ nwordsMemo) {
            textSize(wordMemoSize[i]);
            fill(0);
            drawingContext.filter = 'blur('+str (timerBlur)+ 'px)';
            text(subwordsMemo[i], wordMemoPos[i].x , wordMemoPos[i].y);
        }
        
    }
    if (millis() - currentTime > memoTimer/frac + (nwordsMemo) * (memoTimer/frac * 1000)/ nwordsMemo && !said) {
        initVoiceMemo(subwordsMemo[targetMemo]);  
        said = true;
    }
    if (millis() - currentTime > memoTimer/frac + (nwordsMemo) * (memoTimer/frac * 1000)/ nwordsMemo) {
        textSize(30);
        fill(0);
        text(subwordsMemo[targetMemo], width/2, 50);
    }
}

function resetMemo() {
    subwordsMemo = getRandomSubarray(words, nwordsMemo);
    targetMemo = floor(random(nwordsMemo));
    said = false;
    wordMemoPos = [];
    wordMemoSize = [];

    for (let i = 0; i < subwordsMemo.length; i++) {
        wordMemoSize.push(random(50, textS));
        let bbox = font.textBounds(subwordsMemo[i], 0, 0, wordMemoSize[i]);  
        let position = createVector(random(width-bbox.w), random(100, height-bbox.h/2));
        while (isTooClose(position, wordMemoPos)) {
            position = createVector(random(width-bbox.w), random(100, height-bbox.h/2));
        }
        wordMemoPos.push(position);
    }
}

function clickedMemo() {
    if (said) {
        let bbox = font.textBounds(subwordsMemo[targetMemo], wordMemoPos[targetMemo].x, wordMemoPos[targetMemo].y, wordMemoSize[targetMemo]);
        if (pointRectCollision(mouseX, mouseY, bbox.x, bbox.y, bbox.w, bbox.h)) {
            score++;
            state = (floor(random(1, 4)));
            init();
        }
    }
}