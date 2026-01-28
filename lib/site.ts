export const site = {
  name: "FAKO Surf School",
  tagline: "École de surf mobile – Landes & Pays basque",

  // numéro de test (format E.164)
  telephone: "+33646010802",

  // Pas d’email affiché sur le site (on garde la clé pour ne pas casser les imports)
  email: "",

  address: {
    streetAddress: "Plage Vensac Montalivet",
    postalCode: "33590",
    addressLocality: "Vensac Océan",
    addressCountry: "France",
    full: "Plage Vensac Montalivet, 33590 Vensac Océan, France",
  },

  // requis par components/Footer.tsx
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      ranges: [],
    },
  ],

  // Maps (à remplacer ensuite par la vraie URL)
  googleMapsEmbed: "https://www.google.com/maps/d/embed?mid=1CCEDWIa_6jFrrexFqm6_gp5wOZMXUH37&ll=45.3961131%2C-1.1592771000000446&z=17",
  googleMapsLink: "https://www.google.com/maps/d/u/0/viewer?mid=1CCEDWIa_6jFrrexFqm6_gp5wOZMXUH37&ll=45.39611310000002%2C-1.1592771000000446&z=17",

  // Surf report
  surfReportUrl: "https://www.surf-report.com/",
};
