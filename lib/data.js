import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const projects = [
  {
    title: "Royal Auffreville | SiteWeb responsive",
    description:
      "Luxe et confort au cœur de la campagne francilienne.\nRoyal Auffreville offre un cadre élégant et apaisant, avec des équipements haut de gamme pour des séjours inoubliables en famille, entre amis ou en groupe.",
    buttonText: "Détails",
    buttonClass: "bg-[#4f4f4f] text-white",
    bgClass: "bg-[#a37b7380]",
    image: "/macBook.png",
    link: "/royalAuffreville", 
    imageContainer:
      "bg-[url(/apple-macbook-pro-15-space-grey.png)] bg-cover bg-[50%_50%]",
  },
  {
    title: "Élodie Laurent | Application iOS",
    description:
      "Hypnothérapeute spécialisée dans l'accompagnement émotionnel et les retraites bien-être.\nElle aide ses clients à retrouver équilibre et sérénité à travers l'hypnose, la respiration consciente et des expériences immersives en pleine nature.",
    buttonText: "Détails",
    buttonClass: "bg-[#e0e0e0] text-[#5e4c5c]",
    bgClass: "bg-[#5e4c5c80]",
    image: "/iphone.png",
    link: "/ElodieLaurent", 
    imageContainer: "overflow-hidden",
  },
];

export const workExperience = [
  {
    title: "Conseillère immobilière",
    company: "IAD",
    location: "Paris, France",
    period: "2023 → 2024",
  },
  {
    title: "Consultante Marketing & Business Developer",
    company: "ALTERVIP Groupe (ParisFantastic! & Visions France)",
    location: "Paris, France",
    period: "2019 → 2022",
  },
  {
    title: "Business Developer Immobilier",
    company: "AAriane Real Estate",
    location: "Paris, France",
    period: "2019 → 2020",
  },
  {
    title: "Assistante Développement Commercial",
    company: "Printemps Haussmann",
    location: "Paris, France",
    period: "2018",
  },
  {
    title: "Business Developer",
    company: "URBAHIA",
    location: "Paris, France",
    period: "2017 → 2018",
  },
  {
    title: "Business Developer",
    company: "IMONI Showroom Paris",
    location: "Paris, France",
    period: "2017",
  },
  {
    title: "Coordinatrice Web & Traduction",
    company: "UNESCO",
    location: "Paris, France",
    period: "2016",
  },
  {
    title: "Commerciale B2C | Solar Energy",
    company: "SunSource Energy Australia",
    location: "Brisbane, Australia",
    period: "2013 → 2014",
  },
  {
    title: "Responsable Commercial International",
    company: "Avant Technology Taiwan",
    location: "Shanghai, China",
    period: "2012 → 2013",
  },
];

export const education = [
  {
    title: "Formation UX/UI Design",
    school: "MSF",
    location: "Vernon, France",
    period: "2025 → En cours",
  },
  {
    title: "Formation JavaScript & React",
    school: "GRETA 92",
    location: "Boulogne-Billancourt, France",
    period: "2024",
  },
  {
    title:
      "Master 2, Management & Humanités – Business Development, Management de Projet & Entrepreneuriat",
    school: "Université Paris Nanterre",
    location: "France",
    period: "2016 → 2017",
  },
  {
    title: "Master 1, Économie-Gestion – Gouvernance Économie Internationale",
    school: "Université Panthéon-Assas",
    location: "France",
    period: "2015 → 2016",
  },
  {
    title: "Programme d’échange, Music Performance",
    school: "Washburn University",
    location: "USA",
    period: "2011 → 2012",
  },
  {
    title: "Bac+4, Chant lyrique (Interprétation vocale classique)",
    school: "Tianjin Conservatory of Music",
    location: "Tianjin, Chine",
    period: "2008 → 2011",
  },
];

export const volunteerExperience = [
  {
    title: "Donation Finder",
    organization: "Save The Children Australia",
    location: "Brisbane, Australie",
    period: "2014",
  },
];

