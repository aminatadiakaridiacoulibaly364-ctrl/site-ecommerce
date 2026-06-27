export default function Footer() {
  return (
    <footer className="bg-brun text-creme mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-display text-xl text-doreClair mb-2">Noor Boutique</h3>
          <p className="text-creme/70">
            Vêtements modestes et élégants, pensés pour allier pudeur et raffinement au quotidien.
          </p>
        </div>
        <div>
          <h4 className="text-doreClair font-medium mb-2">Liens utiles</h4>
          <ul className="space-y-1 text-creme/70">
            <li>Livraison & retours</li>
            <li>Guide des tailles</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-doreClair font-medium mb-2">Contact</h4>
          <p className="text-creme/70">contact@noorboutique.fr</p>
          <p className="text-creme/70">+33 6 00 00 00 00</p>
        </div>
      </div>
      <div className="text-center text-creme/50 text-xs py-4 border-t border-creme/10">
        © {new Date().getFullYear()} Noor Boutique. Tous droits réservés.
      </div>
    </footer>
  )
}
