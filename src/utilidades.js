export const catalogo = [{
    id: "1",
    nome: "Camisa preta",
    marca: "Makenji",
    preco: 40,
    nomeArquivoImagem: '167528010_01.png'
 },
 {
    id: "2",
    nome: "Camisa Branca",
    marca: "Makenji",
    preco: 45,
    nomeArquivoImagem: '167528003_01.png'
 },
 {
    id: "3",
    nome: "Camisa Cinza",
    marca: "Makenji",
    preco: 47,
    nomeArquivoImagem: '169678249_01.png'
 },
 {
    id: "4",
    nome: "Short Doll Pijama Feminino",
    marca: "Tricae",
    preco: 70,
    nomeArquivoImagem: 'Linha-Noite-Short-Doll-Pijama.jpg'
 },
 {
   id: "5",
   nome: "Camiseta Trail Preta",
   marca: "NIKE",
   preco: 80,
   nomeArquivoImagem: 'Nike-Camiseta-Preta.webp'
},
{
   id: "6",
   nome: "Camiseta Sportwear",
   marca: "NIKE",
   preco: 100,
   nomeArquivoImagem: 'CAMISETA NIKE SPORTWEAR.webp'
},
{
   id: "7",
   nome: "Vestido Jeans Longo Feminino Fenda Manga Curta",
   marca: "Marisa",
   preco: 85,
   nomeArquivoImagem: 'shopping.webp'
},
{
   id: "8",   
   nome: "Vestido Poá Rosê com Babado e Faixa",
   marca: "Posthaus",
   preco: 45,
   nomeArquivoImagem: 'vestido.webp'
}

];

export function salvarLocalStorage(){
    localStorage.setItem('carrinho', JSON.stringify(idsProdutosCarrinhoComQuantidade));
}