import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    const [newsletterEmail, setNewsletterEmail] = useState('')
    const [newsletterStatus, setNewsletterStatus] = useState('idle')
    const [newsletterMessage, setNewsletterMessage] = useState('')
    const year = new Date().getFullYear()

    const handleNewsletterSubmit = async (event) => {
        event.preventDefault()

        if (!newsletterEmail.trim()) {
            setNewsletterStatus('error')
            setNewsletterMessage('Informe um e-mail válido para receber nossas novidades.')
            return
        }

        setNewsletterStatus('sending')
        setNewsletterMessage('Enviando...')

        try {
            await new Promise((resolve) => setTimeout(resolve, 700))
            setNewsletterStatus('success')
            setNewsletterMessage('Obrigado! Seu e-mail foi registrado com sucesso.')
            setNewsletterEmail('')
        } catch (error) {
            setNewsletterStatus('error')
            setNewsletterMessage('Ocorreu um erro ao enviar. Tente novamente em instantes.')
        }
    }

    return(
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h2>Livraria Online</h2>
                    <p>Conectando leitores a histórias, estudos e crescimento pessoal.</p>
                </div>
                <div className="footer-sections footer-compact">
                    <div className="footer-section">
                        <h3>Links rápidos</h3>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/livros">Livros</Link>
                            <Link to="/lancamentos">Lançamentos</Link>
                            <Link to="/sobre">Sobre</Link>
                            <Link to="/carrinho">Carrinho</Link>
                            <Link to="/compras">Compras</Link>
                            <Link to="/contato">Contato</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                © {year} Livraria Online. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer