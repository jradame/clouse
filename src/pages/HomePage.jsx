import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import Categories from "../sections/Categories/Categories.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
