const eStringSound = new Audio("./assets/audio/E_string_pluck.mp3");

const strings = document.querySelectorAll('.string');
const startButton = document.getElementById('start_button');

strings.forEach(string => {
    string.addEventListener('mouseenter', pluckString);
});

startButton.addEventListener('click', showBass);

function showBass() {
    alert("Thanks for clicking!");
}


function pluckString(event) {
    const string = event.target;
    string.style.animation = 'vibrate 0.2s ease-in-out';
    eStringSound.play();
    setTimeout(() => {
        string.style.animation = '';
    }, 200);
}