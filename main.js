let button = document.querySelector('button');
let img = document.querySelector('img');

button.addEventListener('click', () => {
    if(img.getAttribute('src') == 'img/off.png'){
        img.src = 'img/on.png';
        button.innerHTML = 'Off';
        playOn();
    } else {
        img.src = 'img/off.png';
        button.innerHTML = 'On';
        playOff();
    }
});



// Play audio
let playOn = () => new Audio("audio/on.mp3").play();
let playOff = () => new Audio("audio/off.mp3").play();