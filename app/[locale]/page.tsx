import {getTranslations} from 'next-intl/server';
import {site} from '@/lib/site';
import {toWaNumber} from '@/lib/phone';

export default async function Page() {
  const t = await getTranslations();
  const waHref = `https://wa.me/${toWaNumber(site.telephone)}`;

  const bullets = t.raw('school.bullets') as string[];
  const levels = t.raw('classes.levels') as {name: string; desc: string}[];
  const rows = t.raw('pricing.rows') as {label: string; price: string}[];

  return (
    <>
      <section className="container" style={{paddingTop: '1.25rem'}}>
        <h1>{t('hero.h1')}</h1>
        <p>{t('hero.subtitle')}</p>
        <p>
          <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
            {t('hero.cta_whatsapp')}
          </a>
        </p>
      </section>

      <section className="container" aria-labelledby="school-title" style={{paddingTop:'1.5rem'}}>
        <h2 id="school-title">{t('school.title')}</h2>
        <p>{t('school.p1')}</p>
        <p><strong>{t('school.bulletsTitle')}</strong></p>
        <ul>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p>{t('school.p2')}</p>
        <p>{t('school.p3')}</p>
        <p>{t('school.p4')}</p>
      </section>

      <section id="cours" className="container" aria-labelledby="classes-title" style={{paddingTop:'1.5rem'}}>
        <h2 id="classes-title">{t('classes.title')}</h2>
        <p>{t('classes.intro')}</p>
        <p><strong>{t('classes.goPro')}</strong></p>

        <div style={{display:'grid', gap:'1rem', marginTop:'1rem'}}>
          {levels.map((lvl) => (
            <article key={lvl.name} className="card" style={{padding:'1rem'}}>
              <h3 style={{marginTop:0}}>{lvl.name}</h3>
              <p style={{marginBottom:0}}>{lvl.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tarifs" className="container" aria-labelledby="pricing-title" style={{paddingTop:'1.5rem'}}>
        <h2 id="pricing-title">{t('pricing.title')}</h2>

        <div className="card" style={{padding:'1rem'}}>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:'.5rem'}}>
            {rows.map((r) => (
              <li key={r.label} style={{display:'flex', justifyContent:'space-between', gap:'1rem'}}>
                <span>{r.label}</span>
                <strong>{r.price}</strong>
              </li>
            ))}
          </ul>
        </div>

        <p>{t('pricing.note1')}</p>
        <p>{t('pricing.note2')}</p>
      </section>

      <section id="spot" className="container" aria-labelledby="spot-title" style={{paddingTop:'1.5rem', paddingBottom:'2rem'}}>
        <h2 id="spot-title">{t('spot.title')}</h2>
        <p>{t('spot.text')}</p>

        <div className="card" style={{padding:0}}>
          <iframe
            title="Google Maps"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.googleMapsEmbed}
          />
        </div>
      </section>
    </>
  );
}
