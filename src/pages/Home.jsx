import { useMemo, useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const CATEGORIES = ['Toutes', 'Femme', 'Homme', 'Accessoire']
const TAILLES = ['Toutes', 'S', 'M', 'L', 'XL', 'XXL', 'Unique']
const PRIX_MAX = Math.ceil(Math.max(...products.map((p) => p.price)))

export default function Home() {
  const [categorie, setCategorie] = useState('Toutes')
  const [taille, setTaille] = useState('Toutes')
  const [prixMax, setPrixMax] = useState(PRIX_MAX)

  const produitsFiltres = useMemo(() => {
    return products.filter((p) => {
      const okCategorie = categorie === 'Toutes' || p.category === categorie
      const okTaille = taille === 'Toutes' || p.sizes.includes(taille)
      const okPrix = p.price <= prixMax
      return okCategorie && okTaille && okPrix
    })
  }, [categorie, taille, prixMax])

  return (
    <div>
      {/* Hero */}
      <section className="bg-creme">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-dore uppercase tracking-widest text-xs mb-3">Nouvelle collection</p>
            <h1 className="font-display text-4xl sm:text-5xl text-brun leading-tight mb-4">
              La pudeur, sublimée par l'élégance
            </h1>
            <p className="text-brunClair mb-6 max-w-md">
              Découvrez nos abayas, qamis, jilbabs et hijabs confectionnés avec des tissus
              nobles, pensés pour celles et ceux qui allient foi et raffinement.
            </p>
            <a
              href="#catalogue"
              className="inline-block bg-brun text-creme px-6 py-3 rounded-md font-medium hover:bg-dore transition-colors"
            >
              Découvrir la collection
            </a>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000&auto=format&fit=crop"
              alt="Collection de vêtements modestes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Catalogue avec filtres */}
      <section id="catalogue" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <h2 className="font-display text-3xl text-brun">Notre catalogue</h2>
          <span className="text-sm text-brunClair">
            {produitsFiltres.length} article{produitsFiltres.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid sm:grid-cols-12 gap-8">
          {/* Filtres */}
          <aside className="sm:col-span-3">
            <div className="bg-creme rounded-xl border border-doreClair/60 p-5 space-y-6 sm:sticky sm:top-20">
              <div>
                <h3 className="text-sm font-medium text-brun mb-3">Catégorie</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategorie(c)}
                      className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                        categorie === c
                          ? 'border-brun bg-brun text-creme'
                          : 'border-doreClair text-brunClair hover:border-dore'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-brun mb-3">Taille</h3>
                <div className="flex flex-wrap gap-2">
                  {TAILLES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTaille(t)}
                      className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                        taille === t
                          ? 'border-brun bg-brun text-creme'
                          : 'border-doreClair text-brunClair hover:border-dore'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-brun mb-3">
                  Prix maximum : {prixMax} €
                </h3>
                <input
                  type="range"
                  min={0}
                  max={PRIX_MAX}
                  step="1"
                  value={prixMax}
                  onChange={(e) => setPrixMax(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {(categorie !== 'Toutes' || taille !== 'Toutes' || prixMax !== PRIX_MAX) && (
                <button
                  onClick={() => {
                    setCategorie('Toutes')
                    setTaille('Toutes')
                    setPrixMax(PRIX_MAX)
                  }}
                  className="text-sm text-dore underline"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </aside>

          {/* Grille produits */}
          <div className="sm:col-span-9">
            {produitsFiltres.length === 0 ? (
              <p className="text-brunClair text-center py-16">
                Aucun article ne correspond à ces filtres.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {produitsFiltres.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
