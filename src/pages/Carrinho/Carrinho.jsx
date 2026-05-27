import './Carrinho.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Carrinho(){

    return(

        <>

        <Header />

        <section className="carrinho-container">

            <div className="carrinho-card">

                <h1>
                    🛒 Carrinho
                </h1>

                <div className="item">

                    <img
                        src="https://picsum.photos/200/300"
                        alt="Livro"
                    />

                    <div>

                        <h2>
                            React Moderno
                        </h2>

                        <p>
                            R$ 79,90
                        </p>

                    </div>

                </div>

                <button>
                    Finalizar Compra
                </button>

            </div>

        </section>

        <Footer />

        </>

    )

}

export default Carrinho