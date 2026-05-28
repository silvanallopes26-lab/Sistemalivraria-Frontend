import { Link } from 'react-router-dom'
import './Header.css'

function Header(){

  return(
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <h1>Livraria Online</h1>
        </div>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/livros">Livros</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header