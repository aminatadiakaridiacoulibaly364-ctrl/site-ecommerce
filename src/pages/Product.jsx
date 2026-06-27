import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../data/CartContext'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === Number(id))

  const [color, setColor] = useState(product?.colors[0] || '')
  const [size, setSize] = useState(product?.sizes[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-brunClair mb-4">Ce produit n'existe pas.</p>
        <Link to="/" className="text-dore underline">Retour à l'accueil</Link>
      </div>
    )
  }

  const handleAjouter = (e) => {
    e.preventDefault()
    if (!color || !size) {
      setError('Merci de sélectionner une couleur et une taille.')
      return
    }
    setError('')
    addItem(product, { color, size, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleAcheterMaintenant = (e) => {
    e.preventDefault()
    if (!color || !size) {
      setError('Merci de sélectionner une couleur et une taille.')
      return
    }
    setError('')
    addItem(product, { color, size, quantity })
    navigate('/commande')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/" className="text-sm text-brunClair hover:text-brun">← Retour à la boutique</Link>

      <div className="grid sm:grid-cols-2 gap-10 mt-6">
        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-creme">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-dore mb-2">{product.category}</p>
          <h1 className="font-display text-3xl sm:text-4xl text-brun mb-2">{product.name}</h1>
          <p className="text-2xl text-brunClair font-medium mb-4">{product.price.toFixed(2)} €</p>
          <p className="text-brunClair leading-relaxed mb-6">{product.description}</p>

          <form onSubmit={handleAjouter} className="space-y-5">
            {/* Couleur */}
            <div>
              <label className="block text-sm font-medium text-brun mb-2">Couleur</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                      color === c
                        ? 'border-brun bg-brun text-creme'
                        : 'border-doreClair text-brunClair hover:border-dore'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Taille */}
            <div>
              <label className="block text-sm font-medium text-brun mb-2">Taille</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-12 h-10 rounded-md border text-sm transition-colors ${
                      size === s
                        ? 'border-brun bg-brun text-creme'
                        : 'border-doreClair text-brunClair hover:border-dore'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantité */}
            <div>
              <label className="block text-sm font-medium text-brun mb-2">Quantité</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-md border border-doreClair text-brun"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-md border border-doreClair text-brun"
                >
                  +
                </button>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {added && <p className="text-green-700 text-sm">Ajouté au panier !</p>}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="bg-white border border-brun text-brun px-8 py-3 rounded-md font-medium hover:bg-creme transition-colors"
              >
                Ajouter au panier — {(product.price * quantity).toFixed(2)} €
              </button>
              <button
                type="button"
                onClick={handleAcheterMaintenant}
                className="bg-brun text-creme px-8 py-3 rounded-md font-medium hover:bg-dore transition-colors"
              >
                Acheter maintenant
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
