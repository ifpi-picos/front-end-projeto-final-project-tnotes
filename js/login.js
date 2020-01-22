const login = document.querySelector('#login');

login.addEventListener('click', () => {
    const url = 'http://localhost:3000/api/users/login';

    const user = {
        email: '',
        password: ''
    }
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#senha').value;

    const option = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    fetch(url, option)
        .then((response) => {
            if (response.ok) {
                window.location.href = "../views/dashboard.html";
            } else {
                console.log('err');
            }

        })

});