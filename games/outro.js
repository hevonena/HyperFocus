function outro() {
    drawingContext.filter = 'blur('+str (timerBlur)+ 'px)';
    if (timerBlur < 0) timerBlur = 0;
    timerBlur -= 0.5;
    background(0);
    fill(255);
    textSize(40);
    text("Lost Focus", width / 2, height / 2);
    text("Score: " + score, width / 2, height / 2 + 50);
    textSize(100);
    text("REFOCUS", 700, 4*height/5);
    
}

function clickOutro() {
    let bbox = font.textBounds("REFOCUS", 700, 4*height/5, 100);

    if (pointRectCollision(mouseX, mouseY, bbox.x, bbox.y, bbox.w, bbox.h)) {
        score = 0;
        currentTime = 0;
        timer = 0;
        timerBlur = 0;
        focusTimer = 15;
        voiceFocusRate = 0.5;
        active = false;
        swooshTimer = 10;
        userText = '';
        
        state = (floor(random(1, 4)));
        init();
    }

}