const tarefa = document.querySelector('#myBtn2');
const divPostagens = document.querySelector('#mostras');
tarefa.addEventListener('click', () => {
    const url = 'https://back-end-project-tnotes.herokuapp.com/api/tarefas';
    const option = {
        method: 'POST',
        body: JSON.stringify({
            tarefa: document.querySelector('#idModalTarefa').value,
            descricao: document.querySelector('#idModalDescricao').value,
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
                    tarefasget(value)
                });
            }
        })
}


function tarefasget(dados) {
    dados.forEach((postagem) => {
        const html =
            `<div class="caixaDeTarefas">
                <p id="idTarefa"> Titulo: ${postagem.tarefa}</p>
                <p id="idDescricao"> Descrição: ${postagem.descricao}</p>
            </div>`;
        divPostagens.innerHTML = divPostagens.innerHTML + html;
    });
}