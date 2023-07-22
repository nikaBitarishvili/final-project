const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-_.';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        console.log(Math.floor(Math.random() * charactersLength));
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function handleLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    let loginForm = document.querySelector('form');

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(36);
            sessionStorage.setItem('sessionToken', sessionToken);
            usersData[user].sessionToken = sessionToken;
            userExists = true;
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    if (userExists === false) {
        window.location.href = 'error.html';
    }else {
        window.location.href = 'welcome.html';
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}