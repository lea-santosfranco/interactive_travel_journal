# Voyage au Portugal

Un carnet de voyage interactif dédié au Portugal, conçu comme un journal de bord vintage. L'utilisateur explore 12 villes via une carte SVG cliquable, puis découvre pour chacune une page richement illustrée : histoire, gastronomie, lieux à visiter et notes personnelles manuscrites.

---

## Aperçu

| Page | Description |
|---|---|
| **Carte interactive** | Carte SVG du Portugal avec zoom animé au clic sur une région |
| **Carnet de région** | Page détaillée façon carnet de voyage (histoire, table, explorer, notes) |
| **Navigation mobile** | Liste déroulante des villes en remplacement de la carte sur petit écran |

---

## Stack technique

- **React 19** — UI et composants
- **React Router DOM 7** — Routing côté client
- **Framer Motion 12** — Animations de page et transitions de zoom
- **Tailwind CSS 4** — Style
- **Vite 8** — Bundler et serveur de développement

---

## Structure du projet

```
src/
├── main.jsx                  # Point d'entrée
├── App.jsx                   # Configuration des routes
├── TransitionContext.jsx     # Contexte React pour l'effet de zoom
├── data.jsx                  # Données des 12 villes
├── pages/
│   ├── MapPage.jsx           # Page d'accueil avec la carte
│   └── CarnetPage.jsx        # Page individuelle d'une ville
└── components/
    ├── PortugalMap.jsx       # Carte SVG interactive
    ├── Carnet.jsx            # Composant de détail d'une ville
    └── ZoomOverlay.jsx       # Effet visuel de transition
```

---

## Villes couvertes

Lisbonne · Porto · Sintra · Óbidos · Nazaré · Coimbra · Aveiro · Braga · Guimarães · Évora · Lagos · Faro

---

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build
```

---

## Fonctionnalités

- **Carte cliquable** avec mise en évidence de la région survolée
- **Transition zoom** animée depuis le point de clic vers la page de région
- **Pages carnet** structurées en quatre sections : *Historia*, *À table*, *À explorer*, *Carnet du voyageur*
- **Galerie lightbox** sur les photos de plats
- **Animations au scroll** via Framer Motion
- **Design vintage** : texture papier vieilli, filtres sépia, typographie manuscrite (Caveat) et serif (Cormorant Garamond)
- **Responsive** : carte sur desktop, liste de villes sur mobile

---

## Données

Toutes les données sont centralisées dans [src/data.jsx](src/data.jsx). Chaque région expose :

```js
{
  id: "lisbonne",
  nom: "Lisbonne",
  subtitle: "...",
  accent: "#c0392b",       // couleur d'accent propre à la région
  photo: "...",            // URL Unsplash (photo principale)
  historia: "...",         // récit historique
  food: [                  // 5 plats typiques
    { nom: "...", note: "...", photo: "..." }
  ],
  explore: [               // 5 lieux à voir
    { lieu: "...", note: "..." }
  ],
  carnet: "..."            // note manuscrite personnelle
}
```

---

## Auteur

Léa Santos Franco — [lea.santosfrancopro@gmail.com](mailto:lea.santosfrancopro@gmail.com)
