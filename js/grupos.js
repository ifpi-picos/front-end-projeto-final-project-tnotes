const btnCheck = document.querySelector('#idBtnCheck');
const divGrupo = document.querySelector('#idGp');
btnCheck.addEventListener('click', () => {
    const url = 'https://back-end-project-tnotes.herokuapp.com/api/tarefas';
    const option = {
        method: 'POST',
        body: JSON.stringify({
            inputGrupo = document.querySelector('#idAddGrupo').value,
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    fetch(url, option)
        .then(response => {
            console.log(response);
            initPage()
        })
});

window.onload = initPage;

function initPage() {
    const url = 'https://back-end-project-tnotes.herokuapp.com/api/tarefas';
    const option = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    fetch(url, option)
        .then(response => {
            if (response.status === 400) {} else if (response.status === 200) {
                response.json().then(value => {
                    console.log(value)
                    btnCheckget(value)
                });
            }
        })
}

function btnCheckget(dados) {
    dados.forEach((postagem) => {
        const html =
            `<div>
                <p> ${postagem.inputGrupo} </p>
            </div>`;
        divGrupo.innerHTML += html;
    });
}