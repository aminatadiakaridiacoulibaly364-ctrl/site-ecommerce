import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  const [erreur, setErreur] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nom || !form.email || !form.message) {
      setErreur('Merci de remplir tous les champs obligatoires.')
      return
    }
    setErreur('')
    // Ici, vous pourriez envoyer le formulaire vers un service (Netlify Forms, Formspree, etc.)
    setEnvoye(true)
    setForm({ nom: '', email: '', sujet: '', message: '' })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <p className="text-dore uppercase tracking-widest text-xs mb-3">Une question ?</p>
      <h1 className="font-display text-4xl text-brun mb-3">Contactez-nous</h1>
      <p className="text-brunClair mb-8">
        Une question sur une commande, une taille, ou une demande particulière ?
        Écrivez-nous, nous répondons sous 24 à 48h.
      </p>

      {envoye && (
        <div className="bg-dore/10 border border-dore text-brun rounded-md p-4 mb-6 text-sm">
          Votre message a bien été envoyé. Nous vous répondrons rapidement.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" data-netlify="true">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brun mb-1">
              Nom <span className="text-dore">*</span>
            </label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-doreClair bg-white focus:outline-none focus:ring-2 focus:ring-dore"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brun mb-1">
              Email <span className="text-dore">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-doreClair bg-white focus:outline-none focus:ring-2 focus:ring-dore"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brun mb-1">Sujet</label>
          <input
            type="text"
            name="sujet"
            value={form.sujet}
            onChange={handleChange}
            placeholder="Question sur une commande, une taille..."
            className="w-full px-3 py-2 rounded-md border border-doreClair bg-white focus:outline-none focus:ring-2 focus:ring-dore"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brun mb-1">
            Message <span className="text-dore">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-doreClair bg-white focus:outline-none focus:ring-2 focus:ring-dore"
          />
        </div>

        {erreur && <p className="text-red-600 text-sm">{erreur}</p>}

        <button
          type="submit"
          className="bg-brun text-creme px-8 py-3 rounded-md font-medium hover:bg-dore transition-colors"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  )
}
