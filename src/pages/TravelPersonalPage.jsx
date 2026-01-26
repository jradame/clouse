import styles from "./TravelPersonalPage.module.css";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

const photos = Array.from({ length: 34 }, (_, index) => ({
  id: index + 1,
  src: `/images/travel/travel-${index + 1}.jpg`, // adjust paths later
  alt: `Travel + Personal ${index + 1}`,
}));

function TravelPersonalPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Travel + Personal</h1>
          <p className={styles.subtitle}>
            A selection of travel and personal work collected over the years.
          </p>

          <div className={styles.grid}>
            {photos.map((photo) => (
              <figure key={photo.id} className={styles.item}>
                <img src={photo.src} alt={photo.alt} className={styles.image} />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TravelPersonalPage;
