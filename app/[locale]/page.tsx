import Hero from '@/components/fako/Hero';
import Section from '@/components/fako/Section';
import ThreeCards from '@/components/fako/ThreeCards';
import {site} from '@/lib/site';

export default function Page() {
  return (
    <>
      <Hero />

      <Section id="cours" title="Cours de surf">
        <p style={{maxWidth: '70ch', color: 'var(--muted)'}}>{site.courses}</p>
        <ThreeCards />
      </Section>

      <Section id="ecole" title="L’école">
        <p style={{maxWidth: '70ch', color: 'var(--muted)'}}>{site.about}</p>
      </Section>

      <Section id="location" title="Localisation">
        <p style={{maxWidth: '70ch', color: 'var(--muted)'}}>{site.address.full}</p>
        <div style={{marginTop: '1rem'}}>
          <iframe
            className="fako-map"
            title="Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.googleMapsEmbed}
          />
        </div>
      </Section>
    </>
  );
}
