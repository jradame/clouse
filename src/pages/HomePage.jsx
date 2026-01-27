import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";

function HomePage() {
  return (
    <>
      <section className="page-section">
        <Hero />
      </section>

      <section className="page-section" id="portfolio">
        <Categories />
      </section>
    </>
  );
}

export default HomePage;
