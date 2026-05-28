import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../Home/Home'
import Livros from '../Livros/Livros'
import Carrinho from '../Carrinho/Carrinho'
import Contato from '../Contato/Contato'

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
          path="/carrinho"
          element={<Carrinho />}
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