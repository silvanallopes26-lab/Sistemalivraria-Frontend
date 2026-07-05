import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contato.css'
import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Contato() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const enviarEmail = (e) => {
    e.preventDefault()
    setStatus('enviando')

    emailjs.sendForm(
      'service_b47876h',
      'sf825y2',
      form.current,
      'lNaRH6qqjZy_GKIJJ'
    ).then(() => {
      setStatus('sucesso')
      form.current.reset()
    }).catch(() => {
      setStatus('erro')
    })
  }

  return (
    <>
      <Header />
      <section className="contato-container">
        <div className="contato-card">
          <div className="contato-info">
            <span className="contato-label">Fale Conosco</span>
            <h1>Estamos prontos para ajudar você</h1>
            <p>Tem dúvidas sobre pedidos, lançamentos ou nossas recomendações de leitura? Envie sua mensagem e nossa equipe responderá em até 24 horas úteis.</p>
            <div className="contato-details">
              <div><strong>Telefone</strong><p>(11) 1234-5678</p></div>
              <div><strong>E-mail</strong><p>contato@livrariaonline.com</p></div>
              <div><strong>Atendimento</strong><p>Segunda a sexta, 9h às 18h</p></div>
            </div>
          </div>

          <form ref={form} className="formulario" onSubmit={enviarEmail}>
            <div className="form-header">
              <h2>Envie sua mensagem</h2>
              <p>Preencha os campos abaixo e retornaremos o mais breve possível.</p>
            </div>
            <label>Nome completo<input type="text" name="name" placeholder="Seu nome" required /></label>
            <label>E-mail<input type="email" name="email" placeholder="Seu email" required /></label>
            <label>Assunto<input type="text" name="title" placeholder="Assunto da mensagem" required /></label>
            <label>Mensagem<textarea name="message" placeholder="Digite sua mensagem" required></textarea></label>
            <button type="submit" disabled={status === 'enviando'}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {status === 'sucesso' && <p style={{color: 'green'}}>Mensagem enviada com sucesso!</p>}
            {status === 'erro' && <p style={{color: 'red'}}>Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contato