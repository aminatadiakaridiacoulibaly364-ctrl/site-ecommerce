const products = [
  // ===== FEMME =====
  {
    id: 1,
    name: 'Abaya Lina',
    category: 'Femme',
    price: 59.9,
    colors: ['Noir', 'Beige', 'Brun'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      "Abaya fluide en crêpe lourd, coupe ample et confortable. Doublure intérieure, manches longues évasées. Une pièce intemporelle pour toutes les occasions.",
    image:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Jilbab Maryam',
    category: 'Femme',
    price: 69.9,
    colors: ['Brun', 'Noir', 'Vert foncé'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Ensemble deux pièces (robe + cape), tissu épais non-transparent. Coupe couvrante et élégante, parfaite pour la sortie comme pour la prière.',
    image:
      'https://images.unsplash.com/photo-1542295474-a4357974ee3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Abaya Hafsa Brodée',
    category: 'Femme',
    price: 74.9,
    colors: ['Noir', 'Bordeaux', 'Vert bouteille'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Abaya en nida premium avec broderies fines sur les manches et le col. Coupe évasée, idéale pour les soirées et fêtes religieuses.',
    image:
      'https://images.unsplash.com/photo-1583846552350-a35bb70c5dd0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Abaya Kimono Sara',
    category: 'Femme',
    price: 64.9,
    colors: ['Beige', 'Gris taupe', 'Noir'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Abaya style kimono ouverte, à porter sur une robe ou un pantalon. Tissu léger et fluide, parfaite pour la mi-saison.',
    image:
      'https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Khimar Long Amina',
    category: 'Femme',
    price: 34.9,
    colors: ['Noir', 'Brun', 'Bleu marine'],
    sizes: ['Unique', 'Long (XL)'],
    description:
      'Khimar une pièce couvrant jusqu’aux hanches, tissu jersey extensible sans épingles. Couverture ample du buste, idéal au quotidien.',
    image:
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Robe Abaya Évasée Noor',
    category: 'Femme',
    price: 79.9,
    colors: ['Noir', 'Camel', 'Vert sauge'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Robe-abaya structurée à taille marquée par une ceinture assortie. Tissu épais qui tombe magnifiquement, parfaite pour un look soigné.',
    image:
      'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'Cape de Prière Rahma',
    category: 'Femme',
    price: 39.9,
    colors: ['Beige', 'Lilas', 'Gris perle'],
    sizes: ['Unique'],
    description:
      'Ensemble de prière une pièce avec jupe intégrée, tissu doux non-transparent. Facile à enfiler, se range dans sa pochette assortie.',
    image:
      'https://images.unsplash.com/photo-1631214524115-7e7f0a72c1e9?q=80&w=800&auto=format&fit=crop',
  },

  // ===== HOMME =====
  {
    id: 2,
    name: 'Qamis Yusuf',
    category: 'Homme',
    price: 49.9,
    colors: ['Blanc', 'Gris', 'Bleu nuit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description:
      'Qamis classique en coton respirant, col mao et boutonnage discret. Coupe droite confortable pour un usage quotidien ou pour la prière.',
    image:
      'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Joubba Ibrahim',
    category: 'Homme',
    price: 64.9,
    colors: ['Beige', 'Gris anthracite'],
    sizes: ['M', 'L', 'XL'],
    description:
      'Joubba ample et structurée, parfaite pour les grandes occasions. Finitions soignées, tissu de qualité supérieure.',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Qamis Brodé Khalid',
    category: 'Homme',
    price: 54.9,
    colors: ['Blanc', 'Ivoire', 'Beige'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description:
      'Qamis avec broderies discrètes sur le col et la poitrine, tissu polyviscose infroissable. Élégant pour les jours de fête.',
    image:
      'https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 13,
    name: 'Ensemble Qamis & Sirwal Tariq',
    category: 'Homme',
    price: 58.9,
    colors: ['Gris', 'Bleu marine', 'Noir'],
    sizes: ['M', 'L', 'XL'],
    description:
      'Ensemble deux pièces qamis court et sirwal assorti, coupe moderne et confortable. Idéal pour le sport ou le quotidien.',
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 14,
    name: 'Joubba Cérémonie Adam',
    category: 'Homme',
    price: 89.9,
    colors: ['Noir', 'Bordeaux', 'Vert émeraude'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description:
      'Joubba de cérémonie avec col brodé et boutons dorés. Coupe longue et imposante pour les grandes occasions (Aïd, mariage).',
    image:
      'https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 15,
    name: 'Qamis Léger Été Samir',
    category: 'Homme',
    price: 44.9,
    colors: ['Blanc', 'Gris clair', 'Sable'],
    sizes: ['M', 'L', 'XL'],
    description:
      'Qamis en lin mélangé, très léger et respirant. Parfait pour les journées chaudes et les longues prières du vendredi.',
    image:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
  },

  // ===== ACCESSOIRES FEMME =====
  {
    id: 3,
    name: 'Hijab Soie Douce',
    category: 'Accessoire',
    price: 14.9,
    colors: ['Beige', 'Doré', 'Vert sauge'],
    sizes: ['Unique'],
    description:
      'Hijab en voile satiné, toucher doux et tombé fluide. Ne glisse pas, idéal pour un drapé élégant au quotidien.',
    image:
      'https://images.unsplash.com/photo-1611791484670-ce19b801d192?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Sous-hijab Confort',
    category: 'Accessoire',
    price: 7.9,
    colors: ['Noir', 'Beige', 'Blanc'],
    sizes: ['Unique'],
    description:
      'Bonnet sous-hijab en coton extensible, maintien parfait toute la journée sans glisser.',
    image:
      'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 16,
    name: 'Hijab Jersey Premium',
    category: 'Accessoire',
    price: 12.9,
    colors: ['Brun', 'Camel', 'Noir', 'Gris perle'],
    sizes: ['Unique'],
    description:
      'Hijab en jersey extensible, sans repassage nécessaire. Tombé parfait et maintien toute la journée sans épingle.',
    image:
      'https://images.unsplash.com/photo-1623609163859-ca93c959b98a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 17,
    name: 'Hijab Mousseline Légère',
    category: 'Accessoire',
    price: 11.9,
    colors: ['Blanc cassé', 'Rose poudré', 'Bleu ciel'],
    sizes: ['Unique'],
    description:
      'Voile en mousseline aérienne, idéal pour les saisons chaudes. Coloris doux pour un look lumineux.',
    image:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 18,
    name: 'Hijab Châle Cachemire',
    category: 'Accessoire',
    price: 18.9,
    colors: ['Brun chocolat', 'Bordeaux', 'Gris anthracite'],
    sizes: ['Unique'],
    description:
      'Châle épais façon cachemire, parfait pour l’hiver. Se drape facilement en hijab ou en étole.',
    image:
      'https://images.unsplash.com/photo-1611791484670-ce19b801d192?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 19,
    name: 'Pince Magnétique Hijab (lot de 5)',
    category: 'Accessoire',
    price: 6.9,
    colors: ['Doré', 'Argenté'],
    sizes: ['Unique'],
    description:
      'Pinces magnétiques discrètes pour fixer le hijab sans trouer le tissu. Lot de 5 pièces, ne marque pas le voile.',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 20,
    name: 'Ceinture Abaya Tressée',
    category: 'Accessoire',
    price: 9.9,
    colors: ['Doré', 'Noir', 'Brun'],
    sizes: ['Unique'],
    description:
      'Ceinture fine tressée pour marquer la taille sur une abaya ou un kimono. Finitions métalliques élégantes.',
    image:
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop',
  },

  // ===== ACCESSOIRES HOMME =====
  {
    id: 21,
    name: 'Kufi Brodé',
    category: 'Accessoire',
    price: 9.9,
    colors: ['Blanc', 'Noir', 'Beige'],
    sizes: ['Unique'],
    description:
      'Calotte de prière (kufi) en coton brodé, légère et confortable pour un port prolongé.',
    image:
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 22,
    name: 'Tapis de Prière Voyage',
    category: 'Accessoire',
    price: 16.9,
    colors: ['Brun', 'Vert', 'Bordeaux'],
    sizes: ['Unique'],
    description:
      'Tapis de prière fin et pliable avec pochette de transport, idéal pour le bureau ou les déplacements.',
    image:
      'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 23,
    name: 'Sebha (Chapelet) Bois',
    category: 'Accessoire',
    price: 8.9,
    colors: ['Bois naturel', 'Noir'],
    sizes: ['33 perles', '99 perles'],
    description:
      'Chapelet de dhikr en perles de bois naturel, toucher doux et finition artisanale.',
    image:
      'https://images.unsplash.com/photo-1601814933824-fd0b574dd24b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 24,
    name: 'Parfum Oud Royal (sans alcool)',
    category: 'Accessoire',
    price: 22.9,
    colors: ['Oud Royal', 'Musc Blanc', 'Ambre'],
    sizes: ['15ml', '30ml'],
    description:
      'Parfum concentré sans alcool, tenue longue durée. Compatible avec l’état d’ihram et la prière.',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 25,
    name: 'Chaussettes de Prière Antidérapantes',
    category: 'Accessoire',
    price: 6.9,
    colors: ['Noir', 'Blanc', 'Gris'],
    sizes: ['39-42', '43-46'],
    description:
      'Chaussettes fines respectant les conditions des ablutions, semelle antidérapante pour le confort à la mosquée.',
    image:
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 26,
    name: 'Pochette de Voyage Joubba',
    category: 'Accessoire',
    price: 13.9,
    colors: ['Noir', 'Beige'],
    sizes: ['Unique'],
    description:
      'Housse de transport pour qamis et joubba, évite les plis pendant les déplacements et l’Omra/Hajj.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
  },
]

export default products
