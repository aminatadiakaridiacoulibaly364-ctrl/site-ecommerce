import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../data/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="bg-sable border-b border-doreClair/60 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl text-brun tracking-wide">
          Noor <span className="text-dore">Boutique</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brunClair">
          <Link to="/" className="hover:text-brun transition-colors">Accueil</Link>
          <Link to="/a-propos" className="hover:text-brun transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-brun transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/panier" className="relative p-2 text-brun hover:text-dore transition-colors" aria-label="Panier">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-dore text-creme text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-brun"></span>
            <span className="w-6 h-0.5 bg-brun"></span>
            <span className="w-6 h-0.5 bg-brun"></span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 text-brunClair font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 border-b border-doreClair/40">Accueil</Link>
          <Link to="/a-propos" onClick={() => setOpen(false)} className="py-2 border-b border-doreClair/40">À propos</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
        </nav>
      )}
    </header>
  )
}
