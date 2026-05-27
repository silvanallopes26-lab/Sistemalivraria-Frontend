import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Livros from '../pages/Livros/Livros'
import Carrinho from '../pages/Carrinho/Carrinho'
import Contato from '../pages/Contato/Contato'

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