import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { toWaNumber, toTelHref } from "@/lib/phone";

export default function Page() {
  const waNumber = toWaNumber(site.telephone);
  const waHref = `https://wa.me/${waNumber}`;
  const telHref = `tel:${toTelHref(site.telephone)}`;

  return (
    <>
      <section
        className="hero-banner"
        aria-label="Salle du restaurant à Ayent"
      >
        <div className="hero-banner-image">
          <Image
            src="/images/cover-l-atelier-des-gourmets.jpeg"
            alt="Salle du restaurant à Ayent"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-title">
        {/* COLONNE GAUCHE */}
        <div className="home-intro-text">
          <h1 id="home-intro-title">Atelier des Gourmets</h1>

          <p>
            Restaurant à Ayent, entre cuisine de saison, plats signature
            et spécialités valaisannes.
          </p>

          <p>
            Réservation au{" "}
            <a href={telHref}>{site.telephone}</a>{" "}
            ou directement par WhatsApp.
          </p>

          <p>
            Vous pouvez aussi nous écrire via le{" "}
            <Link href="/contact">formulaire de contact</Link>.
          </p>

          <div className="home-intro-actions">
            <a
              className="btn btn-outline home-wa-btn"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/whatsapp.svg"
                alt=""
                width={18}
                height={18}
                style={{ marginRight: ".5rem" }}
              />
              Réserver via WhatsApp
            </a>

            <Link className="btn" href="/menu">
              Voir la carte
            </Link>
          </div>

          <div
            className="home-menu-preview card"
            aria-label="Aperçu de quelques plats du menu"
          >
            <h2 className="home-menu-preview-title">
              Un aperçu de la carte
            </h2>
            <div className="home-menu-preview-items">
              <div className="home-menu-preview-item">
                <div className="home-menu-preview-image">
                  <Image
                    src="/images/menu/carpaccio-de-poulpe-marine.jpeg"
                    alt="Carpaccio de poulpe mariné"
                    width={400}
                    height={260}
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h3>Entrée</h3>
                <p className="home-menu-preview-name">
                  Carpaccio de poulpe mariné
                </p>
                <p className="home-menu-preview-desc">
                  Fines tranches de poulpe, assaisonnement frais et citronné.
                </p>
              </div>

              <div className="home-menu-preview-item">
                <div className="home-menu-preview-image">
                  <Image
                    src="/images/menu/risotto-de-la-mer-creme-de-roquette-pesto.jpeg"
                    alt="Risotto de la mer, crème de roquette et pesto"
                    width={400}
                    height={260}
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h3>Plat</h3>
                <p className="home-menu-preview-name">
                  Risotto de la mer
                </p>
                <p className="home-menu-preview-desc">
                  Crème de roquette, pesto maison et poissons de l&apos;arrivage.
                </p>
              </div>

              <div className="home-menu-preview-item">
                <div className="home-menu-preview-image">
                  <Image
                    src="/images/menu/fungo.jpeg"
                    alt="Pizza Fungo"
                    width={400}
                    height={260}
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h3>Pizza</h3>
                <p className="home-menu-preview-name">
                  Pizza Fungo
                </p>
                <p className="home-menu-preview-desc">
                  Champignons frais, mozzarella fondante et pâte maison.
                </p>
              </div>
            </div>
            <Link className="btn" href="/menu">
              Voir la carte
            </Link>
            <p className="home-menu-preview-note">
              Carte susceptible de varier selon la saison et l’arrivage.
            </p>
          </div>
        </div>

        {/* COLONNE DROITE */}
        <div className="home-intro-form">
          <h2>Notre salle</h2>

          <p className="home-intro-form-caption">
            Le chalet où l’on se sent bien dès la première minute : ambiance douce,
            coin feu qui réchauffe l’hiver, terrasse baignée de soleil face aux
            montagnes.
          </p>

          <p className="home-intro-form-caption">
            On y partage des moments simples et chaleureux, autour d’une cuisine
            faite maison et servie avec attention.
          </p>

          <p className="home-intro-form-caption">
            Une parenthèse gourmande à la montagne, en famille, entre amis ou juste
            pour le plaisir.
          </p>

          <div className="home-team-photo">
            <Image
              src="/images/salle-l-atelier-du-gourmet.jpeg"
              alt="Salle du restaurant à l’Atelier des Gourmets"
              width={900}
              height={600}
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "0.75rem",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION ADRESSE */}
      <section className="card home-address" aria-labelledby="adresse">
        <h2 id="adresse">Nous trouver</h2>

        <p>
          <strong>Route de Botyre 30 – 1966 Ayent</strong>
        </p>

        <p>
          Téléphone : <a href={telHref}>{site.telephone}</a>
        </p>

        <div
          className="card"
          style={{ padding: 0 }}
          aria-label="Carte Google Maps intégrée"
        >
          <iframe
            title="Itinéraire vers L’atelier des Gourmets"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Route%20de%20Botyre%2030%2C%201966%20Ayent&output=embed"
          />
        </div>

        <p className="home-address-note">
          Le restaurant est situé à Ayent (Botyre), facilement accessible en
          voiture. Parking à proximité.
        </p>
      </section>
    </>
  );
}
