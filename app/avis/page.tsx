import Reviews from "@/components/Reviews";

export const metadata = {
  title: "Avis client – L’atelier des Gourmets",
  description:
    "Quelques avis de clients de L’atelier des Gourmets à Ayent.",
};

export default function AvisPage() {
  return (
    <main id="main" className="container">
      <h1>Avis client</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Voici une sélection d’avis laissés par nos clients. Pour consulter
        l’ensemble des avis et les plus récents, rendez-vous sur notre fiche
        Google.
      </p>

      <Reviews
        title="Quelques avis Google"
        limit={3}
        showSummary={true}
      />
    </main>
  );
}
