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

    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);

    let userExists = false;

    let loginForm = document.querySelector('form');

    for (let user = 0; user < userData.length; user++) {
        if (userData[user].username === username && userData[user].password === password) {
            let sessionToken = generateString(36);
            sessionStorage.setItem('sessionToken', sessionToken);
            userData[user].sessionToken = sessionToken;
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

    localStorage.setItem('userData', JSON.stringify(userData));
}