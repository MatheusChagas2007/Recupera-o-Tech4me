const url = new URLSearchParams(window.location.search);
const id = url.get('id');

const divDetalhes = document.getElementById("detalhes");

const exibirProduto = async () =>{
    const promise = await fetch("https://tech4japa.fly.dev/produtos/"+id);
    const produto = await promise.json();

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = produto.imagem;
    const titulo = document.createElement('h1');
    titulo.innerText = produto.produto;
    const descricao = document.createElement('p');
    descricao.innerText = produto.descricao;

    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(descricao);

    divDetalhes.appendChild(div);
}

exibirProduto();

/*formulario*/
document.getElementById("promotionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const aceito = document.getElementById("aceito").checked;

    if (!email) {
        const emailPrompt = prompt("Por favor, preencha o e-mail:");
        if (!emailPrompt) {
            alert("Erro: O e-mail é obrigatório!");
            return; 
        }
        document.getElementById("email").value = emailPrompt;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Erro: O e-mail não é válido.");
        return; 
    }

    if (!aceito) {
        document.getElementById("aceito").style.backgroundColor = "red";
        alert("Você precisa aceitar os termos de uso");
        return; 
    } else {
        document.getElementById("aceito").style.backgroundColor = "";
    }

    const successMessage = `E-mail "${email}" cadastrado com sucesso!`;
    alert(successMessage);
});