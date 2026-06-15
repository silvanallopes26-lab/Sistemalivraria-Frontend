import './Livros.css'
import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../Footer/Footer'
import { CardLivro } from '../../CardLivro/CardLivro'

import api from '../../api'

function Livros() {
  const [livros, setLivros] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarLivros()
  }, [])

  async function carregarLivros() {
    try {
      setLoading(true)

      const response = await api.get('/livros')

      setLivros(response.data)
      setErro('')
    } catch (error) {
      console.error('Erro ao carregar livros:', error)
      setErro('Não foi possível carregar os livros.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <section className="livros-container">
        <h1 className="livros-title">
          📚 Nossos Livros
        </h1>

        {loading && (
          <h2 style={{ textAlign: 'center' }}>
            Carregando livros...
          </h2>
        )}

        {erro && (
          <h2
            style={{
              textAlign: 'center',
              color: 'red'
            }}
          >
            {erro}
          </h2>
        )}

        {!loading && !erro && livros.length === 0 && (
          <h2 style={{ textAlign: 'center' }}>
            Nenhum livro encontrado.
          </h2>
        )}

        {!loading && !erro && livros.length > 0 && (
          <div className="livros-grid">
            {livros.map((livro) => (
              <CardLivro
                key={livro.id}
                livro={livro}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  )
}

export default Livros