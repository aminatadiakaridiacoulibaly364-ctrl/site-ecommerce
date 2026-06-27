export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <p className="text-dore uppercase tracking-widest text-xs mb-3">Notre histoire</p>
      <h1 className="font-display text-4xl text-brun mb-6">À propos de Noor Boutique</h1>

      <div className="aspect-[16/7] rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1556228852-80b6e13a3a85?q=80&w=1200&auto=format&fit=crop"
          alt="Atelier de confection"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-5 text-brunClair leading-relaxed">
        <p>
          Noor Boutique est née d'une conviction simple : la pudeur et l'élégance ne
          sont pas opposées, elles se complètent. Depuis nos débuts, nous sélectionnons
          des tissus nobles et des coupes soignées pour proposer des abayas, qamis,
          jilbabs et hijabs qui accompagnent chaque moment de votre vie, du quotidien
          aux grandes occasions.
        </p>
        <p>
          Chaque pièce est pensée pour offrir confort, couverture et raffinement.
          Nous travaillons avec des ateliers attentifs à la qualité des matières et
          à la précision des finitions, pour des vêtements qui durent et qui se portent
          avec fierté.
        </p>
        <p>
          Notre nom, Noor, signifie « lumière ». C'est cette lumière intérieure que
          nous souhaitons révéler à travers nos collections : une mode qui respecte
          vos valeurs sans jamais sacrifier le style.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        <Valeur titre="Qualité" texte="Des tissus durables et des finitions soignées, choisis avec exigence." />
        <Valeur titre="Pudeur" texte="Des coupes amples et couvrantes, pensées pour le respect de vos valeurs." />
        <Valeur titre="Élégance" texte="Des couleurs et des détails qui sublimisent chaque pièce, au quotidien." />
      </div>
    </div>
  )
}

function Valeur({ titre, texte }) {
  return (
    <div className="bg-creme rounded-xl border border-doreClair/60 p-5">
      <h3 className="font-display text-xl text-brun mb-2">{titre}</h3>
      <p className="text-sm text-brunClair">{texte}</p>
    </div>
  )
}
