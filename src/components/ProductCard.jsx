import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/produit/${product.id}`}
      className="group block bg-white/60 rounded-xl overflow-hidden border border-doreClair/50 hover:shadow-lg hover:border-dore transition-all"
    >
      <div className="aspect-[3/4] overflow-hidden bg-creme">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-dore mb-1">{product.category}</p>
        <h3 className="font-display text-lg text-brun">{product.name}</h3>
        <p className="text-brunClair font-medium mt-1">{product.price.toFixed(2)} €</p>
      </div>
    </Link>
  )
}
