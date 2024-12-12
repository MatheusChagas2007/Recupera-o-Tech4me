const buscarProdutos = async () => {
    const promise = await fetch("https://tech4japa.fly.dev/produtos");
    const response = await promise.json();

    const meusProdutos = response.filter(produto => produto.restaurante == "Resutorant");

    meusProdutos.forEach(produto => {
        criarProduto(produto);
    });
}

const divProdutos = document.getElementById("produtos");

const criarProduto = (produto) => {
    const div = document.createElement('div');
    div.classList.add('produto');  
    
    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.produto;  
    
    const titulo = document.createElement('h1');
    titulo.innerText = produto.produto;
    
    const botao = document.createElement('button');
    botao.innerText = "Ver detalhes";
    
    const link = document.createElement('a');
    link.href = './detalhes.html?id=' + produto.id;
    link.appendChild(botao);
    
    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(link);

    divProdutos.appendChild(div);
}

buscarProdutos();