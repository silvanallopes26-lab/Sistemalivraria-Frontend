import './Compras.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'
import { useCart } from '../../context/CartContext'

function Compras() {
  const {
    purchases,
    removerCompra
  } = useCart()

  return (
    <>
      <Header />

      <main className="compras-page">
        <section className="compras-content">
          <h1>📦 Minhas Compras</h1>

          {purchases.length === 0 ? (
            <div className="compras-empty">
              <p>Você ainda não finalizou nenhuma compra.</p>

              <p>
                Adicione livros ao carrinho e finalize a compra
                para aparecer aqui.
              </p>
            </div>
          ) : (
            <div className="compras-grid">

              {purchases.map((pedido) => {

                const totalPedido = pedido.itens.reduce(
                  (acc, item) =>
                    acc +
                    Number(
                      item.preco?.valor ??
                      item.preco ??
                      0
                    ),
                  0
                )

                return (
                  <article
                    className="compra-card"
                    key={pedido.id}
                  >

                    <div className="compra-header">
                      <span>
                        Pedido #{pedido.id}
                      </span>

                      <span>
                        {pedido.data
                          ? new Date(
                            pedido.data
                          ).toLocaleString(
                            'pt-BR'
                          )
                          : 'Data não informada'}
                      </span>
                    </div>

                    <div className="compra-items">

                      {pedido.itens.map((item) => (
                        <div
                          className="compra-item-card"
                          key={item.cartId}
                        >

                          <img
                            src={`http://localhost:8080${item.imagem}`}
                            alt={
                              item.titulo?.nome ||
                              'Livro'
                            }
                            onError={(e) => {
                              e.target.src =
                                '/imagens/livrohome6.jpg'
                            }}
                          />

                          <div className="compra-item-info">

                            <h3>
                              {item.titulo?.nome ||
                                'Livro'}
                            </h3>

                            <p>
                              {item.autor?.nome ||
                                item.descricao ||
                                'Autor não informado'}
                            </p>

                            <span className="item-price">
                              R${' '}
                              {Number(
                                item.preco?.valor ??
                                item.preco ??
                                0
                              ).toFixed(2)}
                            </span>

                          </div>

                        </div>
                      ))}

                    </div>

                    <div className="compra-total">

                      <strong>
                        Total: R$ {totalPedido.toFixed(2)}
                      </strong>

                      <button
                        className="delete-order"
                        onClick={() =>
                          removerCompra(pedido.id)
                        }
                      >
                        🗑 Excluir Compra
                      </button>

                      <span>
                        {pedido.itens.length}{' '}
                        livro
                        {pedido.itens.length > 1
                          ? 's'
                          : ''}
                      </span>

                    </div>

                  </article>
                )
              })}

            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Compras