import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <section className="contact-page">
      <div className="contact-intro">
        <h1>Contact &amp; réservations</h1>
        <p>
          Pour une réservation, une privatisation ou une question sur la carte,
          vous pouvez nous écrire via le formulaire ou nous appeler directement.
        </p>
        <ul className="contact-infos">
          <li>
            <strong>Téléphone</strong> :{" "}
            <a href={`tel:${site.telephone}`}>{site.telephone}</a>
          </li>
          <li>
            <strong>Adresse</strong> :{" "}
            {site.address.streetAddress}, {site.address.postalCode}{" "}
            {site.address.addressLocality}
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
