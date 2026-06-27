import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../data/CartContext'

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'sb' // 'sb' = sandbox de test

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const paypalRef = useRef(null)

  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: 'France',
  })
  const [formValide, setFormValide] = useState(false)
  const [paid, setPaid] = useState(false)
  const [emailConfirmation, setEmailConfirmation] = useState('')

  useEffect(() => {
    const requis = ['prenom', 'nom', 'email', 'adresse', 'ville', 'codePostal']
    setFormValide(requis.every((k) => form[k].trim().length > 0))
  }, [form])

  // Charge le SDK PayPal et affiche le bouton une fois le formulaire valide
  useEffect(() => {
    if (!formValide || items.length === 0 || paid) return

    const renderButton = () => {
      if (!window.paypal || !paypalRef.current) return
      paypalRef.current.innerHTML = ''
      window.paypal
        .Buttons({
          style: { color: 'black', shape: 'rect', label: 'paypal' },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: items
                    .map((it) => `${it.product.name} (${it.color}, ${it.size}) x${it.quantity}`)
                    .join(' | ')
                    .slice(0, 127),
                  amount: { value: total.toFixed(2), currency_code: 'EUR' },
                  shipping: {
                    name: { full_name: `${form.prenom} ${form.nom}` },
                    address: {
                      address_line_1: form.adresse,
                      admin_area_2: form.ville,
                      postal_code: form.codePostal,
                      country_code: 'FR',
                    },
                  },
                },
              ],
            })
          },
          onApprove: async (data, actions) => {
            await actions.order.capture()
            setEmailConfirmation(form.email)
            setPaid(true)
            clearCart()
          },
          onError: (err) => {
            console.error('Erreur PayPal', err)
          },
        })
        .render(paypalRef.current)
    }

    if (window.paypal) {
      renderButton()
    } else {
      const script = document.createElement('script')
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR`
      script.onload = renderButton
      document.body.appendChild(script)
    }
  }, [formValide, items, paid, total, form, clearCart])

  if (items.length === 0 && !paid) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-brunClair mb-4">Votre panier est vide.</p>
        <Link to="/" className="text-dore underline">Voir la boutique</Link>
      </div>
    )
  }

  if (paid) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-dore/20 text-dore flex items-center justify-center mx-auto mb-6 text-2xl">
          ✓
        </div>
        <h1 className="font-display text-3xl text-brun mb-3">Merci pour votre commande !</h1>
        <p className="text-brunClair mb-8">
          Votre paiement a bien été reçu. Un email de confirmation vous sera envoyé à {emailConfirmation}.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-brun text-creme px-8 py-3 rounded-md font-medium hover:bg-dore transition-colors"
        >
          Retour à la boutique
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl text-brun mb-8">Finaliser la commande</h1>

      <div className="grid sm:grid-cols-3 gap-10">
        {/* Formulaire de livraison */}
        <div className="sm:col-span-2 space-y-4">
          <h2 className="font-medium text-brun text-lg mb-2">Informations de livraison</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Champ label="Prénom" name="prenom" value={form.prenom} onChange={setForm} />
            <Champ label="Nom" name="nom" value={form.nom} onChange={setForm} />
          </div>

          <Champ label="Email" name="email" type="email" value={form.email} onChange={setForm} />
          <Champ label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={setForm} optionnel />
          <Champ label="Adresse" name="adresse" value={form.adresse} onChange={setForm} />

          <div className="grid sm:grid-cols-3 gap-4">
            <Champ label="Ville" name="ville" value={form.ville} onChange={setForm} />
            <Champ label="Code postal" name="codePostal" value={form.codePostal} onChange={setForm} />
            <Champ label="Pays" name="pays" value={form.pays} onChange={setForm} />
          </div>

          {!formValide && (
            <p className="text-sm text-brunClair">
              Remplissez vos informations pour activer le paiement.
            </p>
          )}

          <div ref={paypalRef} className="mt-4 max-w-sm" />
          {!formValide && (
            <div className="max-w-sm h-12 rounded-md bg-creme border border-doreClair flex items-center justify-center text-sm text-brunClair">
              Paiement PayPal disponible une fois le formulaire complété
            </div>
          )}
        </div>

        {/* Récapitulatif */}
        <div className="bg-creme rounded-xl border border-doreClair/60 p-5 h-fit">
          <h2 className="font-medium text-brun mb-4">Récapitulatif</h2>
          <div className="space-y-3 mb-4">
            {items.map((it) => (
              <div key={it.lineId} className="flex gap-3">
                <img src={it.product.image} alt={it.product.name} className="w-14 h-18 object-cover rounded-md" />
                <div className="text-sm">
                  <p className="font-medium text-brun">{it.product.name}</p>
                  <p className="text-brunClair">{it.color} · {it.size} · Qté {it.quantity}</p>
                  <p className="text-brunClair">{(it.product.price * it.quantity).toFixed(2)} €</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-doreClair/60 pt-3 space-y-1 text-sm">
            <div className="flex justify-between text-brunClair">
              <span>Sous-total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-brunClair">
              <span>Livraison</span>
              <span>Gratuite</span>
            </div>
            <div className="flex justify-between font-medium text-brun pt-2 border-t border-doreClair/60 text-base">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Champ({ label, name, value, onChange, type = 'text', optionnel = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brun mb-1">
        {label} {!optionnel && <span className="text-dore">*</span>}
      </label>
      <input
        type={type}
        required={!optionnel}
        value={value}
        onChange={(e) => onChange((f) => ({ ...f, [name]: e.target.value }))}
        className="w-full px-3 py-2 rounded-md border border-doreClair bg-white focus:outline-none focus:ring-2 focus:ring-dore"
      />
    </div>
  )
}
