export const site = {
  name: "FAKO Surf School",
  tagline: "École de surf mobile – Landes & Pays basque",
  telephone: "+33600000000",
  email: "contact@fako-surfschool.fr",

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

  // Maps
  googleMapsEmbed: "https://www.google.com/maps?q=Hossegor&output=embed",
  googleMapsLink: "https://www.google.com/maps",

  // Surf report (à remplacer par l’URL exacte que tu veux)
  surfReportUrl: "https://www.surf-report.com/"
} as const;
