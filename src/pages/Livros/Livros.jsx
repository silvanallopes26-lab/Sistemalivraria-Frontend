import './Livros.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import CardLivro from '../../CardLivro/CardLivro'

function Livros(){

    return(

        <>

        <Header />

        <section className="livros-container">

            <h1 className="livros-title">
                📚 Nossos Livros
            </h1>

            <div className="livros-grid">

                <CardLivro
                    titulo="React Moderno"
                    descricao="Aprenda React do zero"
                    imagem="https://picsum.photos/300/301"
                />

                <CardLivro
                    titulo="Java Completo"
                    descricao="Back-end profissional"
                    imagem="https://picsum.photos/300/302"
                />

                <CardLivro
                    titulo="Node.js"
                    descricao="API REST completa"
                    imagem="https://picsum.photos/300/303"
                />

                <CardLivro
                    titulo="Banco de Dados"
                    descricao="SQL e Modelagem"
                    imagem="https://picsum.photos/300/304"
                />

            </div>

        </section>

        <Footer />

        </>

    )

}

export default Livros

