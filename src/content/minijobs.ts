import { routes } from '../i18n';
import { appStoresFr } from './stores';
import type { MiniJobsContent } from './types';

export const minijobsFr: MiniJobsContent = {
  meta: {
    title: 'Mini-jobs — Les besoins ponctuels du quotidien sur CamPower',
    description:
      'Restaurants, boutiques, boulangeries, hôtels, familles : publiez un besoin ponctuel sur CamPower. Étudiants et personnes disponibles peuvent y répondre.',
  },
  nav: [
    { label: 'Découvrir', href: routes.decouvrir.fr },
    { label: 'Emplois', href: routes.emploi.fr },
    { label: 'Talents', href: routes.talents.fr },
    { label: 'Entreprises', href: routes.entreprises.fr },
    { label: 'Missions', href: routes.missions.fr },
    { label: 'Mini-jobs', href: routes.minijobs.fr, current: true },
    { label: 'À propos', href: routes.apropos.fr },
  ],
  hero: {
    eyebrow: 'Mini-jobs',
    title: 'Un besoin ponctuel. Une personne disponible. Un mini-\u2060job.',
    lead: 'Restaurants, petits commerces, boulangeries, hôtels, familles, artisans : le secteur informel a chaque jour des besoins ponctuels. Avec les Mini-jobs CamPower, ils publient ces besoins, et des personnes disponibles près de chez eux peuvent y répondre et être rémunérées pour la tâche.',
    explore: { label: 'Voir les besoins du quotidien', href: '#besoins' },
    imageAlt: 'Rue commerçante animée au Cameroun, avec des petits commerces et un livreur à moto',
    caption: 'Illustration générée par IA.',
  },
  needs: {
    kicker: 'Qui publie un mini-job ?',
    title: 'Les besoins du quotidien, là où l’économie se fait.',
    support:
      'Un coup de main pour le service du midi, une livraison, un ménage, une réparation, un cours à domicile : chaque besoin ponctuel peut devenir un mini-job.',
    items: [
      { image: 'restaurant', title: 'Restaurants', text: 'Aide en cuisine ou en salle pour un service chargé.', alt: 'Aide en cuisine dans un petit restaurant' },
      { image: 'bakery', title: 'Boulangeries', text: 'Mise en rayon, préparation ou livraison du pain du matin.', alt: 'Jeune homme rangeant le pain dans une boulangerie de quartier' },
      { image: 'shop', title: 'Boutiques et petits commerces', text: 'Réassort, tenue du comptoir, inventaire ponctuel.', alt: 'Commerçante servant une cliente dans une boutique de quartier' },
      { image: 'hotel', title: 'Hôtels', text: 'Renfort pour les chambres, l’accueil ou un week-end chargé.', alt: 'Personnel préparant une chambre d’hôtel' },
      { image: 'household', title: 'Besoins domestiques', text: 'Ménage, repassage, aide à la maison pour une journée.', alt: 'Aide ménagère pliant le linge dans un salon familial' },
      { image: 'technician', title: 'Petits travaux et dépannage', text: 'Électricité, plomberie, bricolage, à domicile.', alt: 'Technicien réparant une prise électrique à domicile' },
      { image: 'delivery', title: 'Livraisons et courses', text: 'Un colis, un dépôt de courrier, une course en ville.', alt: 'Livreur à moto remettant un colis à une commerçante' },
      { image: 'event', title: 'Événements', text: 'Service, accueil ou installation pour une fête ou une cérémonie.', alt: 'Personnel servant les invités lors d’une fête en plein air' },
      { image: 'carwash', title: 'Lavage et entretien', text: 'Lavage de voiture, nettoyage, jardinage.', alt: 'Deux jeunes hommes lavant une voiture à la main' },
      { image: 'tailor', title: 'Couture et artisanat', text: 'Un renfort à l’atelier avant une échéance.', alt: 'Couturière et apprentie travaillant dans un atelier' },
      { image: 'student', title: 'Cours à domicile', text: 'Répétiteur pour une matière, quelques heures par semaine.', alt: 'Étudiant donnant un cours de mathématiques à domicile' },
    ],
  },
  people: {
    kicker: 'Qui peut y répondre ?',
    title: 'Des activités ponctuelles, pour celles et ceux qui sont disponibles.',
    support:
      'Un mini-job permet de mettre son temps et son savoir-faire au service d’un besoin proche, et d’être rémunéré pour la tâche.',
    items: [
      { title: 'Étudiants', text: 'Un job étudiant entre deux cours, le soir ou le week-end.' },
      { title: 'Jeunes en recherche', text: 'Une première expérience, des références, un revenu ponctuel.' },
      { title: 'Artisans et techniciens', text: 'Des interventions de plus, près de chez soi.' },
      { title: 'Personnes disponibles', text: 'Quelques heures libres qui deviennent une activité utile.' },
    ],
    imageAlt: 'Étudiant donnant un cours à domicile',
  },
  how: {
    kicker: 'Comment ça marche',
    title: 'Simple à publier, simple à trouver.',
    support:
      'Les Mini-jobs se trouvent dans l’onglet Offres de l’application CamPower. Chaque annonce indique la tâche, le lieu, la rémunération, la durée et le rythme.',
    steps: [
      { label: 'Publier', text: 'Le commerce, l’établissement ou la famille décrit son besoin.' },
      { label: 'Postuler', text: 'Les personnes intéressées envoient leur candidature.' },
      { label: 'Choisir', text: 'Celui qui publie consulte les candidatures et choisit.' },
      { label: 'Réaliser', text: 'La tâche est réalisée, selon ce qui a été convenu.' },
    ],
    categoriesLabel: 'Quelques catégories dans l’application',
    categories: ['Ménage', 'Livraison', 'Jardinage', 'Cours', 'Bricolage'],
    listAlt: 'Liste des mini-jobs dans l’application CamPower',
    detailAlt: 'Détail d’un mini-job dans l’application CamPower',
    note: 'Écrans de l’application.',
  },
  economy: {
    kicker: 'Économie de proximité',
    title: 'Faire tourner l’économie, un besoin à la fois.',
    support:
      'Le secteur informel fait vivre une grande partie de la population au Cameroun. Les Mini-jobs rendent ses besoins visibles, et permettent à plus de personnes d’y prendre part.',
    points: [
      { title: 'Pour ceux qui publient', text: 'Trouver vite un coup de main, sans recrutement durable.' },
      { title: 'Pour ceux qui répondent', text: 'Des activités qui rapportent, au rythme de chacun.' },
      { title: 'Pour le quartier', text: 'De l’argent qui circule là où il est gagné.' },
    ],
  },
  missions: {
    title: 'Mini-jobs et Missions',
    text: 'Un mini-job est une tâche concrète et ponctuelle du quotidien. Une mission mobilise une compétence professionnelle pour un besoin défini. Les deux font partie du même écosystème CamPower, avec l’emploi et le réseau professionnel.',
    cta: { label: 'Découvrir les Missions', href: routes.missions.fr },
  },
  stores: appStoresFr,
  disclaimer:
    'Les photographies de cette page sont des illustrations générées par intelligence artificielle. Les personnes et les commerces représentés sont fictifs. Publier ou consulter un mini-job ne garantit ni une tâche, ni un revenu.',
  finale: {
    title: 'Un besoin aujourd’hui ? Un peu de temps libre ?',
    support: 'Publiez un mini-job ou répondez à ceux qui sont près de chez vous. La suite se passe dans l’application.',
  },
};
