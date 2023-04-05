let blurIntro = 0;
let blurIntro2 = 40;

function intro() {
    background(255);
    fill(0);
    textSize(200);
    push();
    let t1 = millis();
    let anim1 = map(millis(), 0, t1 +400, -400, width/2);
    translate(anim1, height/2);
    drawingContext.filter = 'blur('+str (blurIntro + 5)+ 'px)';
    text("HYPER", 0, -100);
    pop();
    push();
    let t2 = millis();
    let anim2 = map(millis(), 0, t2+200, width + 1000, 0);
    translate(anim2, height/2);
    drawingContext.filter = 'blur('+str (blurIntro)+ 'px)';
    text("FOCUS", 0, 100);
    
    pop();
    if (anim2 < 200) {
        blurIntro += 0.5;
    }
    if (blurIntro > 40) {
        background(255);
        drawingContext.filter = 'blur('+str (blurIntro2)+ 'px)';
        if (blurIntro2 < 0) blurIntro2 = 0;
        blurIntro2 -= 10;
        textSize(100);
        push();
        translate(100, height/5);
        text("FOCUS", 0, 0);
        translate(0, height/5);
        text("FIND", 0, 0);
        translate(0, height/5);
        text("REMEMBER", 0, 0);
        translate(600, height/5);
        text("ENTER", 0, 0);
        pop();
    }
}

function clickIntro() {
    let bbox = font.textBounds("ENTER", 700, 4*height/5, 100);
    if (pointRectCollision(mouseX, mouseY, bbox.x, bbox.y, bbox.w, bbox.h)) {
        background(255);
        state = (floor(random(1, 4)));
        init();
    }

}