export const marketingAccordion = [
  {
    value: "contexte-objectifs",
    title: "00. Contexte & Objectifs",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div>
          <span className="font-bold text-lg mb-4">Problèmes identifiés</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Difficulté à trouver des informations complètes sur la résidence.
            </li>
            <li>
              Manque de cohérence visuelle et d’identité sur les plateformes
              tierces.
            </li>
            <li>Expérience de réservation peu intuitive, peu engageante.</li>
          </ul>
        </div>
        <div className="mt-10">
          <span className="font-bold text-lg mb-4">Objectifs</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Centraliser les contenus et créer une plateforme indépendante.
            </li>
            <li>
              Refléter l’identité haut de gamme à travers un design sobre et
              raffiné.
            </li>
            <li>
              Simplifier le parcours utilisateur et augmenter les conversions
              directes.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    value: "veille-concurrentielle",
    title: "01. Veille concurrentielle",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className=" text-sm mb-2">
          Pour mieux comprendre le positionnement de la résidence Royal
          Auffreville, j’ai réalisé une veille concurrentielle basée sur des
          hébergements similaires disponibles dans un rayon de 20 km via la
          plateforme Airbnb.
        </div>
        <div className="mt-4">
          <span className="font-bold">Critères de sélection</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Établissements de gamme équivalente (haut de gamme, maisons de
              caractère, résidences privées)
            </li>
            <li>Capacité d’accueil comparable (entre 12 et 20 personnes)</li>
            <li>
              Présentation orientée vers des séjours familiaux, entre amis ou en
              groupe
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <span className="font-bold">Objectifs de la veille</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Identifier les standards actuels en matière de design, contenu et
              navigation
            </li>
            <li>
              Relever les points faibles des annonces concurrentes (manque
              d’informations, photos peu immersives, absence d’identité
              visuelle)
            </li>
            <li>
              Déterminer comment différencier le site de Royal Auffreville par
              une approche plus immersive, élégante et centrée sur l'expérience
              utilisateur
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <span className="text-xl font-bold">Résultats</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              La majorité des concurrents utilisent uniquement Airbnb comme
              canal de diffusion, avec peu ou pas de site dédié
            </li>
            <li>
              Les visuels sont souvent de qualité inégale et ne permettent pas
              de ressentir l’ambiance du lieu
            </li>
            <li>
              Peu de storytelling ou de mise en valeur de l’architecture ou de
              l’histoire des lieux
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col">
          <img
            src="/concurence.png"
            alt="Tableau comparatif"
            className="w-[797px] h-[501px] object-cover rounded-lg"
          />
          <div className="mt-2 text-xs text-black">
            *Pour faciliter la création du tableau comparatif, j’ai utilisé le
            plugin <span className="font-bold">Google Sheets Sync</span> dans
            Figma. Cette méthode permet d’importer automatiquement les données
            depuis un fichier Google Sheets et de conserver une mise à jour
            cohérente tout au long du projet.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "swot",
    title: "02. SWOT",
    content: (
      <div className="flex flex-col gap-8">
        <img
          src="/SWOT.png"
          alt="Tableau swot"
          className="w-[797px] h-fill object-cover rounded-lg"
        />
        <div className="text-sm mb-4">
          Cette analyse a été réalisée afin d’identifier les leviers internes et
          externes influençant le positionnement de Royal Auffreville. Elle a
          servi de base pour orienter la stratégie de marque, les choix
          éditoriaux et l’expérience utilisateur proposée.
        </div>
      </div>
    ),
  },
  {
    value: "personae",
    title: "03. Personae",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          Pour mieux cibler les besoins des clients, j’ai réalisé une
          segmentation basée sur les profils des clients historiques et
          potentiels, puis j’en ai extrait 4 personae clés.
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold mb-2">Critères de segmentation</div>
            <div>
              Type de séjour (familial, entre amis, professionnel)
              <br />
              Taille du groupe (limité à 12 adultes)
              <br />
              Budget et attentes en termes de services
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Objectifs</div>
            <div className="leading-snug">
              Identifier les groupes de clients clés
              <br />
              Définir des profils types (personae) représentatifs de ces
              segments
              <br />
              Adapter la communication et l’offre selon ces profils
            </div>
          </div>
          <div>
            <div className="font-bold leading-loose mb-2">Résultats</div>
            <div className="leading-snug">
              Création de 4 personae principaux avec leurs motivations et freins
              <br />
              Mise en avant des attentes spécifiques (ex : calme, luxe,
              activités familiales)
              <br />
              Base solide pour orienter la stratégie marketing et le design du
              site
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="w-[754px] h-[515px]"
              src="/Personae.png"
              alt="Personae"
            />
            <div className="text-sm leading-sung">
              *Pour faciliter la création du tableau comparatif, j’ai utilisé le
              plugin <span className="font-bold">Google Sheets Sync</span> dans
              Figma. Cette méthode permet d’importer automatiquement les données
              depuis un fichier Google Sheets et de conserver une mise à jour
              cohérente tout au long du projet.
            </div>
          </div>
          <div className="text-sm leading-snug mt-2">
            Cette veille m’a permis de définir des axes différenciants clairs
            pour la création du site Royal Auffreville : renforcer l’identité de
            marque, enrichir le contenu, et offrir une navigation fluide et
            inspirante.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "positionnement-marque",
    title: "04. Positionnement de marque",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          Pour construire une identité forte et cohérente pour le site de Royal
          Auffreville, j’ai défini un positionnement de marque clair, fondé sur
          l’histoire du lieu, les attentes des clients cibles, et les
          opportunités de différenciation face à la concurrence.
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold mb-2">Essence de la marque</div>
            <div>
              Une maison de famille élégante et discrète, pensée pour accueillir
              des séjours chaleureux entre proches, dans un cadre naturel et
              raffiné.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Valeurs mises en avant</div>
            <div className="gap-2">
              Authenticité : une maison habitée, vivante, avec une âme
              <br />
              Confort & élégance : des espaces soignés, pensés pour le bien-être
              <br />
              Simplicité raffinée : luxe sans ostentation, ambiance paisible
              <br />
              Connexion humaine : un lieu pour se retrouver, partager, célébrer
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Objectifs du positionnement</div>
            <div>
              Différencier Royal Auffreville des simples “gîtes de groupe”
              <br />
              Créer une image de marque cohérente entre photos, ton, design et
              contenu
              <br />
              Servir de base à toute la stratégie UX : storytelling, parcours
              utilisateur, choix iconographiques, etc.
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-[779px] h-[664px]"
              src="/goldenCycle.png"
              alt="Positionnement de marque"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "proposition-valeur",
    title: "05. Proposition de valeur",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="font-['Libre_Baskerville'] text-sm mb-4">
          Dans un marché concurrentiel, la proposition de valeur du projet Royal
          Auffreville permet de clarifier l’offre, valoriser les éléments
          distinctifs du lieu, et orienter l’ensemble de la stratégie UX/UI.
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold mb-2">Besoins identifiés</div>
            <div className="font-['Libre_Baskerville'] mb-2">
              Se retrouver dans un environnement calme et spacieux, propice à la
              reconnexion humaine, tout en bénéficiant du confort d’une villa
              équipée comme une maison.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2 font-['Libre_Baskerville']">
              Bénéfice central
            </div>
            <div>
              Un lieu de vie privatif, raffiné et apaisant, conçu pour offrir
              des souvenirs inoubliables entre proches, dans une atmosphère
              douce et stylée.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Éléments de preuve</div>
            <div>
              Emplacement privilégié à 1h de Paris, en pleine nature
              <br />
              Villa de 6 chambres avec équipements premium (piscine chauffée,
              billard, piano…)
              <br />
              Évaluations Airbnb excellentes, réservations anticipées
              <br />
              Ambiance familiale & reposante, mais non adaptée aux fêtes
              bruyantes
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const identiteVisuelleAccordion = [
  {
    value: "moodboard",
    title: "01. Moodboard",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className=" text-sm mb-4">
          L’identité visuelle repose sur un univers naturel, raffiné et
          chaleureux, inspiré de l’art de vivre à la campagne. Chaque choix
          graphique a été pensé pour renforcer l’image d’une maison familiale
          haut de gamme, conviviale et apaisante.
        </div>
        <div className="flex flex-col gap-6">
          <img
            className="w-[753px] h-80 mb-4"
            src="/Moodboard.png"
            alt="Moodboard"
          />
          <div className="text-black font-['Libre_Baskerville']">
            <span className="font-bold">Ambiance générale :</span>
            <span className="font-normal">
              {" "}
              Architecture traditionnelle, matériaux bruts (bois, pierre),
              mobilier élégant et volumes lumineux. Une esthétique qui associe
              sobriété, espace et respiration visuelle.
            </span>
          </div>
          <div className="text-black font-['Libre_Baskerville']">
            <span className="font-bold">Moments de vie :</span>
            <span className="font-normal">
              {" "}
              Les images illustrent des expériences vécues : lecture en
              terrasse, yoga, baignade, jeux, barbecues… Elles évoquent une vie
              douce, connectée à la nature et aux autres.
            </span>
          </div>
          <div className="text-black font-['Libre_Baskerville']">
            <span className="font-bold">Palette de couleurs :</span>
            <span className="font-normal">
              {" "}
              Tons naturels et terreux extraits des images (beige minéral, brun
              profond, vert mousse, doré doux). Le doré est utilisé avec
              retenue, pour souligner le caractère prestigieux sans excès.
            </span>
          </div>
          <div className="text-black font-['Libre_Baskerville']">
            <span className="font-bold">Typographies :</span>
            <span className="font-normal">
              {" "}
              Playfair pour les titres (élégance classique), Cormorant pour les
              textes (sobriété et fluidité). Une combinaison qui incarne le luxe
              discret et intemporel.
            </span>
          </div>
          <div className="text-black font-normal font-['Libre_Baskerville']">
            <span className="font-bold">Objectif visuel :</span> Créer une
            atmosphère éditoriale harmonieuse, en cohérence avec l’expérience
            proposée : luxe simple, nature paisible, intimité partagée.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "logo",
    title: "02. Logo",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Le logo de Royal Auffreville est le fruit d’un dialogue constant avec
          le propriétaire du lieu, autour de deux visions complémentaires : une
          approche graphique épurée, et une volonté de créer un lien visuel
          direct avec la maison.
        </div>
        <div className="flex flex-row gap-20">
          <img className="w-fill h-fill" src="/logo1.png" alt="Logo1 maison" />

          <img className="w-fill h-fill" src="/logo2.png" alt="Logo2 maison" />
        </div>
        <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
          <span className="font-bold">Intention initiale :</span> J’ai d’abord
          proposé un logo purement typographique, inspiré du luxe discret, en
          utilisant une police élégante comme Playfair. L’objectif : mettre en
          valeur les visuels du site sans surcharge graphique.
        </div>
        <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
          <span className="font-bold">Retour client :</span> Le propriétaire
          souhaitait un logo plus incarné, incluant une représentation stylisée
          de la maison, pour évoquer l’esprit du lieu dès le premier regard.
        </div>
        <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
          <span className="font-bold">Résultat final :</span> Un logo mêlant
          dessin de maison minimaliste et lettrage cursif personnalisé, à
          l’image de Royal Auffreville : authentique, élégant, accueillant.
        </div>
      </div>
    ),
  },
  {
    value: "icons",
    title: "03. Icons",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Pour Royal Auffreville, les icônes jouent un rôle discret mais
          essentiel dans l’identité visuelle. Elles permettent de renforcer la
          lisibilité du site tout en traduisant graphiquement l’univers de la
          maison.
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Source principale :</span> Les icônes
            proviennent majoritairement de la bibliothèque{" "}
            <span className="underline">lucide.dev</span>, choisie pour son
            style minimaliste et élégant, parfaitement adapté à l’esthétique du
            projet.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Style graphique :</span> Icônes en
            stroke 2.5, sans remplissage, au trait clair et régulier.
            Vectorielles, elles peuvent être modifiées directement dans Figma
            (couleurs, épaisseurs), assurant ainsi une flexibilité optimale dans
            l’UI.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Icônes sur mesure :</span> Pour les
            besoins non couverts par la bibliothèque, j’ai conçu des icônes
            personnalisées, dans un style identique, afin de garantir une
            parfaite cohérence graphique sur l’ensemble du site.
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <img className="w-6 h-6" src="/iconAlarme.svg" alt="Icon 1" />
            <img className="w-6 h-6" src="/iconCafe.svg" alt="Icon 2" />
            <img className="w-6 h-6" src="/iconBidet.svg" alt="Icon 3" />
            <img className="w-6 h-6" src="/iconFans.svg" alt="Icon 4" />
            <img className="w-6 h-6" src="/iconGirl.svg" alt="Icon 5" />
            <img className="w-6 h-6" src="/iconEtendoir.svg" alt="Icon 6" />
            <img className="w-6 h-6" src="/iconGant.svg" alt="Icon 7" />
            <img className="w-6 h-6" src="/iconPano.svg" alt="Icon 8" />
            <img className="w-6 h-6" src="/iconRope.svg" alt="Icon 9" />
            <img className="w-6 h-6" src="/iconSeche.svg" alt="Icon 10" />
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Thématiques couvertes :</span> Accueil,
            hébergement, piscine, cheminée, jardin, yoga, jeux, calme, repas
            conviviaux, contact… Chaque pictogramme évoque un aspect-clé de
            l’expérience offerte par Royal Auffreville.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Objectif :</span> Offrir une navigation
            claire et élégante, tout en prolongeant l’univers visuel de la
            marque jusque dans les moindres détails.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "tonalite-editoriale",
    title: "04. Tonalité éditoriale",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          La tonalité éditoriale de Royal Auffreville reflète les valeurs du
          lieu : intimité, élégance discrète et chaleur humaine. Elle sert à
          créer une cohérence dans tous les contenus, de la page d’accueil aux
          supports imprimés.
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Voix de la marque :</span> Accueillante,
            apaisante, inspirante. Jamais trop familière, mais toujours humaine.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Style rédactionnel :</span> Langage
            fluide, phrases courtes, ton chaleureux et descriptif. Utilisation
            de métaphores sensorielles pour faire ressentir l’atmosphère du
            lieu.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Vocabulaire clé :</span> Nature,
            lumière, respiration, retrouvailles, élégance simple, maison de
            famille, sérénité, moments partagés.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Objectif éditorial :</span> Transmettre
            une émotion douce, instaurer une relation de confiance, projeter le
            lecteur dans l’expérience.
          </div>
        </div>
      </div>
    ),
  },
];

