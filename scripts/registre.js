


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
        localStorage.setItem('userData', JSON.stringify(oldUsersData));

    }
 
}