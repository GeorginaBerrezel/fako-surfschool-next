export const site = {
  name: "FAKO Surf School",
  tagline: "École de surf mobile – Landes & Pays basque",
  telephone: "+33600000000",
  email: "contact@fako-surfschool.fr",

  courses: "Cours de surf tous niveaux, adultes et enfants, matériel inclus.",
  about:
    "FAKO Surf School est une école de surf mobile proposant des cours personnalisés sur les meilleurs spots.",

  address: {
    streetAddress: "Côte landaise – déplacements selon conditions",
    postalCode: "33590",
    addressLocality: "Vensac Océan",
    addressCountry: "France",
    full: "Côte landaise – déplacements selon conditions"
  },

  // requis par components/Footer.tsx (flatMap)
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      ranges: []
    }
  ],

  googleMapsEmbed: "https://www.google.com/maps?q=Hossegor&output=embed"
} as const;
