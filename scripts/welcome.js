let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);

let welcomeMessage = document.createElement('h3');

let loggedInUserData = {};

for (let user of usersData) {
    if (user.sessionToken === sessionToken) {
        loggedInUserData = user;
    }
}

welcomeMessage.innerHTML = `Welcome ${loggedInUserData.firstName} ${loggedInUserData.lastName}`;
welcomeMessage.style.color = 'green';
welcomeMessage.style.textAlign = 'center'
welcomeMessage.style.fontSize = '100px'

document.body.appendChild(welcomeMessage);