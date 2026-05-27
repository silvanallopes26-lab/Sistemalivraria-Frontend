import './Home.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import CardLivro from '../../CardLivro/CardLivro'

function Home(){

    return(

        <>

        <Header />

        <section className="banner">

            <h1>
                📚 Livraria Online
            </h1>

            <p>
                Os melhores livros de tecnologia
            </p>

        </section>

        <section className="home-cards">

            <CardLivro
                titulo="React"
                descricao="Front-end moderno"
                imagem="https://picsum.photos/300/305"
            />

            <CardLivro
                titulo="Java"
                descricao="Back-end poderoso"
                imagem="https://picsum.photos/300/306"
            />

            <CardLivro
                titulo="Python"
                descricao="IA e automação"
                imagem="https://picsum.photos/300/307"
            />

        </section>

        <Footer />

        </>

    )

}

export default Home