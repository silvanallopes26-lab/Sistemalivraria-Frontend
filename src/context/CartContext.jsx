import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const parseStorage = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() =>
    parseStorage('livraria_cart', [])
  )

  const [purchases, setPurchases] = useState(() =>
    parseStorage('livraria_purchases', [])
  )

  useEffect(() => {
    localStorage.setItem(
      'livraria_cart',
      JSON.stringify(cart)
    )
  }, [cart])

  useEffect(() => {
    localStorage.setItem(
      'livraria_purchases',
      JSON.stringify(purchases)
    )
  }, [purchases])

  const adicionarProduto = (produto) => {
    const item = {
      ...produto,
      cartId: Date.now(),
      selecionado: true
    }

    setCart((prev) => [...prev, item])
  }

  const removerProduto = (cartId) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.cartId !== cartId
      )
    )
  }

  const alternarSelecao = (cartId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              selecionado:
                !item.selecionado
            }
          : item
      )
    )
  }

  const finalizarCompra = () => {
    return true
  }

  const removerCompra = (id) => {
    setPurchases((prev) =>
      prev.filter(
        (pedido) => pedido.id !== id
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        purchases,
        adicionarProduto,
        removerProduto,
        alternarSelecao,
        finalizarCompra,
        removerCompra
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart deve ser usado dentro do CartProvider'
    )
  }

  return context
}