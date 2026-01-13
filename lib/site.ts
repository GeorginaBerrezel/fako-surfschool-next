export type OpeningRange = {
  opens: string;   // "HH:MM"
  closes: string;  // "HH:MM"
};

export type OpeningDay = {
  days: string[];          // ex: ["Tuesday", "Wednesday"]
  ranges: OpeningRange[];  // une ou plusieurs plages horaires, ou [] si fermé
};

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  name: "L’atelier des Gourmets",
  telephone: "+33 6 16 71 88 87",
  address: {
    streetAddress: "Route de Botyre 30",
    postalCode: "1966",
    addressLocality: "Ayent",
    addressCountry: "CH",
  },
  sameAs: [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
  ],
  openingHours: <OpeningDay[]>[
    {
      days: ["Tuesday"],
      ranges: [
        { opens: "09:00", closes: "15:00" },
      ],
    },
    {
      days: ["Wednesday"],
      ranges: [
        { opens: "09:00", closes: "14:30" },
        { opens: "17:00", closes: "21:00" },
      ],
    },
    {
      days: ["Thursday"],
      ranges: [
        { opens: "09:00", closes: "14:30" },
        { opens: "17:00", closes: "21:00" },
      ],
    },
    {
      days: ["Friday"],
      ranges: [
        { opens: "09:00", closes: "14:30" },
        { opens: "17:00", closes: "21:00" },
      ],
    },
    {
      days: ["Saturday"],
      ranges: [
        { opens: "10:00", closes: "14:30" },
        { opens: "17:00", closes: "21:30" },
      ],
    },
    {
      days: ["Sunday"],
      ranges: [
        { opens: "10:00", closes: "16:00" },
      ],
    },
    {
      days: ["Monday"],
      ranges: [],
    },
  ],
};
