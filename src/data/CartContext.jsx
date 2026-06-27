import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'noor-boutique-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  // Ajoute un article ; fusionne si même produit + couleur + taille déjà présent
  const addItem = (product, options) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (it) =>
          it.product.id === product.id &&
          it.color === options.color &&
          it.size === options.size
      )
      if (idx !== -1) {
        const next = [...prev]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + options.quantity }
        return next
      }
      return [...prev, { product, ...options, lineId: `${product.id}-${options.color}-${options.size}-${Date.now()}` }]
    })
  }

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((it) => it.lineId !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    setItems((prev) =>
      prev.map((it) => (it.lineId === lineId ? { ...it, quantity: Math.max(1, quantity) } : it))
    )
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0)
  const count = items.reduce((sum, it) => sum + it.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit être utilisé dans un CartProvider')
  return ctx
}
