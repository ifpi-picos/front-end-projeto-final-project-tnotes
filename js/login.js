const login = document.querySelector('#login');

login.addEventListener('click', () => {
    const url = 'https://back-end-project-tnotes.herokuapp.com/api/users/login';
    // const url = 'http://localhost:3000/api/users/login'

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
            if(response.status === 400){
                response.json().then(value =>{
                    const errorBody = value.erro; 
                    errorBody.forEach(element => {
                        alert(element.msg)
                    });
                })
            } else if(response.status === 200){
                response.json().then(value =>{
                    console.log(value)
                    alert(value.msg)
                    window.location.href = '../views/dashboard.html';
                    localStorage.setItem("usuarioLogado", JSON.stringify(value.usuario));
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
});