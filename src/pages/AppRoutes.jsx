import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>Home</h1>
}

function Carrinho() {
  return <h1>Carrinho</h1>
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes