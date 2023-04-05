var myVoice = new p5.Speech();
var myVoiceSwoosh = new p5.Speech(); // new P5.Speech object
var myVoiceFocus = new p5.Speech();
var myVoiceMemo = new p5.Speech();
let voiceFocusRate = 0.5;


function initVoice() {
    myVoice.setRate(1);
    myVoice.setPitch(1);
    myVoice.setVolume(1);
}

function initVoiceFocus(hi) {
    myVoiceFocus.cancel();
    myVoiceFocus.setRate(voiceFocusRate);
    myVoiceFocus.setPitch(6);
    myVoiceFocus.setVolume(1);
    myVoiceFocus.speak(hi);
}

function initVoiceSwoosh(hi) {
    myVoiceSwoosh.cancel();
    myVoiceSwoosh.setRate(0.5);
    myVoiceSwoosh.setPitch(6);
    myVoiceSwoosh.setVolume(1);
    myVoiceSwoosh.speak(hi);
}

function initVoiceMemo(hi) {
    myVoiceMemo.cancel();
    myVoiceMemo.setRate(0.5);
    myVoiceMemo.setPitch(1);
    myVoiceMemo.setVolume(1);
    myVoiceMemo.speak(hi);
}

function newVoice(hi) {
    myVoice.cancel();
    myVoice.speak(hi);
}
