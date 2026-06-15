import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'
import api from '../../api'

function CadastroLivro() {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [preco, setPreco] = useState('')

  async function salvarLivro(e) {
    e.preventDefault()

    try {
      await api.post('/livros', {
        titulo: {
          nome: titulo,
        },
        autor: {
          nome: autor,
        },
        preco: {
          valor: Number(preco),
        },
      })

      alert('Livro cadastrado com sucesso!')

      navigate('/livros')
    } catch (error) {
      console.error(error)
      alert('Erro ao cadastrar livro')
    }
  }

  return (
    <>
      <Header />

      <div
        style={{
          maxWidth: '600px',
          margin: '40px auto',
          padding: '20px',
        }}
      >
        <h1>Cadastrar Livro</h1>

        <form onSubmit={salvarLivro}>
          <div style={{ marginBottom: '15px' }}>
            <label>Título</label>

            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Autor</label>

            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Preço</label>

            <input
              type="number"
              step="0.01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
              }}
            />
          </div>

          <button type="submit">
            Salvar Livro
          </button>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default CadastroLivro