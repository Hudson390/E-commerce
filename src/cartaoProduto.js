import { catalogo } from './utilidades.js';
import { adicionarCarrinho } from './menuCarrinho.js';

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `
        <div class="flex flex-col p-2 shadow-xl shadow-slate-400 rounded-lg justify-between border-solid w-48 m-2 group" id="card-produto-${produtoCatalogo.id}">
            <img 
            class="group-hover:scale-110 duration-300 my-3 rounded-lg h-48 w-48 object-contain" 
            src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" 
            alt="Camisa preta">
            <p class="text-sm">${produtoCatalogo.marca}</p>
            <p class="text-sm">${produtoCatalogo.nome}</p>
            <p class="text-sm">$${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>`;
    
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', adicionarCarrinho.bind(null, produtoCatalogo.id));
    }
}
