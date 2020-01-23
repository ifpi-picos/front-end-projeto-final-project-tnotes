const mostrar = document.querySelector(".success");
const mostarErr = document.querySelector('.error');
const cadastrar = document.querySelector('#enviar')

cadastrar.addEventListener('click', () => {
    const url = 'https://git.heroku.com/back-end-project-tnotes.git/api/users'
    const user = {
        name: '',
        email: '',
        password: '',
    };
    user.name = document.querySelector('#name').value;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector("#senha").value;

    console.log(user)
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
                mostrar.classList.add('mostrar');
                setTimeout(() => {
                    mostrar.classList.remove('mostrar')
                }, 2000)
            } else {
                console.log('cheguei');
                mostarErr.classList.add('mostrar');
                setTimeout(() => {
                    mostarErr.classList.remove('mostrar')
                }, 2000)
            }

        })

})