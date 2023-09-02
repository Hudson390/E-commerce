export const catalogo = [{
    id: "1",
    nome: "Camisa preta",
    marca: "Makenji",
    preco: 40,
    nomeArquivoImagem: '167528010_01.png',
    feminino: false
 },
 {
    id: "2",
    nome: "Camisa Branca",
    marca: "Makenji",
    preco: 45,
    nomeArquivoImagem: '167528003_01.png',
    feminino: false
 },
 {
    id: "3",
    nome: "Camisa Cinza",
    marca: "Makenji",
    preco: 47,
    nomeArquivoImagem: '169678249_01.png',
    feminino: false
 },
 {
    id: "4",
    nome: "Short Doll Pijama Feminino",
    marca: "Tricae",
    preco: 70,
    nomeArquivoImagem: 'Linha-Noite-Short-Doll-Pijama.jpg',
    feminino: true
 },
 {
   id: "5",
   nome: "Camiseta Trail Preta",
   marca: "NIKE",
   preco: 80,
   nomeArquivoImagem: 'Nike-Camiseta-Preta.webp',
   feminino: false
},
{
   id: "6",
   nome: "Camiseta Sportwear",
   marca: "NIKE",
   preco: 100,
   nomeArquivoImagem: 'CAMISETA NIKE SPORTWEAR.webp',
   feminino: false
},
{
   id: "7",
   nome: "Vestido Jeans Longo Feminino Fenda Manga Curta",
   marca: "Marisa",
   preco: 85,
   nomeArquivoImagem: 'shopping.webp',
   feminino: true
},
{
   id: "8",   
   nome: "Vestido Poá Rosê com Babado e Faixa",
   marca: "Posthaus",
   preco: 45,
   nomeArquivoImagem: 'vestido.webp',
   feminino: true
}

];

export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
}


export function lerLocalStorage(chave){
   return JSON.parse(localStorage.getItem(chave));
}

export function desenharProdutoCarrinhoSimples(idProduto,idContainerHtml, quantidadeProduto) {
   const produto = catalogo.find(produto => produto.id === idProduto);
   const containerProdutosCarrinho = document.getElementById(idContainerHtml);
   
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
       
       <img src="./assets/img/${produto.nomeArquivoImagem}" 
       alt="Carrinho: ${produto.nome}" 
       class="h-24 rounded-lg">
       <div class="p-2 flex flex-col justify-between">
           <p class="text-slate-900 text-sm">${produto.nome}</p>
           <p class="text-slate-400 text-xs">Tamano: M</p>
           <p class="text-green-700 text-lg">$${produto.preco}</p>
       </div>
       <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
           <p id="quantidade-${produto.id}" 
            class="ml-2">${quantidadeProduto}</p>

       </div>`;
 

 elementoArticle.innerHTML = cartaoProdutoCarrinho;
 containerProdutosCarrinho.appendChild(elementoArticle);

 document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementarQuantidade(produto.id));
 document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementarQuantidade(produto.id));
 document.getElementById(`remover-item-${produto.id}`).addEventListener('click',() => removerProdutoCarrinho(produto.id)); 
}