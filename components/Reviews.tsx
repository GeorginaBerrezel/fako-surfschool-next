import { staticReviews } from "@/data/reviews";

type Props = {
  title?: string;
  limit?: number;
  showSummary?: boolean;
  className?: string;
};

function computeAverage() {
  if (!staticReviews.length) return null;
  const sum = staticReviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / staticReviews.length;
}

export default function Reviews({
  title = "Avis de nos clients",
  limit,
  showSummary = true,
  className,
}: Props) {
  const reviews = limit ? staticReviews.slice(0, limit) : staticReviews;
  const avg = computeAverage();
  const count = staticReviews.length;

  return (
    <section
      className={className ?? ""}
      aria-label="Avis clients"
    >
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        {showSummary && avg !== null ? (
          <p>
            Note moyenne&nbsp;:{" "}
            <strong>{avg.toFixed(1)} / 5</strong>{" "}
            ({count} avis)
          </p>
        ) : (
          <p>Ils nous font confiance au quotidien.</p>
        )}
        <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
          Avis présentés à titre indicatif. Pour l’ensemble des avis, consultez
          notre fiche Google.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <article key={r.id} className="review-card">
            <header className="review-header">
              <div className="review-avatar">
                <span className="review-avatar-fallback">
                  {r.author?.[0] ?? "?"}
                </span>
              </div>
              <div>
                <div className="review-author">{r.author}</div>
                <div className="review-meta">
                  <span className="review-stars">
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                    {" "}
                    <span className="review-rating-value">
                      {r.rating}/5
                    </span>
                  </span>
                  {r.relativeTime && (
                    <span className="review-time">
                      • {r.relativeTime}
                    </span>
                  )}
                </div>
              </div>
            </header>
            {r.text && <p className="review-text">{r.text}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
