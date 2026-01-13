import {site} from '@/lib/site';
import {toWaNumber} from '@/lib/phone';

export default function Hero() {
  const waHref = `https://wa.me/${toWaNumber(site.telephone)}`;

  return (
    <section id="hero" className="fako-hero">
      <div className="container">
        <h1>{site.name}</h1>
        <p>{site.tagline}</p>

        <div className="fako-cta-row">
          <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-outline" href="#cours">
            Voir les cours
          </a>
        </div>

        <div className="fako-kpi" aria-label="Indicateurs clés">
          <div className="fako-card">
            <strong>Privé</strong>
            <div style={{color: 'var(--muted)'}}>ou petit groupe</div>
          </div>
          <div className="fako-card">
            <strong>Mobile</strong>
            <div style={{color: 'var(--muted)'}}>spots selon conditions</div>
          </div>
          <div className="fako-card">
            <strong>Tout niveau</strong>
            <div style={{color: 'var(--muted)'}}>adultes / enfants</div>
          </div>
          <div className="fako-card">
            <strong>Matériel</strong>
            <div style={{color: 'var(--muted)'}}>inclus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
