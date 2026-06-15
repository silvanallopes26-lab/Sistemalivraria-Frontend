import "./CardLivro.css";
import { useCart } from "../context/CartContext";

export function CardLivro({ livro }) {
  const { adicionarProduto } = useCart();

  function handleCarrinho() {
    adicionarProduto(livro);
    alert("Livro adicionado ao carrinho!");
  }

  function handleComprar() {
    adicionarProduto(livro);
    window.location.href = "/carrinho";
  }

  return (
    <div className="card">
      {livro?.imagem ? (
        <img
          src={`http://localhost:8080${livro.imagem}`}
          alt={livro?.titulo?.nome}
        />
      ) : (
        <div className="card-placeholder">
          Sem imagem disponível
        </div>
      )}

      <h2>
        {livro?.titulo?.nome || "Sem título"}
      </h2>

      <p>
        <strong>Autor(a): </strong>
        {livro?.autor?.nome || "Não informado"}
      </p>

      <p>
        {livro?.descricao ||
          "Descrição não disponível"}
      </p>

      <p className="price">
        R${" "}
        {Number(
          livro?.preco?.valor ?? 0
        ).toFixed(2)}
      </p>

      <div className="botoes-card">
        <button
          className="btn-carrinho"
          onClick={handleCarrinho}
        >
          🛒 Carrinho
        </button>

        <button
          className="btn-comprar"
          onClick={handleComprar}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}