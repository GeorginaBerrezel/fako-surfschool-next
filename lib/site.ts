export const site = {
  name: "FAKO Surf School",
  tagline: "École de surf mobile – Landes & Pays basque",

  // numéro de test (format E.164)
  telephone: "+33616718887",

  // Pas d’email affiché sur le site (on garde la clé pour ne pas casser les imports)
  email: "",

  address: {
    streetAddress: "Côte landaise – déplacements selon conditions",
    postalCode: "33590",
    addressLocality: "Vensac Océan",
    addressCountry: "France",
    full: "Côte landaise – déplacements selon conditions",
  },

  // requis par components/Footer.tsx
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      ranges: [],
    },
  ],

  // Maps (à remplacer ensuite par la vraie URL)
  googleMapsEmbed: "https://www.google.com/maps?q=Hossegor&output=embed",
  googleMapsLink: "https://www.google.com/maps",

  // Surf report
  surfReportUrl: "https://www.surf-report.com/",
};
