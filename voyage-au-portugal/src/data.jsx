// Verified Unsplash CDN URLs (images.unsplash.com, non-premium)
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop&auto=format`
const f = (id) => u(id, 400)

// Food photo pool (verified working)
const FOOD = {
  nata_lisbon:   `1618250713296-ee011768e525`, // pastel de nata Manteigaria Lisbon
  nata_tray:     `1591107576521-87091dc07797`, // pastries on silver tray
  nata_plate:    `1716360806681-b4defdfba134`, // pastéis de nata on plate
  nata_funchal:  `1668396001678-d33131800ea7`, // pastéis de nata Funchal
  bacalhau:      `1764333580740-b327847301b1`, // bacalhau à Gomes de Sá
  clams_plate:   `1633960414108-aa45c121c4c4`, // fresh clams on white plate
  clams_basket:  `1762062738089-5d0d3040014d`, // basket of clams
  meat:          `1692221671835-71bbddaf6948`, // meat being cut
  port_bottle:   `1649446326554-82b995e11bdc`, // port wine glasses + bottle
  wine_glass:    `1633369918440-54333474f425`, // glass of port wine Porto
  octopus:       `1583180527676-8dbfe98c2c87`, // octopus
  seafood_pasta: `1712746785116-4a901521fe8b`, // seafood pasta with lemon
  seafood_bowl:  `1595866204663-8d45f63afd25`, // bowl with clams & barnacles Algarve
  drink:         `1727989806974-43836c555326`, // liqueur/cocktail glass
  grill:         `1670879900000-a63d9accf054`, // food on grill
}

export const REGIONS = {
  lisbonne: {
    id: `lisbonne`,
    nom: `Lisbonne`,
    subtitle: `La Capitale`,
    tagline: `Sept collines, mille lumières, une âme impossible à oublier.`,
    accent: `#b5451b`,
    photo: u(`1753284679118-2ba6c37ee55d`),
    historia: `Lisbonne est l'une des plus anciennes capitales d'Europe, posée au bord du Tage comme une aquarelle qui aurait séché au soleil. Les Maures l'ont tenue pendant quatre siècles, les navigateurs en ont fait le centre du monde, et le tremblement de terre de 1755 l'a presque effacée — avant qu'elle ne se réinvente en quelques décennies. Aujourd'hui elle vit sur ses collines comme elle a toujours vécu : lentement, avec une élégance mélancolique que les Portugais appellent saudade.`,
    food: [
      { nom: `Pastéis de Belém`, note: `La recette originale, gardée secrète depuis 1837 dans la fabrique de Belém — la crème est plus liquide qu'ailleurs, le feuilleté plus sombre.`, photo: f(FOOD.nata_lisbon) },
      { nom: `Bacalhau à Brás`, note: `Morue effilée mêlée d'œufs brouillés et de paille de pommes de terre frites, parsemée d'olives noires. Un plat humble devenu emblématique.`, photo: f(FOOD.bacalhau) },
      { nom: `Ginjinha`, note: `Liqueur de griotte servie dans un minuscule verre de shot, souvent accompagnée d'une cerise au fond. À boire debout, au comptoir, comme un vrai Lisboète.`, photo: f(FOOD.drink) },
      { nom: `Amêijoas à Bulhão Pato`, note: `Palourdes ouvertes à la vapeur avec ail, huile d'olive, coriandre et vin blanc. Simple, parfait, maritime.`, photo: f(FOOD.clams_plate) },
      { nom: `Bifanas`, note: `Sandwich au porc mariné dans la sauce piri-piri, servi dans un pain mou. Le fast-food lisboète par excellence, vendu aux coins de rue depuis toujours.`, photo: f(FOOD.meat) },
    ],
    explore: [
      { lieu: `Alfama`, note: `Le quartier le plus ancien de la ville, labyrinthe de ruelles blanches et bleues où le fado sort des fenêtres ouvertes le soir.` },
      { lieu: `Mosteiro dos Jerónimos`, note: `Chef-d'œuvre du style manuélin à Belém — les colonnes semblent sculptées dans de la dentelle de pierre.` },
      { lieu: `LX Factory`, note: `Une ancienne usine textile reconvertie en marché créatif, ouvert le dimanche, avec bouquinistes, créateurs et bonne cuisine.` },
      { lieu: `Miradouro da Graça`, note: `Le belvédère le plus secret de la ville, loin des touristes, avec la meilleure vue sur le château et le Tage.` },
      { lieu: `Museu Nacional do Azulejo`, note: `Cinq siècles d'azulejos retracés dans un couvent du XVIe siècle. Le panneau panoramique de Lisbonne avant le tremblement de terre vaut seul le déplacement.` },
    ],
    carnet: `J'ai passé une heure assise sur un banc de l'Alfama, à écouter une femme chanter par sa fenêtre sans savoir si elle s'adressait à quelqu'un ou juste au ciel. Le soir, le Tage devient orange et les trams grincent dans les pentes — on dirait une ville qui résiste doucement au temps. Je reviendrai, c'est certain.`,
  },

  porto: {
    id: `porto`,
    nom: `Porto`,
    subtitle: `La Cité Invincible`,
    tagline: `Invaincue, rugueuse, généreuse — la ville qui a donné son nom au vin.`,
    accent: `#7b2d8b`,
    photo: u(`1717451061775-1d074d685d5e`),
    historia: `Porto est une ville qui ne cherche pas à séduire — elle se laisse découvrir. Construite sur des collines de granit au-dessus du Douro, elle a été pendant des siècles le grand port de sortie du vin qui porte son nom. Ses façades en azulejos bleus et blancs, ses iglesias baroques dorées à la feuille, ses ponts de fer forgé enjambant le fleuve : tout ici raconte une histoire de commerce, de résistance et de fierté. Les Portuenses disent que Porto travaille pendant que Lisbonne s'amuse — et ils en sont visiblement fiers.`,
    food: [
      { nom: `Francesinha`, note: `Sandwich XXL de viandes superposées, noyé dans une sauce tomate-bière-épices et couvert d'un œuf sur le plat. Brutal, réconfortant, unique au monde.`, photo: f(FOOD.grill) },
      { nom: `Tripas à moda do Porto`, note: `Tripes aux haricots blancs et saucisse — le plat qui a valu aux habitants de Porto le surnom de tripeiros. Une histoire de sacrifice et de solidarité.`, photo: f(FOOD.meat) },
      { nom: `Vinho do Porto`, note: `Un apéritif, un digestif, une religion. Le blanc sec est particulièrement sous-estimé — essayez-le frais avec des amandes.`, photo: f(FOOD.port_bottle) },
      { nom: `Bacalhau com natas`, note: `Gratin de morue à la crème, doré au four. Décadent et terriblement bon par temps de pluie.`, photo: f(FOOD.bacalhau) },
      { nom: `Pastel de feijão`, note: `Petite tarte aux haricots blancs de Vila do Conde — plus délicate qu'elle n'y paraît, avec un parfum d'amande et de cannelle.`, photo: f(FOOD.nata_tray) },
    ],
    explore: [
      { lieu: `Ribeira`, note: `Le long du quai, sous les maisons colorées qui semblent tenir ensemble par miracle. Le soir, les Rabelos amarrés reflètent dans le Douro.` },
      { lieu: `Livraria Lello`, note: `Peut-être la plus belle librairie du monde : escalier en colimaçon rouge, vitraux Art Nouveau, et une atmosphère de roman gothique.` },
      { lieu: `Caves de Vila Nova de Gaia`, note: `De l'autre côté du pont, les grandes maisons de Porto vieillissent leurs vins dans des caves au sol de terre battue. Sandeman, Graham's, Taylor's — visite guidée et dégustation.` },
      { lieu: `Igreja de São Francisco`, note: `L'intérieur entièrement recouvert de bois doré à la feuille d'or — 200 kilos d'or appliqués au XVIIIe siècle. Époustouflant et légèrement excessif.` },
      { lieu: `Serralves`, note: `Un musée d'art contemporain dans un parc Art Déco en bordure de ville. L'architecture de Siza Vieira dialogue parfaitement avec les jardins.` },
    ],
    carnet: `La pluie tombait en biais sur le pont Dom Luís quand j'ai compris pourquoi Porto existe. Ce n'est pas une ville faite pour le beau temps — elle est faite pour les manteaux serrés, le vin chaud et les conversations qui n'en finissent pas. La Francesinha était trop grande, trop grasse, absolument parfaite.`,
  },

  sintra: {
    id: `sintra`,
    nom: `Sintra`,
    subtitle: `Le Village Romantique`,
    tagline: `Un décor de conte, des palais dans les nuages, une forêt qui garde ses secrets.`,
    accent: `#2d6e4e`,
    photo: u(`1562195168-c82fea0f0953`),
    historia: `Sintra a été pendant des siècles la résidence d'été de la famille royale portugaise, perchée dans les monts qui surplombent l'Atlantique. Byron la qualifiait d'Eden glorieux après y avoir séjourné en 1809. Ses palais extravagants — chacun issu d'une époque et d'un style différents — émergent d'une forêt dense et perpétuellement brumeuse. La nature y est si luxuriante, si obstinément verte, qu'elle donne l'impression d'avoir englouti les constructions humaines plutôt que de les accueillir.`,
    food: [
      { nom: `Travesseiros`, note: `Feuilletés garnis de crème d'amande et d'œuf, en forme d'oreiller — spécialité de la Piriquita depuis 1862.`, photo: f(FOOD.nata_plate) },
      { nom: `Queijadas de Sintra`, note: `Petites tartelettes de fromage frais, cannelle et sucre. Légères, anciennes, indissociables de la ville.`, photo: f(FOOD.nata_funchal) },
      { nom: `Adega das Caves`, note: `Le restaurant local préféré des habitants — grillades simples, vin de la région, terrasse cachée dans la ruelle.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Vin de Colares`, note: `L'un des rares vignobles au monde plantés dans le sable — les phylloxéras n'y ont jamais survécu. Un vin minéral, rare, presque introuvable ailleurs.`, photo: f(FOOD.wine_glass) },
      { nom: `Mel de Sintra`, note: `Le miel de bruyère et d'eucalyptus des collines environnantes — vendu dans les petites épiceries du centre, à ramener absolument.`, photo: f(FOOD.seafood_bowl) },
    ],
    explore: [
      { lieu: `Palácio da Pena`, note: `Une folie romantique du XIXe siècle peinte en jaune et rouge, suspendue dans les nuages. Kitsch assumé et magnifique.` },
      { lieu: `Quinta da Regaleira`, note: `Un domaine ésotérique avec puits initiatiques, tunnels secrets et symbolisme maçonnique. Le lieu le plus étrange de la région.` },
      { lieu: `Palácio Nacional de Sintra`, note: `Les deux cheminées coniques qui dominent le centre-ville cachent une cuisine médiévale et des salles couvertes d'azulejos.` },
      { lieu: `Cabo da Roca`, note: `Le point le plus occidental de l'Europe continentale. Le vent y est constant, la vue sur l'Atlantique infinie, l'émotion inattendue.` },
      { lieu: `Castelo dos Mouros`, note: `Les remparts maures du IXe siècle serpentent à travers la forêt — la randonnée depuis le centre de Sintra vaut mieux que le bus.` },
    ],
    carnet: `J'ai pris le chemin à pied jusqu'au Palácio da Pena sous la brume, et à mi-parcours la forêt était si dense que j'entendais seulement le vent dans les fougères. Quand le château est apparu, rouge et jaune dans le gris, j'ai eu l'impression de lire un livre d'images. Sintra n'est pas vraiment réelle — ou alors c'est la réalité qui est un peu décevante à côté.`,
  },

  obidos: {
    id: `obidos`,
    nom: `Óbidos`,
    subtitle: `Le Village Médiéval`,
    tagline: `Une cité médiévale intacte, offerte à la reine le jour de ses noces.`,
    accent: `#8b6914`,
    photo: u(`1586029714704-d864f4603de0`),
    historia: `Óbidos est l'une des villes médiévales les mieux préservées de toute la péninsule ibérique. Ses remparts blancs et jaunes entourent un dédale de rues fleuries de bougainvilliers, un château converti en pousada et une église au sol recouvert d'azulejos du XVIIe siècle. Le roi Dinis l'offrit à sa femme Isabel d'Aragon en 1282 comme cadeau de mariage — une tradition qui dura plusieurs siècles, chaque nouvelle reine recevant la ville en dot nuptiale.`,
    food: [
      { nom: `Ginjinha d'Óbidos`, note: `Servie dans un verre en chocolat blanc que l'on croque ensuite — l'invention locale la plus délicieuse de tout le Portugal.`, photo: f(FOOD.drink) },
      { nom: `Amêijoas na cataplana`, note: `Palourdes cuites dans la cataplana en cuivre, avec tomate, chorizo et poivron. Spécialité remontée du Sud, adoptée avec enthousiasme.`, photo: f(FOOD.clams_basket) },
      { nom: `Caldeirada de peixe`, note: `Ragoût de poissons à l'huile d'olive et au vin blanc — chaque restaurant a sa version, aucune ne ressemble à une autre.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Queijo fresco`, note: `Fromage frais local, servi au petit-déjeuner avec du miel ou de la confiture de figues. Doux, humide, matinal.`, photo: f(FOOD.nata_tray) },
      { nom: `Licor de Abóbora`, note: `Liqueur de courge dorée, sucrée et épicée — les producteurs locaux en sont très fiers, à raison.`, photo: f(FOOD.wine_glass) },
    ],
    explore: [
      { lieu: `Muralhas`, note: `Le tour complet des remparts à pied — étroit, sans garde-corps à certains endroits, avec une vue à 360° sur les collines et l'ancienne lagune.` },
      { lieu: `Igreja de Santa Maria`, note: `L'église où le roi Alphonse V épousa sa cousine Isabelle à 8 et 10 ans. Les azulejos bleus et blancs du XVIIe siècle couvrent entièrement les murs.` },
      { lieu: `Castelo de Óbidos`, note: `Le château lui-même est converti en pousada de luxe, mais les extérieurs sont librement accessibles — monter sur les tours vaut le détour.` },
      { lieu: `Festival Internacional de Chocolate`, note: `En mars, la ville entière devient une vitrine de créations en chocolat. Kitsch, joyeux, délicieux.` },
      { lieu: `Lagoa de Óbidos`, note: `À quelques kilomètres, une lagune naturelle où kayak et kitesurf côtoient des hérons posés sur les roseaux.` },
    ],
    carnet: `J'ai acheté ma ginjinha dans un verre en chocolat à neuf heures du matin — et je ne m'en excuse pas. Les remparts étaient encore humides de rosée, il n'y avait presque personne, et les chats dormaient sur les escaliers blancs. Óbidos au lever du soleil, avant les cars de tourisme, c'est quelque chose d'assez parfait.`,
  },

  nazare: {
    id: `nazare`,
    nom: `Nazaré`,
    subtitle: `La Terre des Vagues`,
    tagline: `Les vagues les plus hautes du monde, et des femmes en sept jupons.`,
    accent: `#1a5c8a`,
    photo: u(`1670097937762-943d7f0e8d80`),
    historia: `Nazaré est un village de pêcheurs devenu célèbre dans le monde entier pour deux raisons radicalement différentes : ses traditions matriarcales intactes — les femmes portent encore sept jupons superposés lors des fêtes — et ses vagues géantes de Praia do Norte, où les surfeurs battent régulièrement des records mondiaux. Perchée sur la falaise au-dessus de la plage, la Sítio offre une vue vertigineuse sur l'Atlantique et sur le village en contrebas, que l'on rejoint par un funiculaire centenaire.`,
    food: [
      { nom: `Peixe seco`, note: `Poisson séché suspendu sur des cordes à linge, séché au vent de l'Atlantique. On l'achète entier dans les ruelles du vieux village — odeur puissante, goût inoubliable.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Caldeirada de tamboril`, note: `Ragoût de lotte à l'huile d'olive, pommes de terre et tomate. La lotte absorbe tous les parfums — ici elle est irréprochable.`, photo: f(FOOD.seafood_bowl) },
      { nom: `Percebes`, note: `Pouces-pieds accrochés aux rochers par des pêcheurs intrépides. On les mange bouillis avec du sel de mer, en les ouvrant à la main. Iodé, intense, précieux.`, photo: f(FOOD.clams_basket) },
      { nom: `Filetes de polvo`, note: `Filets de poulpe panés et frits, croustillants dehors, tendres dedans. Servis avec une salade de riz ou des légumes grillés.`, photo: f(FOOD.octopus) },
      { nom: `Açorda de marisco`, note: `Soupe de pain à l'ail, aux œufs et aux fruits de mer — épaisse, rustique, nourrissante. La version de la mer de l'açorda alentejana.`, photo: f(FOOD.clams_plate) },
    ],
    explore: [
      { lieu: `Praia do Norte`, note: `La plage des vagues géantes — entre octobre et mars, les spots de surf y sont actifs. Même sans vagues monstre, la force de l'océan y est palpable.` },
      { lieu: `Sítio`, note: `Le quartier en haut de la falaise, avec son sanctuaire, sa place pavée et sa terrasse suspendue au-dessus de la mer. On y monte en funiculaire.` },
      { lieu: `Mercado Municipal`, note: `Le matin tôt, les pêcheurs déchargent directement au marché. Le meilleur poisson part avant 8h — arriver à l'ouverture.` },
      { lieu: `Praia da Nazaré`, note: `La grande plage familiale du village — longue, large, ventée. Les rayures rouge et vert des tentes de plage y sont typiques de la région.` },
      { lieu: `Museu Dr. Joaquim Manso`, note: `Un petit musée dédié aux traditions locales — costumes, barques peintes, photographies d'époque des pêcheurs et de leurs familles.` },
    ],
    carnet: `Je suis montée à la Sítio à pied par le sentier qui longe la falaise, et en arrivant en haut j'ai vu la mer de si loin qu'elle semblait immobile. Un homme vendait des sardines grillées sur un chariot rouge. J'ai mangé debout, face à l'Atlantique, en pensant que certains endroits n'ont pas besoin d'être expliqués.`,
  },

  coimbra: {
    id: `coimbra`,
    nom: `Coimbra`,
    subtitle: `La Cité du Savoir`,
    tagline: `La plus vieille université du monde, le fado le plus triste du Portugal.`,
    accent: `#8b1a1a`,
    photo: u(`1672995259409-f749336b646b`),
    historia: `Coimbra a été la capitale du Portugal pendant un siècle, avant que Lisbonne ne prenne le relais. Son université, fondée en 1290, est l'une des plus anciennes d'Europe et classe encore ses étudiants dans des troupes à cape noire — les académiques y perpétuent des traditions séculaires avec un mélange de fierté et de nostalgie. La ville vit au rythme de l'année universitaire : en mai, les étudiants brûlent leurs cahiers à la fin des examens dans un rituel cathartique appelé a Queima das Fitas.`,
    food: [
      { nom: `Chanfana`, note: `Cabri mijoté dans du vin rouge pendant des heures, dans une marmite en argile noire. Le plat traditionnel des villages autour de Coimbra — profond et résineux.`, photo: f(FOOD.meat) },
      { nom: `Leitão da Bairrada`, note: `Cochon de lait rôti à la broche, peau croustillante comme du verre, chair fondante. La spécialité de la région de Bairrada, à 30 km à l'ouest.`, photo: f(FOOD.grill) },
      { nom: `Arroz de lampreia`, note: `Riz à la lamproie, préparée de décembre à avril uniquement — le poisson primitif remonté du Mondego est une expérience gustative difficile à qualifier mais impossible à oublier.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Pastéis de Santa Clara`, note: `Chaussons à la pâte d'amande et d'œufs — recette des couvents de l'autre rive du Mondego, transmise depuis le XVIIe siècle.`, photo: f(FOOD.nata_lisbon) },
      { nom: `Vinho da Bairrada`, note: `Un rouge tannique et fruité, produit sur les argiles de la Bairrada voisine. Parfait avec le leitão — une alliance régionale évidente.`, photo: f(FOOD.port_bottle) },
    ],
    explore: [
      { lieu: `Biblioteca Joanina`, note: `La bibliothèque baroque du XVIIIe siècle avec ses plafonds peints en trompe-l'œil et ses 300 000 volumes. Des chauves-souris y vivent encore la nuit pour protéger les livres des insectes.` },
      { lieu: `Sé Velha`, note: `La cathédrale romane du XIIe siècle, sobre et militaire, avec une terrasse qui plonge sur les toits orange de la ville.` },
      { lieu: `Jardim Botânico`, note: `Un jardin botanique du XVIIIe siècle avec une serre portugaise en fer forgé et des collections remarquables de fougères arborescentes.` },
      { lieu: `Portugal dos Pequenitos`, note: `Un parc miniature des années 1940 avec des répliques de monuments portugais à l'échelle pour enfants — kitsch, charmant, anachronique.` },
      { lieu: `Fado de Coimbra`, note: `Une version distincte du fado lisboète — plus mélancolique, chanté exclusivement par des hommes en cape noire, souvent dans les ruelles de la Rua do Quebra-Costas.` },
    ],
    carnet: `À Coimbra, j'ai entendu le fado pour la première fois de ma vie dans sa version universitaire — trois étudiants en cape noire, au coin d'une rue, chantaient comme si personne ne les regardait. La bibliothèque Joanina sentait le vieux cuir et l'encre, et au plafond les anges jouaient de la trompette dans un ciel bleu pâle. Il y a des villes qui sentent le savoir.`,
  },

  aveiro: {
    id: `aveiro`,
    nom: `Aveiro`,
    subtitle: `La Venise Portugaise`,
    tagline: `Des canaux, des bateaux peints, et le sel qui fait briller le sol.`,
    accent: `#1a7a6e`,
    photo: u(`1531772337062-9d94547f333f`),
    historia: `Aveiro est surnommée la Venise portugaise pour ses canaux qui sillonnent le centre-ville et les moliceiros, ces barques aux proues peintes de scènes naïves ou érotiques qui servaient autrefois à récolter les algues. La ria d'Aveiro, un lagon côtier de 45 km de long, est l'un des écosystèmes les plus riches de la côte atlantique. Les marais salants aux reflets roses et oranges sous la lumière de fin de journée sont une vision qui surprend tous les visiteurs.`,
    food: [
      { nom: `Ovos moles`, note: `Pâte d'œuf et sucre enfermée dans des hosties en forme de poisson, coquillage ou barillet — la confiserie emblématique d'Aveiro depuis le XVIe siècle.`, photo: f(FOOD.nata_plate) },
      { nom: `Enguias fritas`, note: `Anguilles de la ria frites dans l'huile d'olive — croustillantes, grasses, avec une salade de tomates simples à côté.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Salicórnia`, note: `La plante des marais salants servie marinée, en salade ou en tapas dans les restaurants du front de mer. Iodée, croquante, marine.`, photo: f(FOOD.seafood_bowl) },
      { nom: `Lulas recheadas`, note: `Calamars farcis à la viande hachée et aux herbes, cuits au four dans un fond de tomate. Un plat de dimanche reconverti en restaurant.`, photo: f(FOOD.octopus) },
      { nom: `Flor de sal d'Aveiro`, note: `Le sel récolté à la main dans les salines locales — les cristaux fins et légèrement humides se posent sur tout comme une neige précieuse.`, photo: f(FOOD.wine_glass) },
    ],
    explore: [
      { lieu: `Tour en Moliceiro`, note: `La balade en barque dans les canaux — 45 minutes depuis le canal central, avec un gondolier qui commente en portugais. Choisir un moliceiro aux proues illustrées.` },
      { lieu: `Museu de Aveiro`, note: `Installé dans un couvent du XVe siècle, avec une remarquable collection d'azulejos et le sarcophage de la princesse Joana.` },
      { lieu: `Salines de Aveiro`, note: `Les marais salants aux abords de la ville — se lever tôt pour les voir roses au lever du soleil, avec les flamants roses qui pataugent.` },
      { lieu: `Costa Nova`, note: `À 10 km, les fameuses maisons à rayures verticales colorées face à la plage — une curiosité architecturale photographiée des milliers de fois.` },
      { lieu: `Praia de Barra`, note: `La plage la plus longue de la région, avec le phare le plus haut du Portugal. Ventée, sauvage, idéale pour les longues marches.` },
    ],
    carnet: `J'ai pris un moliceiro à 9h du matin, quand les canaux étaient encore dans l'ombre et que l'eau était noire comme du thé. Le batelier chantait à mi-voix en ramant, et les proues peintes du bateau représentaient une scène dont je n'ai pas compris la légende. Les ovos moles du comptoir de la librairie, achetés dans une boîte en forme de barillet, ont duré jusqu'à Lisbonne.`,
  },

  braga: {
    id: `braga`,
    nom: `Braga`,
    subtitle: `La Cité des Archevêques`,
    tagline: `La Rome du Portugal, les meilleures fêtes du printemps, et un baroque débridé.`,
    accent: `#5c1a5c`,
    photo: u(`1667853838119-5092a0070dba`),
    historia: `Braga est la ville la plus ancienne du Portugal, fondée par les Romains sous le nom de Bracara Augusta. Elle a été pendant des siècles le siège archiépiscopal le plus puissant de la péninsule ibérique, et ses archevêques ont laissé une marque baroque profonde sur l'architecture de la ville. Aujourd'hui Braga est aussi une ville universitaire dynamique — ses étudiants et ses traditions religieuses coexistent dans une tension productive et totalement portugaise.`,
    food: [
      { nom: `Rojões à minhota`, note: `Porc rôti dans sa propre graisse avec cumin et vin vinho verde — le plat traditionnel du Minho, servi avec des couennes croustillantes.`, photo: f(FOOD.grill) },
      { nom: `Papas de sarrabulho`, note: `Bouillie de sang de porc avec diverses viandes — un plat de fête qui remonte au Moyen Âge, servi avec du cumin.`, photo: f(FOOD.meat) },
      { nom: `Vinho verde`, note: `Le vin légèrement pétillant et frais du Minho — blanc, rosé ou rouge, il accompagne tout et se boit à toute heure.`, photo: f(FOOD.wine_glass) },
      { nom: `Bacalhau à Gomes de Sá`, note: `Morue en lamelles avec pommes de terre, oignons et œufs durs, garnie d'olives. La recette du cuisinier portuense Gomes de Sá, adoptée dans tout le Nord.`, photo: f(FOOD.bacalhau) },
      { nom: `Pudim Abade de Priscos`, note: `Flan au lard fumé et au porto — une recette de curé du XIXe siècle, sucrée, riche et complètement improbable.`, photo: f(FOOD.nata_plate) },
    ],
    explore: [
      { lieu: `Bom Jesus do Monte`, note: `Le sanctuaire baroque au sommet d'une colline, accessible par un escalier en zigzag symbolisant la Via Crucis. On monte à pied ou par l'ascenseur hydraulique le plus ancien d'Europe.` },
      { lieu: `Sé de Braga`, note: `La cathédrale fondée au XIe siècle — son mélange de styles du roman au baroque en fait un manifeste de l'histoire portugaise en miniature.` },
      { lieu: `Museu dos Biscainhos`, note: `Un palais baroque du XVIIIe siècle avec jardins à la française et une collection de faïences et de mobilier d'époque.` },
      { lieu: `Semana Santa`, note: `Les processions de la Semaine Sainte à Braga sont les plus spectaculaires du Portugal — robes de pénitents, silence, bougies. À vivre une fois dans une vie.` },
      { lieu: `Guimarães`, note: `À 20 km, le berceau de la nation portugaise — château où naquit Afonso Henriques, premier roi du Portugal. Une journée complète facilement.` },
    ],
    carnet: `Le Bom Jesus est l'une des choses les plus étranges que j'aie montées — chaque palier du grand escalier est une fontaine qui représente un sens ou une vertu. En haut, un vent frais soufflait sur la forêt de pins, et la ville de Braga s'étalait en contrebas comme une carte postale oubliée dans un livre de prières.`,
  },

  guimaraes: {
    id: `guimaraes`,
    nom: `Guimarães`,
    subtitle: `Le Berceau de la Nation`,
    tagline: `Ici naquit le Portugal — le centre historique le mieux préservé du pays.`,
    accent: `#4a6741`,
    photo: u(`1666798437958-baaf5d448081`),
    historia: `Aqui nasceu Portugal — ces mots sont gravés sur les murs du château de Guimarães, où naquit Afonso Henriques, premier roi du Portugal, en 1109. La ville médiévale est l'une des mieux préservées de la péninsule ibérique : ses rues pavées, ses maisons à arcades, ses places ombragées de tilleuls ont été classées au patrimoine mondial de l'UNESCO en 2001. Capitale européenne de la culture en 2012, Guimarães a su se réinventer sans trahir son identité.`,
    food: [
      { nom: `Vitela à moda do Minho`, note: `Veau du Minho rôti lentement à l'ail et au romarin — la viande est si tendre qu'elle se défait à la fourchette.`, photo: f(FOOD.meat) },
      { nom: `Sarrabulho de Guimarães`, note: `Version locale du plat sanguin du Minho, servie avec du riz de cumin. Plus épicée qu'à Braga, plus rustique.`, photo: f(FOOD.grill) },
      { nom: `Torta de Guimarães`, note: `Roulé à la crème d'œuf — fin, doré, sucré avec mesure. La pâtisserie emblématique de la ville.`, photo: f(FOOD.nata_tray) },
      { nom: `Bacalhau à narcisa`, note: `Morue grillée simplement à l'huile d'olive et à l'ail, sans artifice. L'honnêteté du Nord.`, photo: f(FOOD.bacalhau) },
      { nom: `Vinho verde Alvarinho`, note: `Le cépage roi du Minho — dans sa version Monção-Melgaço, plus charnu et aromatique que le vinho verde standard. Un grand vin blanc portugais.`, photo: f(FOOD.port_bottle) },
    ],
    explore: [
      { lieu: `Castelo de Guimarães`, note: `Le château du XIe siècle, restauré au XXe avec une certaine liberté, domine la colline. L'intérieur est sobre, les vues sur la ville très belles.` },
      { lieu: `Paço dos Duques`, note: `Le palais des Ducs de Bragance, reconstruit par Salazar dans les années 40 — controversé architecturalement, fascinant historiquement.` },
      { lieu: `Largo da Oliveira`, note: `La place centrale avec ses arcades médiévales, son kiosque à journaux et ses cafés à l'ancienne — le cœur vivant de la vieille ville.` },
      { lieu: `Museu Alberto Sampaio`, note: `Dans un ancien couvent roman, une collection de bijoux, textiles et argenterie médiévaux remarquables.` },
      { lieu: `Monte da Penha`, note: `La colline boisée au-dessus de la ville, avec un sanctuaire et des formations rocheuses étranges. Le téléphérique offre une vue sur toute la région.` },
    ],
    carnet: `J'ai passé l'après-midi à me perdre dans le centre médiéval, en suivant les rues pavées au hasard. Toutes finissent par aboutir au Largo da Oliveira, comme si la ville avait été conçue pour qu'on y revienne toujours. Un homme jouait de l'accordéon sous les arcades, et une vieille dame sortait ses géraniums sur le rebord de la fenêtre. Le berceau de la nation ressemble à un village qui aurait bien grandi.`,
  },

  evora: {
    id: `evora`,
    nom: `Évora`,
    subtitle: `La Ville-Musée`,
    tagline: `Un temple romain au milieu des maisons blanches, une chapelle d'ossements, l'Alentejo autour.`,
    accent: `#a0522d`,
    photo: u(`1693750034188-0ce3b87b17fb`),
    historia: `Évora est une ville-musée à ciel ouvert — sur moins de deux kilomètres carrés, les vestiges se superposent depuis l'époque romaine jusqu'au XVIIIe siècle. Son temple romain du IIe siècle, étonnamment bien conservé, domine la ville depuis une esplanade. L'université fondée par les Jésuites en 1559, fermée par le marquis de Pombal en 1759 et rouverte en 1979, a gardé son cloître à azulejos intact. L'Alentejo autour est une mer d'oliviers, de chênes-lièges et de plaines dorées.`,
    food: [
      { nom: `Sopa de cação`, note: `Soupe de requin-hâ à la coriandre et au pain — épaisse, parfumée, maritime malgré la distance à la mer. Le plat alentejano par excellence.`, photo: f(FOOD.seafood_bowl) },
      { nom: `Migas à alentejana`, note: `Pain rassis émietté dans l'huile d'olive, coriandre et ail, servi avec du porc ou des œufs. Simple, généreux, paysan dans le meilleur sens du terme.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Queijo de Évora`, note: `Fromage de brebis local, affiné dans la cave — il va du frais et doux au sec et piquant. L'acheter au marché du Giraldo.`, photo: f(FOOD.nata_tray) },
      { nom: `Vinho alentejano`, note: `Les vins de l'Alentejo — ronds, solaires, riches en alcool — ont révolutionné le paysage viticole portugais dans les années 90. Herdade do Esporão reste la référence.`, photo: f(FOOD.port_bottle) },
      { nom: `Açorda à alentejana`, note: `Soupe de pain à l'ail et œuf poché — servie dans un bol de terracotta et mangée avec une cuillère en bois. Un plat de pauvres devenu patrimoine.`, photo: f(FOOD.clams_plate) },
    ],
    explore: [
      { lieu: `Templo Romano`, note: `Quatorze colonnes corinthiennes du IIe siècle debout dans la ville — intactes parce qu'au Moyen Âge elles servaient de mur à la boucherie municipale.` },
      { lieu: `Capela dos Ossos`, note: `La chapelle décorée de crânes et d'ossements humains par des moines franciscains. L'inscription à l'entrée dit : Nos ossos que aqui estamos pelos vossos esperamos.` },
      { lieu: `Sé de Évora`, note: `La cathédrale romane-gothique avec une terrasse accessible qui offre une vue sur les toits blancs et les campagnes alentejanas.` },
      { lieu: `Praça do Giraldo`, note: `La grande place centrale avec ses arcades en marbre — le café Arcada y est ouvert depuis le XVIIIe siècle.` },
      { lieu: `Megalitos de Évora`, note: `À 15 km, le cromlech des Almendres — 95 pierres levées organisées en ellipse, plus ancien que Stonehenge et beaucoup moins connu.` },
    ],
    carnet: `La chapelle des ossements m'a laissée sans voix pendant dix minutes — non pas de terreur, mais de quelque chose de difficile à nommer. Dehors, le soleil de l'Alentejo tapait sur les pavés blancs, et une femme vendait des fleurs séchées à l'ombre d'une arcade. Il y a des endroits où la vie et la mort cohabitent avec une franchise déconcertante.`,
  },

  lagos: {
    id: `lagos`,
    nom: `Lagos`,
    subtitle: `La Perle de l'Algarve`,
    tagline: `Des falaises d'ocre, des criques turquoise, une vieille ville endormie sous les bougainvilliers.`,
    accent: `#c47a1e`,
    photo: u(`1608997372543-74bda3921a83`),
    historia: `Lagos a été l'un des grands ports de départ de l'expansion maritime portugaise au XVe siècle — c'est de là qu'Henri le Navigateur finançait et organisait les expéditions vers les côtes africaines. La ville garde encore ses murailles du XVIIe siècle et un centre historique aux maisons basses et blanches. Mais ce qui attire aujourd'hui les voyageurs, ce sont les falaises de grès sculpté par l'Atlantique : des arches, des grottes, des plages cachées accessibles uniquement par la mer ou à pied.`,
    food: [
      { nom: `Cataplana de frutos do mar`, note: `Fruits de mer cuits dans la cataplana en cuivre hermétique — crevettes, palourdes, moules, avec tomate et coriandre. L'emblème culinaire de l'Algarve.`, photo: f(FOOD.clams_basket) },
      { nom: `Grelhada de peixe`, note: `Poisson entier grillé sur braise — dorade, bar, vieille. Huile d'olive, sel de mer, citron. Rien d'autre. C'est suffisant.`, photo: f(FOOD.seafood_pasta) },
      { nom: `Caracóis`, note: `Escargots de terre bouillis avec thym, laurier et ail — mangés avec une épingle à la terrasse des tascas. Un rituel estival.`, photo: f(FOOD.seafood_bowl) },
      { nom: `Dom Rodrigo`, note: `Bonbon à la pâte d'amande et d'œuf enveloppé dans du papier doré — la confiserie algarvienne la plus connue.`, photo: f(FOOD.nata_funchal) },
      { nom: `Medronho`, note: `Eau-de-vie de l'arbousier distillée dans les collines de la Serra de Monchique — forte, fruitée, artisanale. À siroter, pas à avaler.`, photo: f(FOOD.drink) },
    ],
    explore: [
      { lieu: `Ponta da Piedade`, note: `Les formations rocheuses les plus spectaculaires de l'Algarve — arches, grottes, eaux émeraude. Descendre à pied depuis le phare ou louer un kayak.` },
      { lieu: `Praia Dona Ana`, note: `La crique la plus photographiée de Lagos — accessible par un escalier taillé dans la falaise, sable fin, eaux cristallines.` },
      { lieu: `Museu Municipal de Lagos`, note: `Le musée le plus inclassable du Portugal — collections romaines, azulejos sacrés, curiosités ethnographiques et un carrosse baroque sous le même toit.` },
      { lieu: `Kayak dans les grottes`, note: `La façon la plus satisfaisante d'explorer les grottes et arches de Ponta da Piedade — plusieurs loueurs sur la plage proposent des kayaks à l'heure.` },
      { lieu: `Meia Praia`, note: `Quatre kilomètres de plage quasi déserte à l'est de Lagos — idéale pour marcher, le dos tourné aux hôtels.` },
    ],
    carnet: `À Ponta da Piedade, j'ai loué un kayak au coucher du soleil. Les falaises ocres et rouges devenaient presque incandescentes, et dans les grottes l'eau était d'un turquoise impossible. Un pélican s'est posé à deux mètres de mon kayak et m'a regardée d'un air profondément désintéressé. L'Algarve peut être bondée et bruyante — mais à cette heure-là, dans ces eaux-là, c'était parfait.`,
  },

  faro: {
    id: `faro`,
    nom: `Faro`,
    subtitle: `La Capitale de l'Algarve`,
    tagline: `La porte d'entrée de l'Algarve garde ses meilleures cartes pour les curieux.`,
    accent: `#2a6a8a`,
    photo: u(`1566487278653-37aa598d19e4`),
    historia: `Faro est souvent traversée sans s'arrêter — la plupart des touristes n'y font qu'un bref passage avant de filer vers les plages de l'Algarve. Ils ratent ainsi une vieille ville entourée de remparts, une cathédrale baroque, et la Ria Formosa, l'un des systèmes lagunaires les plus importants d'Europe. Un chapelet d'îles-barrières protège un lagon peu profond où flamants roses, sternes et huîtres cohabitent avec les bateaux de pêche.`,
    food: [
      { nom: `Conquilhas`, note: `Petites clovisses de la Ria Formosa, sautées à l'ail et au vin blanc. Minuscules, intenses, iodées. Servies à l'apéritif dans presque tous les bars de la ville.`, photo: f(FOOD.clams_plate) },
      { nom: `Ostras da Ria Formosa`, note: `Les huîtres de la ria sont élevées dans une eau froide et pure — fermes, légèrement sucrées, avec le goût de l'Atlantique direct. À manger sur les pontons.`, photo: f(FOOD.clams_basket) },
      { nom: `Amêijoas à bulhão pato`, note: `Palourdes de la ria à l'huile d'olive, ail et coriandre — la même recette que Lisbonne, mais avec des coquillages qui ont grandi à 50 mètres.`, photo: f(FOOD.seafood_bowl) },
      { nom: `Cataplana de bacalhau`, note: `Morue cuite dans la cataplana avec poivrons, tomate et pois chiches — l'adaptation de l'Algarve à un poisson du nord.`, photo: f(FOOD.bacalhau) },
      { nom: `Tarte de amêndoa`, note: `Tarte aux amandes algarvienne — fine, caramélisée, légèrement croquante. Vendue dans toutes les pâtisseries de la région.`, photo: f(FOOD.nata_lisbon) },
    ],
    explore: [
      { lieu: `Ria Formosa`, note: `La réserve naturelle lagunaire — prendre le ferry depuis le quai du centre pour rejoindre l'île Deserta ou Culatra. Des plages presque vides face à l'Atlantique.` },
      { lieu: `Cidade Velha`, note: `La vieille ville intra-muros avec ses ruelles pavées, son jardin Manuel Bivar et sa cathédrale. Calme, presque provinciale, très belle.` },
      { lieu: `Museu Municipal de Faro`, note: `Dans un ancien couvent augustinien — mosaïques romaines retrouvées localement, azulejos, et une collection de peintures algarvienne.` },
      { lieu: `Igreja do Carmo`, note: `Une église baroque sobre dehors, avec sa propre chapelle d'ossements derrière — moins dramatique que celle d'Évora, plus intime.` },
      { lieu: `Ilha da Culatra`, note: `Une île-barrière accessible par ferry en 30 minutes — un village de pêcheurs sans voitures, des cabanes colorées, des plages à l'infini.` },
    ],
    carnet: `J'ai pris le dernier ferry pour Culatra et j'ai marché jusqu'au bout de l'île côté Atlantique. Il n'y avait personne. Le sable était blanc et piqué d'herbes marines, et derrière moi les lumières du village de pêcheurs commençaient à s'allumer. C'est l'une des rares fois où j'ai eu l'impression de voir le Portugal avant qu'il ne soit découvert.`,
  },
}
