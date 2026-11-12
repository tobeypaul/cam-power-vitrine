import type { GuideContent, GuideKey } from './types';

/*
 * French copy for the employment page.
 * Job offers are not public yet: they are read inside CamPower after signing in,
 * so this page sends people to CamPower rather than listing offers.
 * Rules: no figures we cannot source, no promise of a job, a task or an income,
 * and no claim about a feature the application does not have.
 */

export const guidesFr: Record<GuideKey, GuideContent> = {
  emploi: {
    meta: {
      title: 'Emploi au Cameroun — Offres d’emploi sur CamPower',
      description:
        'Offres d’emploi, missions et mini-jobs au Cameroun : consultez les offres des entreprises sur CamPower, sur le web ou dans l’application.',
    },
    crumb: 'Emploi au Cameroun',
    hero: {
      eyebrow: 'Emploi · Cameroun',
      title: 'Trouver un emploi au Cameroun',
      lead: 'Les offres d’emploi des entreprises au Cameroun se trouvent dans CamPower. Ouvrez CamPower, créez votre profil et postulez directement, depuis le web ou votre téléphone.',
      points: [
        'Des offres publiées par des entreprises au Cameroun',
        'Des missions et des mini-jobs, en plus de l’emploi',
        'Postuler et échanger avec les recruteurs au même endroit',
      ],
      cta: 'Voir les offres sur CamPower',
      note: 'Les offres se consultent dans CamPower, une fois connecté. Sur le web, Android et iPhone.',
      screen: 'welcome',
    },
    sections: [
      {
        id: 'partout',
        kicker: 'Partout au Cameroun',
        title: 'Emploi, missions et mini-jobs, dans tout le pays',
        paragraphs: [
          'CamPower est ouvert aux candidats et aux entreprises de tout le Cameroun : Douala, Yaoundé, Bafoussam, Buea, Garoua, Bamenda, Limbe, Kribi et ailleurs. Indiquez votre ville sur votre profil pour que les entreprises proches de chez vous puissent vous trouver.',
          'Au-delà de l’emploi salarié, CamPower réunit deux autres façons de travailler :',
        ],
        list: [
          'Emploi : un poste dans une entreprise ou une organisation, selon le contrat proposé dans l’offre.',
          'Mission : un besoin professionnel défini, rempli par une compétence précise.',
          'Mini-job : un besoin ponctuel publié par un restaurant, une boutique, un hôtel ou un particulier.',
        ],
      },
      {
        id: 'offres',
        kicker: 'Les offres',
        title: 'Les offres d’emploi sont sur CamPower',
        paragraphs: [
          'Les entreprises publient leurs offres d’emploi directement dans CamPower. Chaque offre indique la ville et le type de contrat proposés. Pour les consulter et y répondre, il suffit d’ouvrir CamPower et de vous connecter.',
        ],
        steps: [
          { label: 'Ouvrez CamPower', text: 'Sur cam-power.net, ou dans l’application Android ou iPhone.' },
          { label: 'Créez votre profil', text: 'Votre parcours, vos compétences et votre ville : les recruteurs vous trouvent plus facilement.' },
          { label: 'Consultez les offres', text: 'Parcourez les offres publiées par les entreprises et suivez celles qui vous intéressent.' },
          { label: 'Postulez et échangez', text: 'Répondez aux offres qui vous correspondent et discutez avec le recruteur.' },
        ],
        cta: true,
      },
      {
        id: 'conseils',
        kicker: 'Conseils',
        title: 'Réussir votre candidature',
        paragraphs: ['Quelques habitudes simples vous aident à sortir du lot auprès des recruteurs.'],
        list: [
          'Complétez votre profil : un profil complet inspire confiance et se trouve plus facilement.',
          'Adaptez votre candidature à chaque offre en reprenant les compétences demandées que vous possédez vraiment.',
          'Indiquez clairement votre ville et votre disponibilité.',
          'Mettez en avant le bilinguisme français-anglais si vous le maîtrisez : c’est un atout recherché au Cameroun.',
        ],
      },
      {
        id: 'prudence',
        kicker: 'Sécurité',
        title: 'Reconnaître une offre d’emploi douteuse',
        paragraphs: ['Les fausses offres d’emploi existent partout. Méfiez-vous, quelle que soit la plateforme, si :'],
        list: [
          'on vous demande de payer pour obtenir un poste, un entretien ou une formation obligatoire ;',
          'le salaire annoncé est très élevé pour peu d’exigences, sans entreprise clairement identifiée ;',
          'on vous presse de décider tout de suite ou d’envoyer vos documents personnels sans entretien.',
        ],
      },
    ],
    related: {
      title: 'Découvrir CamPower',
      support: 'CamPower relie les talents, les entreprises et les opportunités au Cameroun.',
      links: [
        { label: 'Talents', text: 'Construire un profil professionnel qui vous représente.', href: '/talents/' },
        { label: 'Mini-jobs', text: 'Les besoins ponctuels du quotidien, pour étudiants et personnes disponibles.', href: '/mini-jobs/' },
        { label: 'Missions', text: 'Un besoin défini, une compétence, une mission.', href: '/missions/' },
        { label: 'Entreprises', text: 'Pour les organisations : publier un besoin et trouver un profil.', href: '/entreprises/' },
      ],
    },
    faq: {
      title: 'Questions fréquentes sur l’emploi au Cameroun',
      items: [
        {
          question: 'Où trouver des offres d’emploi au Cameroun ?',
          answer:
            'Sur CamPower. Ouvrez cam-power.net ou l’application Android ou iPhone, connectez-vous et consultez les offres publiées par les entreprises.',
        },
        {
          question: 'Faut-il un compte pour voir les offres ?',
          answer: 'Oui. Les offres se consultent dans CamPower, une fois connecté. Créer votre profil vous permet aussi d’être trouvé par les recruteurs.',
        },
        {
          question: 'Y a-t-il des offres à Douala, à Yaoundé ou dans ma ville ?',
          answer:
            'CamPower est ouvert aux entreprises de tout le Cameroun. Les offres disponibles dépendent de ce que publient les entreprises : ouvrez CamPower pour voir celles du moment.',
        },
        {
          question: 'Puis-je chercher un emploi depuis mon téléphone ?',
          answer: 'Oui. L’application CamPower est disponible sur Google Play et sur l’App Store, et le service est aussi accessible depuis un navigateur.',
        },
        {
          question: 'Quelle est la différence entre un emploi, une mission et un mini-job ?',
          answer:
            'Un emploi est un poste dans une organisation. Une mission répond à un besoin professionnel défini avec une compétence précise. Un mini-job est un besoin ponctuel du quotidien, publié par un commerce, un hôtel ou un particulier.',
        },
        {
          question: 'Un recruteur peut-il me demander de l’argent pour un emploi ?',
          answer:
            'Méfiez-vous de toute demande de paiement pour obtenir un poste ou un entretien. C’est un signe fréquent d’arnaque. En cas de doute, ne payez pas et renseignez-vous sur l’entreprise.',
        },
      ],
    },
    finale: {
      title: 'Les offres vous attendent sur CamPower.',
      support: 'Ouvrez CamPower, créez votre profil et répondez aux offres qui vous correspondent.',
    },
  },
};
