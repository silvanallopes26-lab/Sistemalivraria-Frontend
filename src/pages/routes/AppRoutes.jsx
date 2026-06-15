import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../Home/Home'
import Livros from '../Livros/Livros'
import Lancamentos from '../Lancamentos/Lancamentos'
import Sobre from '../Sobre/Sobre'
import Carrinho from '../Carrinho/Carrinho'
import Compras from '../Compras/Compras'
import Contato from '../Contato/Contato'

import CadastroLivro from '../CadastroLivro/CadastroLivro'
import EditarLivro from '../EditarLivro/EditarLivro'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/livros"
          element={<Livros />}
        />

        <Route
          path="/cadastro-livro"
          element={<CadastroLivro />}
        />

        <Route
          path="/editar-livro/:id"
          element={<EditarLivro />}
        />

        <Route
          path="/lancamentos"
          element={<Lancamentos />}
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/carrinho"
          element={<Carrinho />}
        />

        <Route
          path="/compras"
          element={<Compras />}
        />

        <Route
          path="/contato"
          element={<Contato />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes