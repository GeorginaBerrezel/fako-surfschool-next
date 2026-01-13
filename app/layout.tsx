import type { Metadata } from "next";
import "./../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultMetadata, businessJsonLd } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(businessJsonLd)}} />
      </head>
      <body>
        <Header />
        <main id="main" className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
