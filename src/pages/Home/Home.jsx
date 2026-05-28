import './Home.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

import CardLivro from '../../CardLivro/CardLivro'

function Home(){

    return(

        <>
        <Header />

        <section className="banner">
            <div className="banner-content">
                <span className="banner-label">Tema atualizado</span>
                <h1>📚 Livraria Online</h1>
                <p>Descubra livros inspiradores para desenvolvimento, tecnologia e criatividade.</p>
                <button className="banner-button">Ver lançamentos</button>
            </div>
            <div className="banner-image">
                <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80"
                    alt="Estante de livros coloridos"
                />

                </div>

        </section>
      </>

    )

}

export default Home