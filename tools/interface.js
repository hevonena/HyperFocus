function click() {
    switch (state) {
        case 0:
            clickIntro();
            break;
        case 1:
            clickedFocus();
            break;
        case 2:
            
            break;
        case 3:
            clickedMemo();
            break;
        case 4:
            clickOutro();
            break;
        default:
            break;
    }
}

function update() {
    switch (state) {
        case 0:
            intro();
            break;
        case 1:
            
            break;
        case 2:
            swooshUpdate();
            break;
        case 3:
            
            break;
        case 4:
           
            break;
        default:
            break;
    }
}

function display() {
    switch (state) {
        case 0:
            
            break;
        case 1:
            displayFocus();
            UI();
            break;
        case 2:
            swooshDisplay();
            UI();
            break;
        case 3:
            displayMemo();
            UI();
            break;
        case 4:
            outro();
            break;
        default:
            break;
    }
}

function init() {
    gameProg();
    switch (state) {
        case 0:
            initVoice();
            break;
        case 1:
            resetFocus();
            break;
        case 2:
            initSwoosh();
            break;
        case 3:
            resetMemo();
            break;
        default:
            break;
    }
}

function type() {
    switch (state) {
        case 1:

            break;
        case 2:
            listenSwoosh();
        default:
            break;
    }
}

function correct() {
    switch (state) {
        case 1:

            break;
        case 2:
            correctSwoosh();
        default:
            break;
    }
}