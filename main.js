const catalogo = [{
    id: 1,
    nome: "Camisa preta",
    marca: "Makenji",
    preco: 40,
    nomeArquivoImagem: '167528010_01.png'
 },
 {
    id: 2,
    nome: "Camisa Branca",
    marca: "Makenji",
    preco: 45,
    nomeArquivoImagem: '167528003_01.png'
 },
 {
    id: 3,
    nome: "Camisa Cinza",
    marca: "Makenji",
    preco: 47,
    nomeArquivoImagem: '169678249_01.png'
 },
 {
    id: 4,
    nome: "Short Doll Pijama Feminino ",
    marca: "Tricae",
    preco: 70,
    nomeArquivoImagem: 'Linha-Noite-Short-Doll-Pijama.webp'
 }
]

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `
    <div id="card-produto-1">
        <img class="img" src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" alt="Camisa preta">
        <p>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button>Adicionar ao carrinho</button>
    </div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto;

}

