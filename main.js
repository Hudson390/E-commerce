import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicalizarFiltros } from "./src/filtrosCatalogo";
import { 
    iniciarCarrinho,
    atualizarPrecoCarrinho,
    renderizarProdutosCarrinhos,
} from "./src/menuCarrinho";

renderizarCatalogo();
iniciarCarrinho();
renderizarProdutosCarrinhos();
atualizarPrecoCarrinho();
inicalizarFiltros();




