const eStringSound = new Audio("./assets/audio/E_string_pluck.mp3");
const aStringSound = new Audio("./assets/audio/A_string_pluck.mp3");
const dStringSound = new Audio("./assets/audio/D_string_pluck.mp3");
const gStringSound = new Audio("./assets/audio/G_string_pluck.mp3");


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
    console.log(event.target.id);
    switch (event.target.id) {
        case "string1":
            eStringSound.play();
            break;
        case "string2":
            aStringSound.play();
            break;
        case "string3":
            dStringSound.play();
            break;
        case "string4":
            gStringSound.play();
            break;
    }
    setTimeout(() => {
        string.style.animation = '';
    }, 200);
}