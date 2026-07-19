import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contato.css'
import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState('')

  const enviarEmail = (e) => {
    e.preventDefault()
    setStatus('enviando')
    emailjs.send(
      'service_c26s8rm',
      'template_aqhuyhg',
      { from_name: nome, from_email: email, subject: assunto, message: mensagem },
      'INaRH6qqjZy_GKIJJ'
    ).then(() => {
      setStatus('sucesso')
      setNome(''); setEmail(''); setAssunto(''); setMensagem('')
    }).catch((err) => {
      console.error('EmailJS erro:', err)
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
          <form className="formulario" onSubmit={enviarEmail}>
            <div className="form-header">
              <h2>Envie sua mensagem</h2>
              <p>Preencha os campos abaixo e retornaremos o mais breve possível.</p>
            </div>
            <label>Nome completo
              <input type="text" placeholder="Seu nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>E-mail
              <input type="email" placeholder="Seu email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Assunto
              <input type="text" placeholder="Assunto da mensagem" required value={assunto} onChange={(e) => setAssunto(e.target.value)} />
            </label>
            <label>Mensagem
              <textarea placeholder="Digite sua mensagem" required value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </label>
            <button type="submit" disabled={status === 'enviando'}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {status === 'sucesso' && <p style={{color:'green'}}>Mensagem enviada com sucesso!</p>}
            {status === 'erro' && <p style={{color:'red'}}>Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contato