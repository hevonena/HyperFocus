let swooshWord;
let swooshSpeed = 40;
let swooshPos;
let swooshSize;
let active = false;
let swooshBox;
let userText = '';
let directionUpdate = 0;
let swooshTimer = 10;


function swooshUpdate() {
    if (active) {
        x = swooshPos.x;
        y = swooshPos.y;
        if (direction == 0) { // Move right
            x += swooshSpeed;
            if (x >= width) {
                active = false;
            }
        } else if (direction == 1) { // Move left
            x -= swooshSpeed;
            if (x <= -swooshBox.w) {
                active = false;
            }
        } else if (direction == 2) { // Move down
            y += swooshSpeed;
            if (y >= height+swooshBox.h) {
                active = false;
            }
        } else if (direction == 3) { // Move up
            y -= swooshSpeed;
            if (y <= -swooshBox.h) {
                active = false;
            }
        }
        swooshPos.set(x, y);
    }
}

function swooshDisplay() {
    background(255);
    if (active) {
        textSize(swooshSize);
        fill(0);
        drawingContext.filter = 'blur('+str (swooshSpeed/30+timerBlur)+ 'px)';
        text(swooshWord, swooshPos.x, swooshPos.y);
        drawingContext.filter = 'blur('+str (timerBlur)+ 'px)';
    }
    fill(0);
    textSize(100);
    text(userText, 100, height/3);

    if (userText == swooshWord) {
        score++;
        userText = '';
        state = (floor(random(1, 4)));
        init();
    }
}

function initSwoosh() {
    swooshWord = words[round(random(words.length-1))];
    //initVoiceSwoosh(swooshWord);
    swooshSize = random(50, textS);
    swooshBox = font.textBounds(swooshWord, 0, 0, swooshSize);
    swooshPos = createVector(0, 0);
    let boxW = swooshBox.w;
    let boxH = swooshBox.h;
    direction = Math.floor(Math.random() * 4); // Random direction

    if (direction == 0){
        swooshPos.set(-boxW, height/2);
    }
    if (direction == 1) { 
        swooshPos.set(width + boxW, height/2);
    } 
    if (direction == 2) { 
        swooshPos.set(width/2-boxW/2, -boxH);
    } 
    if (direction == 3) { 
        swooshPos.set(width/2-boxW/2, height + boxH);
    } 
    
    active = true;
}

function listenSwoosh() {
    // display only letters, numbers and space
    if (/\w|\s/.test(key)) {
        userText += key;
    }
}

function correctSwoosh() {
    if (keyCode === BACKSPACE || keyCode === DELETE) {
        // delete last character from userText
        userText = userText.slice(0, -1);
    }
}