export const uiuxAccordion = [
  {
    value: "design-system",
    title: "01. Système de design",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Afin de garantir une expérience utilisateur fluide, cohérente et haut
          de gamme, les éléments d’interface de Royal Auffreville ont été conçus
          selon les principes du Material Design de Google :
        </div>
        <div className="flex flex-col gap-8">
          <img
            className="w-fill h-fill mb-4"
            src="/designSystem.png"
            alt="Design System"
          />
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Hiérarchie typographique rigoureuse : tailles, graisses et
            interlignages définis en fonction de leur rôle (titres, sous-titres,
            corps de texte).
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Système de spacing structuré : marges, paddings, gaps entre éléments
            calibrés selon une grille régulière (8px / 16px / 24px...), assurant
            une lecture naturelle et un rythme visuel équilibré.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Utilisation généreuse du blanc (white space) : les zones de
            respiration renforcent la lisibilité, mettent en valeur les
            contenus, et participent à l’esthétique minimaliste et élégante de
            l’interface.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Cette rigueur dans la construction des composants permet de créer un
            univers numérique à la fois raffiné, harmonieux et intuitif — en
            accord avec l’image de Royal Auffreville.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "interactive-components",
    title: "02. Composants interactifs",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          J’ai utilisé la librairie shadcn/ui, construite sur Radix UI et
          Tailwind CSS, pour les composants interactifs (boutons, formulaires,
          onglets, etc.). Je me suis limitée à modifier les couleurs et les
          tailles pour correspondre à la charte visuelle du projet.
        </div>
        <div className="flex flex-col gap-8">
          <img
            className="w-fill h-fill mb-4"
            src="/schadcn.png"
            alt="Composants interactifs"
          />
        </div>
      </div>
    ),
  },
  {
    value: "wireframes",
    title: "03. Wireframes",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Les wireframes ont permis de structurer l’architecture des pages et de
          valider les parcours utilisateurs avant la phase de design final.
        </div>
        <div className="flex flex-col gap-8">
          <img className="flex-1 mb-4" src="/wireframe.png" alt="Wireframes" />
        </div>
      </div>
    ),
  },
  {
    value: "ui-mockup",
    title: "04. Maquette UI",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          La maquette UI finale incarne l’identité visuelle et l’expérience
          utilisateur définies en amont, avec une attention particulière portée
          à la cohérence graphique et à la fluidité de navigation.
        </div>
        <div className="flex flex-col gap-8">
          <img className="flex-1 mb-4" src="/mockup.png" alt="Maquette UI" />
        </div>
      </div>
    ),
  },
];

