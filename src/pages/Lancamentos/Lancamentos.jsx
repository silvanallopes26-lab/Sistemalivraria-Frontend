import './Lancamentos.css'
import { useCart } from '../../context/CartContext'

const lancamentos = [
  {
    id: 1,
    titulo: "O Grande Conflito",
    autor: "Ellen G. White",
    descricao: "Uma análise histórica e espiritual do conflito entre o bem e o mal.",
    preco: 69.90,
    imagem: "/imagens/grande-conflito.jpg",
  },
  {
    id: 2,
    titulo: "O Mestre da Sensibilidade",
    autor: "Augusto Cury",
    descricao: "Reflexões sobre inteligência emocional e relações humanas.",
    preco: 44.90,
    imagem: "/imagens/mestre-sensibilidade.jpg",
  },
  {
    id: 3,
    titulo: "Hábitos Atômicos",
    autor: "James Clear",
    descricao: "Estratégias práticas para construir bons hábitos.",
    preco: 59.90,
    imagem: "/imagens/habitos-atomicos.jpg",
  },
  {
    id: 4,
    titulo: "Pai Rico, Pai Pobre",
    autor: "Robert Kiyosaki",
    descricao: "Educação financeira para todas as idades.",
    preco: 49.90,
    imagem: "/imagens/pai-rico.jpg",
  },
  {
    id: 5,
    titulo: "A Cabana",
    autor: "William P. Young",
    descricao: "Uma emocionante jornada sobre fé e esperança.",
    preco: 39.90,
    imagem: "/imagens/cabana.jpg",
  },
  {
    id: 6,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    descricao: "Um clássico sobre amizade e amor.",
    preco: 34.90,
    imagem: "/imagens/pequeno-principe.jpg",
  },
  {
    id: 7,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    descricao: "Uma das maiores obras da literatura brasileira.",
    preco: 29.90,
    imagem: "/imagens/dom-casmurro.jpg",
  },
]

function Lancamentos() {
  const { adicionarProduto } = useCart()

  function adicionarAoCarrinho(livro) {
    adicionarProduto(livro)
    alert('Livro adicionado ao carrinho!')
  }

  function comprarAgora(livro) {
    adicionarProduto(livro)
    window.location.href = '/carrinho'
  }

  return (
    <div className="lancamentos">
      <h1 className="titulo">
        📚 Lançamentos
      </h1>

      <div className="grid-livros">
        {lancamentos.map((livro) => (
          <div
            className="card-livro"
            key={livro.id}
          >
            <img
              src={livro.imagem}
              alt={livro.titulo}
            />

            <div className="conteudo">
              <h2>{livro.titulo}</h2>

              <p className="autor">
                <strong>Autora:</strong> {livro.autor}
              </p>

              <p>{livro.descricao}</p>

              <p className="preco">
                R$ {livro.preco.toFixed(2)}
              </p>

              <div className="botoes-card">
                <button
                  className="btn-carrinho"
                  onClick={() =>
                    adicionarAoCarrinho(livro)
                  }
                >
                  🛒 Carrinho
                </button>

                <button
                  className="btn-comprar"
                  onClick={() =>
                    comprarAgora(livro)
                  }
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lancamentos