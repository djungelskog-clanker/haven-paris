import { imageDefaults } from "./images";
import { footerBody } from "./content";
import type { Linked, SiteData } from "./types";

/** Where the hero form sends people: Haven's signup, preset to the Paris event. */
export const signupUrl =
  "https://forms.hackclub.com/haven-signup?event=recPl2qGxsrCPQuc5&lang=fr";

export const contactEmail = "paris@haven.hackclub.com";

const PARENT_GUIDE =
  "https://docs.google.com/document/d/1NKjI_6sksQOKyrdeE1wEJZYSWEvix8LB74sIF2vokoI/edit?usp=sharing";
const MAILTO = `mailto:${contactEmail}`;

/** Haven Paris's HCB page, where every transaction is public. */
export const financesUrl = "https://hcb.hackclub.com/haven-paris";

export const venue = {
  name: "AGECA",
  address: "177 rue de Charonne, 75011 Paris",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=AGECA%2C%20177%20rue%20de%20Charonne%2C%2075011%20Paris",
  metro: "Métro Alexandre Dumas (ligne 2) ou Charonne (ligne 9)",
};

export const site: SiteData = {
  meta: {
    title: "Haven Paris · une game jam gratuite pour les 13-18 ans, 14-15 novembre",
    description:
      "Haven Paris est une game jam 100 % gratuite pour les 13-18 ans, les 14 et 15 novembre à l’AGECA (Paris 11e). Crée un jeu vidéo avec tes potes, repas offerts. Un événement Haven de Hack Club.",
    image: "https://haven.djungelskog.lol/images/haven-logo-color.webp",
  },
  nav: {
    signup: "S’inscrire",
    schedule: "Programme",
    profs: "Profs",
    faq: "FAQ",
  },
  title: ["Paris"],
  tagline: [
    "Une game jam 100 % gratuite pour les 13-18 ans",
    "14–15 nov · Paris 11e",
  ],
  hero: {
    mapLabel: "Haven dans plus de 200 villes !",
    scrollLabel: "en savoir plus",
    contact: "Nous écrire :",
    contactEmail,
    venue: { name: venue.name, address: venue.address },
    venueTbd: "Lieu à venir",
    venueLink: venue.mapUrl,
    signup: { placeholder: "ton@email.fr", button: "je m’inscris !" },
  },
  about: {
    title: "C’est quoi une game jam ?",
    body: "C’est un événement de code entre potes où tu crées un jeu vidéo, avec repas et snacks offerts !",
    perks: [
      {
        id: "build",
        title: "Apprendre & créer",
        side: "start",
        blurb: ["suis les ateliers ou crée à ton rythme"],
        photos: [
          {
            src: "/images/projects-1.webp",
            alt: "Return to the Sender, un jeu créé lors d’un événement passé",
            href: "https://i1rs7.itch.io/return-to-the-sender",
            caption: { title: "return to the sender", author: "par i1rs7" },
          },
          {
            src: "/images/projects-3.webp",
            alt: "Office Click Clack, un jeu créé lors d’un événement passé",
            href: "https://theavgeekbee.itch.io/office-click-clack",
            caption: {
              title: "office click clack",
              author: "par bunnyguy et nathan",
            },
          },
        ],
      },
      {
        id: "friends",
        title: "Se faire des potes",
        side: "end",
        blurb: ["rencontre du monde et noue des amitiés qui durent"],
        photos: [
          { src: "/images/friends-1.webp", alt: "Des participants ensemble" },
          {
            src: "/images/friends-2.webp",
            alt: "Des ados qui codent à une grande table",
          },
        ],
      },
      {
        id: "food",
        title: "Repas & prix offerts",
        side: "start",
        blurb: ["impossible de dire non à des snacks gratuits :)"],
        photos: [
          { src: "/images/food-1.webp", alt: "Des snacks et des goodies" },
          {
            src: "/images/food-3.webp",
            alt: "Des participants qui montrent leurs prix",
          },
        ],
      },
    ],
  },
  pitch: {
    heading: "Les game jams, ça donne envie ?",
    items: [
      {
        id: "invite",
        align: "end",
        body: [
          { text: "En novembre, " },
          {
            text: "TOI aussi tu peux rejoindre la plus grande game jam pour ados du monde.",
            mark: true,
          },
          {
            text: " Oui, toi ! Peu importe que tu aies des années d’expérience ou que tu viennes de découvrir ce que c’est.",
          },
        ],
      },
      {
        id: "support",
        align: "start",
        body: [
          { text: "Tu vas " },
          { text: "retrouver des milliers d’ados", mark: true },
          {
            text: " qui créent des jeux partout dans le monde. Tu ne te vois pas comme un·e dev de jeux ? Pas de souci : on a plein d’ateliers pour t’aider à faire ton jeu !",
          },
        ],
      },
      {
        id: "impact",
        align: "center",
        body: [
          { text: "C’est ta chance " },
          { text: "d’apprendre du nouveau,", mark: true },
          { text: " " },
          { text: "de te faire des potes", mark: true },
          { text: " et " },
          { text: "de vivre une aventure incroyable ensemble", mark: true },
          { text: " !" },
        ],
      },
    ],
  },
  steps: {
    heading: "Comment rejoindre la game jam en novembre ?",
    subheading: "(pas de panique, on t’accompagne à chaque étape)",
    cta: { label: "", href: "#top" },
  },
  schedule: {
    heading: "Au programme du week-end",
    tbd: {
      title: "Bientôt !",
      body: "On finalise le programme. Inscris-toi et on te prévient dès qu’il est prêt !",
    },
    days: [
      {
        day: "Samedi 14 nov.",
        items: [
          {
            time: "9h30",
            title: "Ouverture des portes",
            body: "Accueil et petit-déj. Essaie d’arriver avant 11h pour former ton équipe.",
          },
          {
            time: "10h",
            title: "Cérémonie d’ouverture",
            body: "On présente Haven et Hack Club, puis on forme les équipes.",
          },
          {
            time: "midi",
            title: "Déjeuner",
            body: "Offert, comme tout le reste. Snacks toute la journée.",
          },
          {
            time: "après-midi",
            title: "On construit !",
            body: "Ateliers et création de ton jeu, avec de l’aide pour avancer.",
          },
          {
            time: "18h",
            title: "Fin de la journée",
            body: "On se retrouve demain à 9h30 !",
          },
        ],
      },
      {
        day: "Dimanche 15 nov.",
        items: [
          {
            time: "9h30",
            title: "Ouverture des portes",
            body: "Petit-déj, et on reprend là où on s’était arrêtés.",
          },
          {
            time: "midi",
            title: "Déjeuner",
            body: "Repas offert.",
          },
          {
            time: "après-midi",
            title: "Dernier sprint et démos",
            body: "On peaufine, on publie son jeu sur itch.io et on joue aux jeux des autres.",
          },
          {
            time: "17h-18h",
            title: "Fin de Haven Paris",
            body: "On se dit au revoir.",
          },
        ],
      },
    ],
  },
  pastEvents: {
    heading: [
      "Hack Club a aidé des ados à organiser des centaines d’événements !",
      "Jette un œil à quelques-uns de nos événements passés ~",
    ],
    items: [
      {
        title: "Scrapyard",
        caption:
          "Construis des trucs farfelus, gagne des prix farfelus ! Un hackathon en vrai, dans plus de 70 villes.",
        image: "/images/scrapyard-pic.webp",
        alt: "Des ados qui construisent à Scrapyard",
        play: "/images/play-triangle-1.svg",
        href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
      },
      {
        title: "Daydream",
        caption:
          "Des game jams menées par des ados dans 200 villes, de Londres à New York en passant par Penang !",
        image: "/images/daydream-pic.webp",
        alt: "Des participants à une game jam Daydream",
        play: "/images/play-triangle-2.svg",
        href: "https://www.youtube.com/watch?v=vvdoW2gh9YU",
      },
      {
        title: "Campfire",
        caption:
          "Notre plus grande game jam : 10 000 ados, 1 week-end, tous en train de créer des jeux en même temps !",
        image: "/images/scrapyard-pic-2.webp",
        alt: "Une salle pleine d’ados à Campfire",
        play: "/images/play-triangle-3.svg",
        href: "https://www.youtube.com/watch?v=0aMAHuLxg3s",
        position: "object-bottom",
      },
    ],
    safety: [
      {
        text: "La sécurité, on la prend au sérieux. Tes parents peuvent lire notre ",
      },
      { text: "guide pour les parents", href: PARENT_GUIDE },
      { text: " (en anglais) ou nous écrire à " },
      { text: contactEmail, href: MAILTO },
      { text: "." },
    ],
  },
  sponsors: {
    heading: "Merci à nos partenaires",
    items: [
      {
        name: "Panic",
        image: "/images/sponsors/paris/panic.svg",
        href: "https://panic.com/",
      },
      {
        name: "Owlcat Games",
        image: "/images/sponsors/paris/owlcat.svg",
        href: "https://owlcat.games/",
      },
      {
        name: "AGECA",
        image: "/images/sponsors/paris/ageca.svg",
        href: "https://www.ageca.org/",
      },
    ],
  },
  faq: {
    heading: "FAQ",
    cta: "Je m’inscris !",
    items: [
      {
        q: "Qui peut venir ?",
        a: [
          {
            text: "Tous les ados de 13 à 18 ans, collégiens ou lycéens. Aucune expérience n’est nécessaire.",
          },
        ],
      },
      {
        q: "Attends, c’est vraiment gratuit ?",
        a: [
          {
            text: "Oui ! Haven est organisé par Hack Club, une association à but non lucratif. Les repas, les snacks et les goodies sont offerts.",
          },
        ],
      },
      {
        q: "J’ai jamais codé. Je peux venir ?",
        a: [
          {
            text: "Parfait ! Les game jams sont faites pour les débutants. Il y aura des ateliers et des coéquipiers pour t’aider à chaque étape.",
          },
        ],
      },
      {
        q: "Il me faut une équipe ?",
        a: [
          {
            text: "Non. Tu peux venir seul·e et former une équipe sur place, venir avec tes potes, ou bosser en solo.",
          },
        ],
      },
      {
        q: "J’apporte quoi ?",
        a: [
          {
            text: "Un ordinateur portable et son chargeur, une gourde, et ta bonne humeur. Pas d’ordi ? Écris-nous avant l’événement.",
          },
        ],
      },
      {
        q: "Mes parents ont des questions.",
        a: [
          { text: "Ils peuvent lire notre " },
          { text: "guide pour les parents", href: PARENT_GUIDE },
          { text: " (en anglais) ou nous écrire à " },
          { text: contactEmail, href: MAILTO },
          { text: "." },
        ],
      },
      {
        q: "C’est où exactement ?",
        a: [
          { text: "À l’AGECA, " },
          { text: venue.address, href: venue.mapUrl },
          { text: `. ${venue.metro}.` },
        ],
      },
      {
        q: "Je suis prof, comment en parler à mes élèves ?",
        a: [
          { text: "Super ! Regarde la section " },
          { text: "« Pour les profs »", href: "#profs" },
          { text: " plus haut, ou écris-nous à " },
          { text: contactEmail, href: MAILTO },
          { text: "." },
        ],
      },
      {
        q: "J’ai encore des questions !",
        a: [
          { text: "Écris-nous à " },
          { text: contactEmail, href: MAILTO },
          { text: ", on répond vite !" },
        ],
      },
    ],
  },
  footer: {
    body: [
      [
        {
          text: "Hack Club est une association à but non lucratif américaine (501(c)(3)) et un réseau de plus de 100 000 lycéens passionnés de technologie. On pense qu’on apprend mieux en construisant : on crée une communauté et on finance des projets pour que les ados puissent réaliser des choses géniales. Ces dernières années, on a ",
        },
        {
          text: "envoyé 30 ados randonner sur le Pacific Crest Trail",
          href: "https://www.youtube.com/watch?v=ufMUJ9D1fi8",
        },
        { text: ", " },
        {
          text: "organisé un hackathon des pires idées",
          href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
        },
        { text: " et " },
        {
          text: "mis sur pied le plus grand hackathon hardware pour ados au siège de GitHub",
          href: "https://www.youtube.com/watch?v=kaEFv7e49mo",
        },
        { text: "." },
      ],
      [
        { text: "Hack Club a été cité dans " },
        { text: "The Wall Street Journal", href: footerHref(1, 1) },
        { text: ", " },
        { text: "CBS News", href: footerHref(1, 3) },
        { text: " et sur " },
        { text: "NASA.gov", href: footerHref(1, 5) },
        { text: ", et a partagé " },
        {
          text: "la scène avec la PDG d’AMD, Lisa Su, au CES",
          href: footerHref(1, 7),
        },
        { text: "." },
      ],
      [{ text: "Fait avec ♥ par des ados, pour des ados, chez Hack Club" }],
    ],
    links: {
      hackClub: "Hack Club",
      slack: "Slack",
      clubs: "Clubs",
      hackathons: "Hackathons",
    },
  },
  images: { ...imageDefaults },
  fonts: {},
};

/** Reuse the press links from the English footer rather than copying URLs. */
function footerHref(paragraph: number, segment: number): string | undefined {
  return (footerBody[paragraph] as Linked)[segment]?.href;
}
