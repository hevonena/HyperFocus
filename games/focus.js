let wordPos = [];
let wordSize = [];
let subwords = [];
let textS = 200;
let target;
let nwords = 20;
let amounts = [];
let focusTimer = 15;
let noisers = [];

function displayFocus() {
    background(255);
    for (let i = 0; i < wordPos.length; i++) {
        let bbox = font.textBounds(subwords[i], wordPos[i].x, wordPos[i].y, wordSize[i]);  
        let amount = map(distPointRect(mouseX, mouseY, bbox.x, bbox.y, bbox.w, bbox.h), 0, 100, 0, 15);
        amounts.push(amount);
        if (amount < 0) amount = 0;
        drawingContext.filter = 'blur('+str (amount+timerBlur)+ 'px)';
        textSize(wordSize[i]);
        fill(0);
        let xNoise = noise(noisers[i] * 0.1) * 10 - 5;
        let yNoise = noise(noisers[i] * 0.1 + 100) * 10 - 5;
        wordPos[i].x += xNoise;
        wordPos[i].y += yNoise;
        wordPos[i].x = constrain(wordPos[i].x, 0, width-bbox.w);
        wordPos[i].y = constrain(wordPos[i].y, bbox.h, height-bbox.h/2);
        text(subwords[i], wordPos[i].x , wordPos[i].y);
        noisers[i] += 0.1;
    }
    drawingContext.filter = 'blur('+str (timerBlur)+ 'px)';
    textSize(30);
    fill(0);
    text(subwords[target], width/2, 50);
}


function resetFocus() {
    subwords = getRandomSubarray(words, nwords);
    target = round(random(subwords.length-1));
    initVoiceFocus(subwords[target]);
    wordPos = [];
    wordSize = [];
    
    for (let i = 0; i < subwords.length; i++) {
        wordSize.push(random(50, textS));
        noisers.push(random(100));
        let bbox = font.textBounds(subwords[i], 0, 0, wordSize[i]);  
        let position = createVector(random(width-bbox.w), random(100, height-bbox.h/2));
        while (isTooClose(position, wordPos)) {
            position = createVector(random(width-bbox.w), random(100, height-bbox.h/2));
        }
        wordPos.push(position);
    }
}


function clickedFocus() {
    let bbox = font.textBounds(subwords[target], wordPos[target].x, wordPos[target].y, wordSize[target]);
    if (pointRectCollision(mouseX, mouseY, bbox.x, bbox.y, bbox.w, bbox.h)) {
        score++;
        state = (floor(random(1, 4)));
        init();
    }
}
