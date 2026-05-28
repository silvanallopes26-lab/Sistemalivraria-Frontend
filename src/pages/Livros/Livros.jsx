import './Livros.css'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'

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
                    titulo="Eu minha boca grande"
                    descricao="Joyce Meyer"
                    imagem="/imagens/livro1.jpg"
                />

                <CardLivro
                    titulo="Podologia"
                    descricao="Técnicas e especializações podológicas"
                    imagem="/imagens/livro2.jpg"
                />

                <CardLivro
                    titulo="Reflexologia"
                    descricao="Faça uma Reflexologia Podal para aliviar dores e tensões"
                    imagem="/imagens/livro3.jpg"
                
                />

                <CardLivro
                    titulo="Bíblia de Estudo Pentecostal"
                    descricao="Sua busula para o estudo da palavra de Deus"
                    imagem="/imagens/livro4.jpg"
                />

            </div>

        </section>

        <Footer />

        </>

    )

}

export default Livros

