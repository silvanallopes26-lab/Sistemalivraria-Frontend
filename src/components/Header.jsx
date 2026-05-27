import Header from '../../components/Header/Header'

import CardLivro from '../../components/CardLivro/CardLivro'

function Home(){

  return(

    <>

      <Header />

      <section className="banner">

        <h2>
          Os Melhores Livros do Momento
        </h2>

      </section>

      <section className="cards-container">

        <CardLivro
          titulo="Java Completo"
          descricao="Aprenda Java"
          imagem="https://picsum.photos/300/300"
        />

        <CardLivro
          titulo="React Moderno"
          descricao="Front-end moderno"
          imagem="https://picsum.photos/300/301"
        />

        <CardLivro
          titulo="Node.js"
          descricao="Backend poderoso"
          imagem="https://picsum.photos/300/302"
        />

      </section>

    </>

  )

}

export default Home