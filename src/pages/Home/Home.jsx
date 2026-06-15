import './Home.css'

import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <>
      <Header />

      <section className="banner">
        <div className="particles"></div>

        <div className="banner-content">
          <span className="banner-label">
            🌟 Sua próxima aventura começa aqui
          </span>

          <h1 className="banner-title">
            ❦ Biblioteca do Conhecimento ❦
          </h1>

          <p className="banner-text">
            Tecnologia, literatura e desenvolvimento
            pessoal em um só lugar.
          </p>

          <div className="banner-actions">
            <Link
              to="/lancamentos"
              className="banner-button"
            >
              Lançamentos
            </Link>

            <Link
              to="/cadastro-livro"
              className="banner-button"
            >
              Cadastrar Livro
            </Link>

            <Link
              to="/sobre"
              className="banner-secondary"
            >
              Sobre nós
            </Link>
          </div>
        </div>

        <div className="banner-image">
          <img
            src="/imagens/livrohome6.jpg"
            alt="Livraria"
            className="hero-image"
            onError={(e) => {
              console.log(
                'Imagem não encontrada:',
                e.target.src
              )
            }}
          />
        </div>
      </section>

      <section className="home-highlight">
        <div className="highlight-card fade-in">
          <h2>
            Por que escolher a Livraria Online?
          </h2>

          <ul>
            <li>
              Curadoria de livros para tecnologia,
              liderança e desenvolvimento pessoal.
            </li>

            <li>
              Entrega rápida e fácil acompanhamento
              do pedido.
            </li>

            <li>
              Conteúdo novo a cada semana em nossa
              página de Lançamentos.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home