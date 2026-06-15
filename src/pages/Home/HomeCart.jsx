import CardLivro from "../CardLivro/CardLivro";
import { useCart } from "../context/CartContext";

import javaImg from "../assets/java.jpg";
import htmlImg from "../assets/html.jpg";
import reactImg from "../assets/react.jpg";

import "./Home.css";

function Home() {
  const { adicionarProduto } = useCart();

  const livros = [
    {
      titulo: "Java Completo",
      descricao: "Backend profissional",
      imagem: javaImg
    },
    {
      titulo: "HTML e CSS",
      descricao: "Frontend moderno",
      imagem: htmlImg
    },
    {
      titulo: "React Avançado",
      descricao: "Apps profissionais",
      imagem: reactImg
    }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h2>📚 Livraria Online</h2>

        <nav>
          <a href="#">Início</a>
          <a href="#">Livros</a>
          <a href="#">Contato</a>
          <a href="/carrinho">Carrinho</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Os Melhores Livros do Momento</h1>
        <button>Ver Promoções</button>
      </section>

      {/* PRODUTOS */}
      <section className="produtos">
        <h2>🔥 Mais Vendidos</h2>

        <div className="grid">
          {livros.map((livro, index) => (
            <CardLivro
              key={index}
              {...livro}
              onComprar={() => adicionarProduto(livro)}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Livraria Online</p>
      </footer>
    </>
  );
}

export default Home;

import './CardLivro.css'

function CardLivro({ titulo, descricao, imagem, onComprar }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <button onClick={onComprar}>
          🛒 Comprar
        </button>
      </div>
    </div>
  )
}

export default CardLivro