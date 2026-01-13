export type Review = {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
};

export const staticReviews: Review[] = [
  {
    id: "r1",
    author: "Camille R.",
    rating: 5,
    relativeTime: "il y a 3 semaines",
    text:
      "Une superbe découverte à Ayent. Produits frais, cuisson parfaite des poissons et un accueil chaleureux. On sent que tout est fait maison, du pain au dessert.",
  },
  {
    id: "r2",
    author: "Julien M.",
    rating: 5,
    relativeTime: "il y a 1 mois",
    text:
      "Très belle adresse. Service attentionné sans être envahissant, belle carte de vins et plats généreux. Mention spéciale pour le burger de l’atelier et le risotto.",
  },
  {
    id: "r3",
    author: "Sophie L.",
    rating: 4,
    relativeTime: "il y a 2 mois",
    text:
      "Ambiance conviviale et cuisine soignée. La terrasse est agréable et les assiettes sont bien présentées. Nous reviendrons pour goûter le reste de la carte.",
  },
];
