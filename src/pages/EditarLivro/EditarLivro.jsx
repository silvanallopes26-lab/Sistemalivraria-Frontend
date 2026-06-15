import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'
import api from '../../api'

function EditarLivro() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    carregarLivro()
  }, [])

  async function carregarLivro() {
    try {
      const response = await api.get('/livros')

      const livro = response.data.find(
        (item) => item.id === Number(id)
      )

      if (!livro) {
        alert('Livro não encontrado')
        navigate('/livros')
        return
      }

      setTitulo(livro.titulo?.nome || '')
      setAutor(livro.autor?.nome || '')
      setPreco(livro.preco?.valor || '')
    } catch (error) {
      console.error(error)
      alert('Erro ao carregar livro')
    }
  }

  async function atualizarLivro(e) {
    e.preventDefault()

    try {
      await api.put(`/livros/${id}`, {
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

      alert('Livro atualizado com sucesso!')

      navigate('/livros')
    } catch (error) {
      console.error(error)
      alert('Erro ao atualizar livro')
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
        <h1>Editar Livro</h1>

        <form onSubmit={atualizarLivro}>
          <div style={{ marginBottom: '15px' }}>
            <label>Título</label>

            <input
              type="text"
              value={titulo}
              onChange={(e) =>
                setTitulo(e.target.value)
              }
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
              onChange={(e) =>
                setAutor(e.target.value)
              }
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
              onChange={(e) =>
                setPreco(e.target.value)
              }
              required
              style={{
                width: '100%',
                padding: '10px',
              }}
            />
          </div>

          <button type="submit">
            Atualizar Livro
          </button>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default EditarLivro