import './Carrinho.css'

import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../Footer/Footer'
import { useCart } from '../../context/CartContext'

function Carrinho() {
  const {
    cart,
    removerProduto,
    finalizarCompra,
    alternarSelecao
  } = useCart()
  const navigate = useNavigate()

  const total = cart.reduce(
    (acc, item) => acc + (item.preco?.valor || 0),
    0
  )

  const handleFinalizar = () => {
    if (finalizarCompra()) {
      navigate('/compras')
    }
  }

  return (
    <>
      <Header />

      <section className="carrinho-container">
        <div className="carrinho-card">
          <h1>🛒 Carrinho</h1>

          {cart.length === 0 ? (
            <p className="carrinho-empty">Seu carrinho está vazio.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="item" key={item.cartId}>
                  <input
                    type="checkbox"
                    checked={item.selecionado}
                    onChange={() =>
                      alternarSelecao(item.cartId)
                    }
                  />
                  <img
                    src={`http://localhost:8080${item.imagem}`}
                    alt={item.titulo?.nome}
                  />

                  <div>
                    <h2>{item.titulo?.nome}</h2>

                    <p>
                      {item.autor?.nome || item.descricao}
                    </p>

                    <p className="item-price">
                      R$ {(item.preco?.valor ?? 0).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      className="remover-button"
                      onClick={() => removerProduto(item.cartId)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}

              <div className="carrinho-summary">
                <strong>Total: R$ {total.toFixed(2)}</strong>
                <button type="button" onClick={handleFinalizar}>
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Carrinho
