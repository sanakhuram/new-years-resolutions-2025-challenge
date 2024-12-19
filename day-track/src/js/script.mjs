const dayButton = document.getElementById('dayButton');
const eveningButton = document.getElementById('eveningButton');
const nightButton = document.getElementById('nightButton');

function changeTheme(theme) {
    const body = document.body;
    body.classList.remove('day-mode', 'evening-mode', 'night-mode');
    body.classList.add(theme);
}

dayButton.addEventListener('click', () => changeTheme('day-mode'));
eveningButton.addEventListener('click', () => changeTheme('evening-mode'));
nightButton.addEventListener('click', () => changeTheme('night-mode'));

function setDefaultTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
        changeTheme('day-mode');
    } else if (currentHour >= 12 && currentHour < 18) {
        changeTheme('evening-mode');
    } else {
        changeTheme('night-mode');
    }
}

function generateStars() {
    const numberOfStars = 100;
    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const top = getRandomValue(0, 100);
        const left = getRandomValue(0, 100);
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;

        const delay = getRandomValue(0, 5);
        const duration = getRandomValue(2, 4);
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }
}

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

window.addEventListener('DOMContentLoaded', () => {
    setDefaultTheme();
    generateStars();
});
