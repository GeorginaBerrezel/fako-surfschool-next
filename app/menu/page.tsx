import "../../styles/menus.css";
import menuData from "../../data/menu.json";
import MenuView from "../../components/MenuView";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <section className="menu-wrap" aria-labelledby="menu-title">
      <header className="menu-hero">
        <h1 id="menu-title">Carte &amp; Menus</h1>
        <p>Photos indicatives. Prix sujets à modification.</p>
      </header>

      <MenuView categories={menuData.categories} />
    </section>
  );
}
