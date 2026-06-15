import './Contato.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Contato() {
  return (
    <>
      <Header />

      <section className="contato-container">
        <div className="contato-card">
          <div className="contato-info">
            <span className="contato-label">Fale Conosco</span>
            <h1>Estamos prontos para ajudar você</h1>
            <p>
              Tem dúvidas sobre pedidos, lançamentos ou nossas recomendações de leitura? Envie sua
              mensagem e nossa equipe responderá em até 24 horas úteis.
            </p>

            <div className="contato-details">
              <div>
                <strong>Telefone</strong>
                <p>(11) 1234-5678</p>
              </div>
              <div>
                <strong>E-mail</strong>
                <p>contato@livrariaonline.com</p>
              </div>
              <div>
                <strong>Atendimento</strong>
                <p>Segunda a sexta, 9h às 18h</p>
              </div>
            </div>
          </div>

          <form className="formulario">
            <div className="form-header">
              <h2>Envie sua mensagem</h2>
              <p>Preencha os campos abaixo e retornaremos o mais breve possível.</p>
            </div>

            <label>
              Nome completo
              <input type="text" placeholder="Seu nome" />
            </label>

            <label>
              E-mail
              <input type="email" placeholder="Seu email" />
            </label>

            <label>
              Assunto
              <input type="text" placeholder="Assunto da mensagem" />
            </label>

            <label>
              Mensagem
              <textarea placeholder="Digite sua mensagem"></textarea>
            </label>

            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contato