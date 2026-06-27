import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../data/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, total, count } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-brun mb-4">Votre panier est vide</h1>
        <p className="text-brunClair mb-8">Découvrez nos collections et ajoutez vos articles préférés.</p>
        <Link to="/" className="bg-brun text-creme px-8 py-3 rounded-md font-medium hover:bg-dore transition-colors inline-block">
          Voir la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl text-brun mb-8">
        Votre panier <span className="text-brunClair text-lg">({count} article{count > 1 ? 's' : ''})</span>
      </h1>

      <div className="grid sm:grid-cols-3 gap-10">
        <div className="sm:col-span-2 space-y-4">
          {items.map((it) => (
            <div key={it.lineId} className="flex gap-4 border border-doreClair/60 rounded-xl p-4 bg-white/60">
              <img src={it.product.image} alt={it.product.name} className="w-20 h-24 object-cover rounded-md" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-brun">{it.product.name}</p>
                    <p className="text-sm text-brunClair">{it.color} · {it.size}</p>
                  </div>
                  <p className="font-medium text-brun">{(it.product.price * it.quantity).toFixed(2)} €</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(it.lineId, it.quantity - 1)}
                    className="w-8 h-8 rounded-md border border-doreClair text-brun"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{it.quantity}</span>
                  <button
                    onClick={() => updateQuantity(it.lineId, it.quantity + 1)}
                    className="w-8 h-8 rounded-md border border-doreClair text-brun"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(it.lineId)}
                    className="ml-auto text-sm text-brunClair hover:text-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-creme rounded-xl border border-doreClair/60 p-5 h-fit">
          <h2 className="font-medium text-brun mb-4">Récapitulatif</h2>
          <div className="flex justify-between text-brunClair text-sm mb-2">
            <span>Sous-total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-brunClair text-sm mb-4">
            <span>Livraison</span>
            <span>Gratuite</span>
          </div>
          <div className="flex justify-between font-medium text-brun text-base border-t border-doreClair/60 pt-3 mb-4">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <button
            onClick={() => navigate('/commande')}
            className="w-full bg-brun text-creme px-6 py-3 rounded-md font-medium hover:bg-dore transition-colors"
          >
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  )
}
