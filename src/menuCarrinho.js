import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

function abriCarrinho() {
    document.getElementById('carrinho').classList.add('right-[0px]');
    document.getElementById('carrinho').classList.remove('right-[360px]');
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

export function iniciarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abriCarrinho);
}


function removerProdutoCarrinho(idProduto) {
    delete idsProdutosCarrinhoComQuantidade[idProduto];
    salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinhos();
    
}

function incrementarQuantidade(idProduto) {
    idsProdutosCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformaçãoQuantidade(idProduto);
}

function decrementarQuantidade(idProduto) {
    if (idsProdutosCarrinhoComQuantidade[idProduto] === 1) {
        removerProdutoCarrinho(idProduto);
        return;
    }
    idsProdutosCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformaçãoQuantidade(idProduto);
}

export function atualizarInformaçãoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto];
    
}

function desenharProdutoCarrinho(idProduto) {
    const produto = catalogo.find(produto => produto.id === idProduto);
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    const elementoArticle = document.createElement('article');
    const articleClasses = [
        'flex',
        'bg-slate-100',
        'rounded-lg',
        'p-1',
        'relative'
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `
        <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
            <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
        </button>
        <img src="./assets/img/${produto.nomeArquivoImagem}" 
        alt="Carrinho: ${produto.nome}" 
        class="h-24 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-slate-400 text-xs">Tamano: M</p>
            <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <button id="decrementar-produto-${produto.id}">-</button>
            <p id="quantidade-${produto.id}" class="ml-2">${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
            <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>

        </div>`;
  

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementarQuantidade(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementarQuantidade(produto.id));
  document.getElementById(`remover-item-${produto.id}`).addEventListener('click',() => removerProdutoCarrinho(produto.id)); 
}

export function renderizarProdutosCarrinhos(){
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    containerProdutosCarrinho.innerHTML = '';
    for (const idProduto in idsProdutosCarrinhoComQuantidade){
        desenharProdutoCarrinho(idProduto);
    }
}

export function adicionarCarrinho(idProduto){
    if (idProduto in idsProdutosCarrinhoComQuantidade){
        incrementarQuantidade(idProduto);
        return;
    }
    idsProdutosCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    desenharProdutoCarrinho(idProduto);

}

export function atualizarPrecoCarrinho(){
    const precoTotal = document.getElementById('preco-total');
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade){
        precoTotalCarrinho += catalogo.find(produto => produto.id === idProdutoNoCarrinho).preco * idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho];
    }
    precoTotal.innerText = `Total: $${precoTotalCarrinho}`;
}