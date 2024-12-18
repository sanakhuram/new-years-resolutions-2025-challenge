// Select buttons
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

window.addEventListener('DOMContentLoaded', setDefaultTheme);
