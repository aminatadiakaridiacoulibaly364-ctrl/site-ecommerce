# Noor Boutique

Site e-commerce de vêtements modestes (femme / homme / accessoires), construit avec
React + Vite + Tailwind CSS, paiement PayPal, prêt à déployer sur Netlify.

## Pages
1. **Accueil** (`/`) — catalogue avec filtres (catégorie, taille, prix)
2. **Fiche produit** (`/produit/:id`) — détails, choix couleur/taille/quantité, ajout au panier
3. **Panier** (`/panier`) — liste des articles, modification des quantités
4. **Commande & paiement** (`/commande`) — formulaire de livraison + bouton PayPal
5. **À propos** (`/a-propos`) — présentation de la marque
6. **Contact** (`/contact`) — formulaire de contact (compatible Netlify Forms)

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:5173

## Configurer PayPal

1. Créez un compte développeur sur https://developer.paypal.com
2. Récupérez votre "Client ID" (sandbox pour tester, live pour la production)
3. Copiez `.env.example` en `.env` et renseignez :
   ```
   VITE_PAYPAL_CLIENT_ID=votre_client_id
   ```
4. Sans `.env`, le site utilise automatiquement le mode sandbox de test (`sb`).

## Déployer sur Netlify

### Option A — via l'interface Netlify
1. Poussez ce projet sur GitHub/GitLab
2. Sur https://app.netlify.com, cliquez "Add new site" → "Import an existing project"
3. Sélectionnez le repo. Netlify détecte automatiquement `netlify.toml`
   (commande : `npm run build`, dossier publié : `dist`)
4. Dans "Site settings" → "Environment variables", ajoutez `VITE_PAYPAL_CLIENT_ID`
5. Déployez

### Option B — via Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

## Formulaire de contact

Le formulaire de la page Contact est prêt pour **Netlify Forms** (attribut
`data-netlify="true"`). Une fois déployé sur Netlify, les messages envoyés
apparaîtront automatiquement dans "Site settings" → "Forms" de votre tableau
de bord Netlify, sans backend à configurer.

## Personnaliser les produits

Modifiez le fichier `src/data/products.js` pour ajouter/modifier vos articles,
prix, couleurs, tailles, images et descriptions.

## Personnaliser les couleurs

La palette "Élégance sobre" (beige, doré, brun) est définie dans `tailwind.config.js` :
- `sable` (#F7F3EC) — fond principal
- `creme` (#EFE7D8) — fond secondaire
- `dore` (#A98A4B) — accent
- `brun` (#3E3424) — texte principal et boutons
