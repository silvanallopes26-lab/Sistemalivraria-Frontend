import './Contato.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

function Contato(){

    return(

        <>

        <Header />

        <section className="contato-container">

            <form className="formulario">

                <h1>
                    📞 Contato
                </h1>

                <input
                    type="text"
                    placeholder="Seu nome"
                />

                <input
                    type="email"
                    placeholder="Seu email"
                />

                <textarea
                    placeholder="Digite sua mensagem"
                ></textarea>

                <button>
                    Enviar
                </button>

            </form>

        </section>

        <Footer />

        </>

    )

}

export default Contato