// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        playKey('clap', 'A');
    } else if (event.keyCode == 83) { // "s"
        playKey('hihat', 'S')
    } else if (event.keyCode == 68) { // "d"
    playKey('kick', 'D')
    } else if (event.keyCode == 70) { // "f"
    playKey('openhat', 'F')
    } else if (event.keyCode == 71) { // "g"
    playKey('boom', 'G')
    } else if (event.keyCode == 72) { // "h"
    playKey('ride', 'H')
    } else if (event.keyCode == 74) { // "j"
    playKey('snare', 'J')
    } else if (event.keyCode == 75) { // "k"
    playKey('tom', 'K')
    } else if (event.keyCode == 76) { // "l"
    playKey('tink', 'L')

    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function playKey(name, key) {
    let audio = document.getElementById(name);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(key).classList.add("playing");
}