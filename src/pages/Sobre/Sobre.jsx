import './Sobre.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Sobre() {
  return (
    <>
      <Header />

      <main className="sobre-page">
        <section className="sobre-hero">
          <h1>Sobre a Livraria Online</h1>
          <p>Uma loja dedicada a conectar leitores a histórias, estudos e crescimento pessoal.</p>
        </section>

        <section className="sobre-cards">
          <article className="sobre-card">
            <h2>Nossa missão</h2>
            <p>Oferecer uma seleção cuidadosa de livros que inspirem aprendizado, desenvolvimento profissional e bem-estar.</p>
          </article>
          <article className="sobre-card">
            <h2>O que oferecemos</h2>
            <p>Produtos atualizados, atendimento simpático e uma experiência de compra simples e segura para todos os leitores.</p>
          </article>
          <article className="sobre-card">
            <h2>Como trabalhamos</h2>
            <p>Valorizamos qualidade, diversidade de temas e práticas transparentes de venda para levar conhecimento à sua casa.</p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Sobre
