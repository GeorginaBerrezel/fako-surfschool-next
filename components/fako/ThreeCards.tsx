export default function ThreeCards() {
  return (
    <div className="fako-grid-3" role="list">
      <div className="fako-card" role="listitem">
        <strong>Pédagogie</strong>
        <p style={{margin: '0.5rem 0 0', color: 'var(--muted)'}}>
          Structure de séance, feedback, progression.
        </p>
      </div>
      <div className="fako-card" role="listitem">
        <strong>Sécurité</strong>
        <p style={{margin: '0.5rem 0 0', color: 'var(--muted)'}}>
          Choix du spot, lecture des conditions, cadre clair.
        </p>
      </div>
      <div className="fako-card" role="listitem">
        <strong>Sur-mesure</strong>
        <p style={{margin: '0.5rem 0 0', color: 'var(--muted)'}}>
          Objectifs adaptés : premières vagues, reprise, perf.
        </p>
      </div>
    </div>
  );
}
