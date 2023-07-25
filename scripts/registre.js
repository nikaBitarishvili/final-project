


function handleRegistration() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
    }

    if(oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));

    }
 
}




const form = document.querySelector('form');
const userChoice = document.querySelector('#password');
const userEmail = document.querySelector('#email');
const userfirstName = document.querySelector('#firstName')
const userlastName = document.querySelector('#lastName')
const userusername = document.querySelector('#username')


form.addEventListener('submit', (event) => {
    event.preventDefault();

   
});

function passwordChecker() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password = userChoice.value;

    let result = document.createElement('p');

    if (pattern.test(password)) {
        result.style.color = 'green';
        result.style.fontSize = '50px';
        result.style.textAlign = 'center';
        result.innerHTML = 'Password is valid';
    } else {
        result.style.color = 'red';
        result.style.fontSize = '50px';
        result.style.textAlign = 'center';
        result.innerHTML = 'Password is invalid';
    }

    document.body.appendChild(result);
}

function emailChecker() {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    const email = userEmail.value;

    let result = document.createElement('p');

    if (pattern.test(email)) {
        result.style.color = 'green';
        result.style.fontSize = '50px';
        result.style.textAlign = 'center';
        result.innerHTML = 'email is valid';
    } else {
        result.style.color = 'red';
        result.style.fontSize = '50px';
        result.style.textAlign = 'center';
        result.innerHTML = 'email is invalid';
    }

    document.body.appendChild(result);
}