export const accordionData = [
  {
    value: "analyse-marketing",
    title: "I. Analyse marketing",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {marketingAccordion.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
  {
    value: "identite-visuelle",
    title: "II. Identité visuelle",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {identiteVisuelleAccordion.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
  {
    value: "ui-ux-design",
    title: "III. UI/UX Design",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {uiuxAccordion.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
];

export const marketingAccordionEL = [
  {
    value: "contexte-objectifs",
    title: "00. Contexte & Objectifs",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div>
          <span className="font-bold text-lg mb-4">
            Problématiques observées
          </span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Présence en ligne majoritairement portée par Instagram, sans
              relais structuré ni lisible sur mobile.
            </li>
            <li>
              Manque de clarté dans l’offre de soins proposée (hypnose, séances
              individuelles, cercles, retraites…).
            </li>
            <li>
              Site existant conçu pour desktop : navigation peu intuitive sur
              téléphone, contenus dispersés.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <span className="font-bold text-lg mb-4">Objectifs</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Concevoir une landing page claire, mobile-first, accessible dès un
              clic depuis Instagram.
            </li>
            <li>
              Mettre en lumière l’univers d’Élodie : présence douce, pratique
              incarnée, approche centrée sur l’écoute et le rythme de l’autre.
            </li>
            <li>
              Fluidifier le passage de la découverte à la prise de rendez-vous
              grâce à une interface lisible, cohérente et rassurante.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    value: "etude-de-secteur",
    title: "01. Étude de secteur",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-2">
          Le marché de l’hypnothérapie en France connaît une forte croissance,
          portée par l’intérêt croissant des Français pour les médecines douces
          et les approches alternatives.
        </div>

        <div>
          <div className="font-bold mb-2">Données clés</div>
          <ul className="list-disc ml-6 text-base mt-2">
            <li>
              Plus de 25 000 cabinets d’hypnothérapie en France, soit cinq fois
              plus qu’il y a cinq ans (source : TF1 Info)
            </li>
            <li>
              Près de 50 % des Français considèrent l’hypnose bénéfique pour la
              santé (Statista, 2018)
            </li>
            <li>
              Une demande en forte hausse pour les thérapies naturelles,
              notamment liées au stress, à la gestion des émotions, et au
              sommeil
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-2">Tendances observées</div>
          <ul className="list-disc ml-6 text-base mt-2">
            <li>
              Développement de la pratique à distance (téléconsultation, visio)
            </li>
            <li>
              Présence accrue sur les réseaux sociaux (Instagram notamment),
              pour humaniser la pratique et générer de la confiance
            </li>
            <li>
              Professionnalisation croissante des thérapeutes : branding, site
              web, contenu éditorial
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-2">Limites et dérives</div>
          <ul className="list-disc ml-6 text-sm base-2">
            <li>
              Multiplication de pratiques non validées scientifiquement (ex :
              hypnose quantique, médecine "vibratoire")
            </li>
            <li>
              Confusion possible pour les clients entre approches sérieuses et
              discours pseudo-scientifiques
            </li>
            <li>Manque d’encadrement officiel du métier d’hypnothérapeute</li>
          </ul>
        </div>

        <div className="text-sm">
          Une vigilance est donc nécessaire pour proposer une pratique crédible,
          incarnée et lisible — tout en se démarquant dans un marché en pleine
          structuration.
        </div>
      </div>
    ),
  },
  {
    value: "veille-concurrentielle",
    title: "02. Veille concurrentielle",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-2">
          Pour comprendre le positionnement idéal du site d’Élodie Laurent, une
          veille a été menée auprès de praticiens en hypnothérapie, sophrologie
          et thérapies holistiques autour de la région Île-de-France.
        </div>

        <div className="mt-4">
          <span className="font-bold">Critères de sélection</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Sites de thérapeutes certifiés, travaillant en cabinet ou à
              distance
            </li>
            <li>
              Pratiques orientées vers l’anxiété, la confiance en soi, les
              troubles du sommeil
            </li>
            <li>Présence digitale active ou structurée</li>
          </ul>
        </div>

        <div className="mt-4">
          <span className="font-bold">Objectifs de la veille</span>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Identifier les bonnes pratiques en matière de contenu, design et
              rassurance
            </li>
            <li>Déceler les lacunes dans les expériences concurrentes</li>
            <li>
              Construire une expérience cohérente, douce et différenciante pour
              les futurs clients
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col">
          <img
            src="/concurentEL.png"
            alt="Analyse concurrentielle EL"
            className="w-fill h-fill object-cover rounded-lg"
          />
        </div>

        <div className="mt-4 text-sm">
          L’analyse concurrentielle menée autour du positionnement d’Élodie
          Laurent repose sur une segmentation claire du marché : concurrence
          directe, concurrence indirecte et offres de substitution. Cette
          structuration permet de visualiser la diversité des offres disponibles
          et de mieux cerner les attentes des utilisateurs.
          <br />
          <br />
          Les concurrents directs partagent souvent une posture thérapeutique
          similaire, mais peinent à se différencier par une approche incarnée ou
          émotionnelle. Les acteurs indirects, quant à eux, occupent l’espace
          digital avec des discours plus variés, parfois plus accessibles mais
          moins personnalisés. Enfin, les solutions de substitution révèlent une
          tendance forte : la recherche de mieux-être passe aussi par des
          pratiques moins formelles, parfois hors cadre thérapeutique.
          <br />
          <br />
          Cette cartographie offre une base stratégique pour construire une
          expérience unique : chaleureuse, identifiable et profondément humaine
          — en rupture avec les codes institutionnels souvent observés dans le
          secteur.
        </div>
      </div>
    ),
  },
  {
    value: "swot",
    title: "03. SWOT",
    content: (
      <div className="flex flex-col gap-8">
        <img
          src="/swotEL.png"
          alt="SWOT thérapeute"
          className="w-[797px] h-fill object-cover rounded-lg"
        />
        <div className="text-sm mb-4">
          Cette analyse SWOT a permis d’identifier les forces et faiblesses
          d’Élodie Laurent dans un écosystème concurrentiel, et de mettre en
          lumière les opportunités stratégiques pour sa présence en ligne.
        </div>
      </div>
    ),
  },
  {
    value: "Cibles & segmentation",
    title: "04. Cibles & segmentation",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          Afin de mieux cerner les besoins des futurs clients d’Élodie Laurent,
          une segmentation a été réalisée à partir d’observations de terrain et
          de profils types de la clientèle en thérapie douce.
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold mb-2">Critères de segmentation</div>
            <div>
              Problématiques abordées (anxiété, sommeil, estime de soi)
              <br />
              Âge, profession, niveau de familiarité avec les thérapies
              <br />
              Fréquence et préférences de suivi (présentiel ou distanciel)
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Objectifs</div>
            <div className="leading-snug">
              Comprendre les attentes émotionnelles et pratiques des clients
              <br />
              Créer 4 profils représentatifs pour adapter l’UX/UI
              <br />
              Adapter les textes, visuels et fonctionnalités en fonction
            </div>
          </div>
          <div>
            <div className="font-bold leading-loose mb-2">Résultats</div>
            <div className="leading-snug">
              4 personae ont été construits (ex : la jeune maman débordée, le
              cadre en burn-out…)
              <br />
              Priorisation des leviers de réassurance : douceur, légitimité,
              simplicité
              <br />
              Ces profils guident l’ensemble des choix de design et contenus
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="w-fill h-fill"
              src="/PersonaeEL.png"
              alt="Personae"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "positionnement-strategique",
    title: "05. Positionnement stratégique",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          Le positionnement stratégique d’Élodie Laurent repose sur une approche
          thérapeutique holistique, humaine et enracinée dans la nature. Il a
          été pensé en cohérence avec ses valeurs personnelles, les besoins
          identifiés chez les clients, et les codes du secteur.
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <div className="font-bold mb-2">Essence de la marque</div>
            <div>
              Une thérapeute à l’écoute, qui accueille sans jugement, dans un
              espace doux, naturel et bienveillant.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Valeurs fondamentales</div>
            <div className="gap-2">
              Empathie & présence réelle
              <br />
              Simplicité & profondeur
              <br />
              Connexion au corps et à l’émotion
              <br />
              Respect du rythme et de l’unicité de chacun
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Proposition de valeur</div>
            <div>
              Une approche douce et personnalisée, pour retrouver clarté,
              ancrage et bien-être intérieur dans une période de stress ou de
              transformation.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Besoins clients identifiés</div>
            <div>
              Être accompagné sans jugement dans une période de doute
              <br />
              Trouver un espace de calme, d’introspection et de transformation
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Preuves & crédibilité</div>
            <div>
              Témoignages authentiques et bienveillants
              <br />
              Cabinet chaleureux ou accompagnement en ligne
              <br />
              Méthode intégrative mêlant hypnose, relaxation et écoute active
              <br />
              Suivi humain, présent et régulier
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Objectifs du positionnement</div>
            <div>
              Créer une atmosphère de confiance dès les premiers instants
              <br />
              Offrir un design et un discours cohérents avec la promesse
              thérapeutique
              <br />
              Servir de socle à la communication, au contenu éditorial et à
              l’expérience utilisateur
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-fill h-fill"
              src="/goldenCercleEL.png"
              alt="Positionnement stratégique"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "storytelling",
    title: "06. Storytelling",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          En tant que thérapeute active sur Instagram, Élodie Laurent partage
          régulièrement des extraits de son quotidien et de ses réflexions. Son
          storytelling n’est pas seulement un outil de communication : il
          incarne profondément son parcours, sa sensibilité, et sa vocation
          d’accompagner les autres avec douceur et sincérité.
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold mb-2">Pourquoi un storytelling ?</div>
            <div>
              Dans un univers saturé de contenus, le récit personnel d’Élodie
              lui permet de se distinguer, de créer un lien émotionnel fort avec
              sa communauté, et de renforcer la cohérence de son identité sur
              tous ses supports : site web, réseaux sociaux, supports imprimés.
              Il donne du sens à son positionnement et nourrit durablement sa
              stratégie de contenu.
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mt-6">
            <img
              className="w-[700px] h-auto rounded-xl shadow"
              src="/storytellingEL.png"
              alt="Storytelling Élodie Laurent"
            />
            <span className="text-xs text-gray-500">
              Visuel illustrant les grandes étapes du parcours d’Élodie
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export const identiteVisuelleAccordionEL = [
  {
    value: "moodboard",
    title: "01. Moodboard",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="text-sm mb-4">
          Le moodboard conçu pour Élodie Laurent traduit visuellement son
          univers thérapeutique : une esthétique épurée, organique et apaisante.
          Il reflète sa manière d’accompagner — avec douceur, humanité et
          sensibilité — et prépare l’imaginaire à l’expérience que vivra
          l’utilisateur sur son site ou ses réseaux.
        </div>
        <div className="flex flex-col gap-6">
          <img
            className="w-full h-full mb-4"
            src="/MoodboardEL.png"
            alt="Moodboard"
          />
          <div className="font-['Libre_Baskerville'] text-black">
            <span className="font-bold">Univers sensoriel :</span>
            <span className="font-normal">
              {" "}
              Matières naturelles (lin, bois clair, pierre brute), lumière
              douce, gestes lents et atmosphères enveloppantes. Tout évoque le
              calme, la sécurité et la reconnexion à soi.
            </span>
          </div>
          <div className="font-['Libre_Baskerville'] text-black">
            <span className="font-bold">Instantanés choisis :</span>
            <span className="font-normal">
              {" "}
              Des gestes attentionnés, des respirations profondes, des rituels
              simples : carnet de notes, silence partagé, regard tourné vers
              l’intérieur. Chaque image invite à ralentir.
            </span>
          </div>
          <div className="font-['Libre_Baskerville'] text-black">
            <span className="font-bold">Palette chromatique :</span>
            <span className="font-normal">
              {" "}
              Teintes naturelles et chaleureuses : beige sable, ocre doux, brun
              terre, blanc cassé et nuances chaudes de terre cuite. Des couleurs
              terreuses, mates et apaisantes, qui évoquent la stabilité, la
              sérénité et la connexion à la nature.
            </span>
          </div>
          <div className="font-['Libre_Baskerville'] text-black">
            <span className="font-bold">Choix typographiques :</span>
            <span className="font-normal">
              {" "}
              Cormorant pour les titres (élégance, sensibilité), Inter pour les
              contenus (lisibilité et douceur). Un duo cohérent avec la posture
              thérapeutique d’Élodie.
            </span>
          </div>
          <div className="font-['Libre_Baskerville'] text-black font-normal">
            <span className="font-bold">Intention graphique :</span> Proposer un
            univers visuel incarné, rassurant et sensoriel — une respiration
            graphique en cohérence avec sa pratique d’hypnothérapie.
          </div>
        </div>
      </div>
    ),
  },
  {
  value: "logo",
  title: "02. Logo",
  content: (
    <div className="flex flex-col gap-8 py-12">
      <div className="mb-4 text-sm font-normal font-['Libre_Baskerville'] text-black leading-tight">
        Le logo d’Élodie Laurent incarne une approche à la fois humaine, fluide et intuitive. Il a été conçu pour refléter la douceur de la thérapeute et l’univers naturel et apaisant dans lequel elle évolue.
      </div>
      <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
        <span className="font-bold">Démarche exploratoire :</span> Plusieurs propositions générées avec ChatGPT ont été explorées, notamment autour d’un mot-symbole simple basé sur le prénom et nom d’Élodie. Toutefois, ces essais n’ont pas convaincu pleinement ni moi ni la cliente.
             <div className="flex flex-row gap-2">
        <img
          className="w-40 h-40"
          src="/logo1EL.png"
          alt="Logo typographique"
        />
        <img
          className="w-40 h-40"
          src="/logo2EL.png"
          alt="Logo symbole + texte"
        />
      </div>
      </div>
      <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
        <span className="font-bold">Évolution du brief :</span> Initialement, la cliente souhaitait un logo purement typographique. Mais après avoir visualisé différentes versions, elle a exprimé le désir d’ajouter un élément graphique, capable d’évoquer à la fois la nature, l’hypnose et sa personnalité.
      </div>
      <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
        <span className="font-bold">Logo final :</span> Une composition équilibrée entre son nom en typographie personnalisée, et un symbole subtil inspiré de formes organiques : vague, cercle, souffle. Ce signe graphique vient renforcer l’identité de marque en suggérant la fluidité, la présence et la transformation.
        <img
          className="w-fill h-fill"
          src="/logoFinalEL.png"
          alt="Logo symbole + texte"
        />
      </div>
 
    </div>
  ),
},
  {
  value: "icons",
  title: "03. Icônes",
  content: (
    <div className="flex flex-col gap-8 py-12">
      <div className="mb-4 text-sm font-normal font-['Libre_Baskerville'] text-black leading-tight">
        Les icônes ont été sélectionnées pour prolonger la douceur et la
        sobriété de l’univers visuel, tout en soutenant la clarté de navigation.
        Elles apportent une touche de raffinement sans surcharger l’interface.
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
          <span className="font-bold">Style graphique :</span> Icônes à lignes
          fines, sans remplissage, choisies principalement depuis la
          bibliothèque <span className="underline">streamlinehq.com</span>.
          L’objectif était de garder une esthétique simple, fluide et élégante.
        </div>
        <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
          <span className="font-bold">Objectif :</span> Offrir un repère
          visuel discret mais cohérent, pour accompagner l’utilisateur dans
          sa navigation sans distraire de l’expérience globale.
        </div>
      </div>
    </div>
  ),
},

  {
    value: "tonalite-editoriale",
    title: "04. Tonalité éditoriale",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-sm font-normal font-['Libre_Baskerville'] text-black leading-tight">
          La tonalité éditoriale d’Élodie Laurent est guidée par sa pratique :
          l’écoute active, la lenteur volontaire et la présence subtile. Chaque
          mot vise à apaiser, à rassurer et à ouvrir une porte intérieure.
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
            <span className="font-bold">Voix de la marque :</span> Présente sans
            être intrusive, douce sans infantilisation. Elle guide plus qu’elle
            affirme.
          </div>
          <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
            <span className="font-bold">Style rédactionnel :</span> Des phrases
            courtes, respirantes. Un vocabulaire sensoriel, métaphorique,
            souvent emprunté au monde du vivant.
          </div>
          <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
            <span className="font-bold">Vocabulaire clé :</span> Respiration,
            ancrage, douceur, présence, chemin, espace, lumière, soin,
            transformation intérieure.
          </div>
          <div className="text-base font-normal font-['Libre_Baskerville'] text-black leading-tight">
            <span className="font-bold">Objectif éditorial :</span> Rassurer
            sans jamais imposer. Accompagner le visiteur dans une expérience
            déjà apaisante dès les premiers mots.
          </div>
        </div>
      </div>
    ),
  },
];

export const uiuxAccordionEL = [
  {
  value: "user-flow ",
  title: "00. user flow",
  content: (
    <div className="flex flex-col gap-8 py-12">
      <div className="mb-4 text-sm font-normal font-['Libre_Baskerville'] text-black leading-tight">
        Avant de commencer la conception des interfaces, un schéma de user flow a été élaboré afin d’anticiper les parcours possibles des utilisateurs, selon leur niveau de maturité, leurs besoins et leur état émotionnel. Cela a permis de structurer les pages autour d’un objectif principal : prendre rendez-vous en toute confiance.
      </div>
      <div className="flex justify-center">
        <img
          className="w-full max-w-4xl h-auto"
          src="/UserflowEL.png"
          alt="User Flow du site"
        />
        </div>
        </div>
  ),
},

  {
    value: "design-system",
    title: "01. design system",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Pour garantir une expérience douce, fluide et rassurante, les éléments
          d’interface ont été construits selon un système cohérent, inspiré des
          principes du Material Design, mais adaptés à une pratique
          thérapeutique centrée sur l’humain.
        </div>
        <div className="flex flex-col gap-8">
          <img
            className="w-fill h-fill mb-4"
            src="/designSystemEL.png"
            alt="Design System"
          />
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Hiérarchie typographique :</span> styles
            et tailles de texte définis pour soutenir la lecture active,
            l’introspection et la navigation intuitive.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Grille de spacing :</span> marges et
            espacements pensés pour créer un rythme visuel apaisant, respectant
            le silence et les respirations nécessaires à ce type
            d’accompagnement.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            <span className="font-bold">Espaces blancs généreux :</span> pour
            laisser place à l’émotion, mettre en valeur les mots, et inviter à
            la contemplation.
          </div>
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Cette structure permet de créer une interface minimaliste et
            sensible, en cohérence avec la posture professionnelle d’Élodie
            Laurant.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "interactive-components",
    title: "02. Composants interactifs",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Les composants interactifs (formulaires, onglets, boutons…) ont été
          construits avec la librairie shadcn/ui (basée sur Radix UI et Tailwind
          CSS), puis affinés pour correspondre à l’univers graphique de la
          praticienne.
        </div>
        <div className="flex flex-col gap-8">
          <img
            className="w-fill h-fill mb-4"
            src="/schadcn.png"
            alt="Composants interactifs"
          />
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Les animations, transitions et feedbacks visuels ont été
            volontairement limités pour préserver une ambiance calme et
            maîtrisée, sans surcharge émotionnelle.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "wireframes",
    title: "03. Wireframes",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          Les wireframes ont servi à cartographier les différentes étapes du
          parcours utilisateur (découverte, compréhension, prise de contact), en
          amont du design final.
        </div>
        <div className="flex flex-col gap-8">
          <img className="flex-1 mb-4" src="/wireframeEL.png" alt="Wireframes" />
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Chaque page a été pensée comme un espace d’accueil numérique :
            clair, centré, structuré autour de l’écoute des besoins du visiteur.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "ui-mockup",
    title: "04. Maquette UI",
    content: (
      <div className="flex flex-col gap-8 py-12">
        <div className="mb-4 text-black text-sm font-normal font-['Libre_Baskerville'] leading-tight">
          La maquette finale reflète visuellement l’identité d’Élodie Laurant :
          sobre, bienveillante, alignée avec une démarche d’accompagnement
          psychique et sensoriel.
        </div>
        <div className="flex flex-col gap-8">
          <img className="flex-1 mb-4" src="/mockupEL.png" alt="Maquette UI" />
          <div className="text-black text-base font-normal font-['Libre_Baskerville'] leading-tight">
            Les choix graphiques sont au service d’une expérience paisible :
            navigation fluide, lecture facilitée, présence douce mais affirmée
            de la marque.
          </div>
        </div>
      </div>
    ),
  },
];

export const accordionDataEL = [
  {
    value: "analyse-marketing",
    title: "I. Analyse marketing",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {marketingAccordionEL.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
  {
    value: "identite-visuelle",
    title: "II. Identité visuelle",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {identiteVisuelleAccordionEL.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
  {
    value: "ui-ux-design",
    title: "III. UI/UX Design",
    content: (
      <Accordion type="single" collapsible className="w-full">
        {uiuxAccordionEL.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="flex flex-col gap-4"
          >
            <AccordionTrigger className="text-lg md:text-xl tracking-widest text-[#2D2323]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-['Times_New_Roman'] text-[#2D2323]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
];

export const timeline = [
  {
    year: "2011",
    title: "Première expérience interculturelle (USA)",
    text: "Formée au chant lyrique depuis l’âge de 13 ans puis dans un conservatoire, j’ai intégré le département de musique de Washburn University pour approfondir ma pratique artistique et découvrir une autre culture musicale. Cette expérience m’a permis d’allier exigence académique, passion artistique, et ouverture interculturelle. ",
    images: [
      { src: "/2011.png", width: 400, height: 400 },
    ],
    side: "left", // 图片在左，文字在右
  },
  {
    year: "2015/2017",
    title: "Exploration académique",
    text: "Études en économie, gestion et humanités – je cherche du sens, je m’intéresse à l’humain derrière les chiffres.",
    images: [
      { src: "/2015:2017.png", width: 400, height: 400 },
    ],
    side: "right", // 图片在右，文字在左
  },
  {
    year: "2016/2022",
    title: "Esthétique et stratégie",
    text: "Expériences dans des maisons de luxe (production, coordination) et en tant que cheffe de projet en développement.Je développe à la fois un œil esthétique affûté, une rigueur professionnelle, et une vision stratégique.Mais une question me hante : comment réunir sens, créativité et impact dans mon quotidien ?Expériences dans des maisons de luxe et en tant que cheffe de projet : œil esthétique affûté, rigueur, vision stratégique. Mais une question : comment réunir sens, créativité et impact ?",
    images: [
      { src: "/2016:2022.png", width: 400, height: 400 },
    ],
    side: "left",
  },
  {
    year: "2023/2024",
    title: "Maternité & réalignement intérieur",
    text: "La maternité me transforme La maternité me transforme profondément. Diplômée d’un conservatoire, la musique m’a toujours guidée avec rigueur et sensibilité. Mais dans ce nouveau chapitre de ma vie, je ressens un besoin vital de cohérence, de créativité appliquée et de lenteur choisie. J’expérimente alors différentes pistes : j’essaie le JavaScript/React – un peu abstrait à mon goût, avant de découvrir que ce qui me passionne réellement, c’est penser des expériences, des espaces, des émotions : le design UX/UI.. Diplômée d’un conservatoire, la musique m’a toujours guidée avec rigueur et sensibilité. Mais dans ce nouveau chapitre, je ressens un besoin de cohérence, de créativité, de lenteur choisie… Ce qui me passionne réellement : penser des expériences, des espaces, des émotions – le design UX/UI.",
    images: [
      { src: "/2023:2024.png", width: 400, height: 400 },
    ],
    side: "right",
  },
  {
    year: "2025",
    title: "Renaissance créative & design utile",
    text: "Depuis janvier 2025, je me forme en UX/UI design et retrouve une joie profonde : créer pour aider, comprendre pour traduire visuellement.Forte de cette renaissance, je conçois désormais des interfaces claires, humaines et sincères.Chaque projet devient une rencontre, un dialogue entre esthétique et utilité. pour aider, comprendre pour traduire visuellement. Je conçois des interfaces claires, humaines, sincères.",
    images: [{ src: "/2025.png", width: 400, height: 400 }],
    side: "left",
  },
];

