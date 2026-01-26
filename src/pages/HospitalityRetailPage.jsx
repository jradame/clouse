import styles from "./HospitalityRetailPage.module.css";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

const photos = Array.from({ length: 34 }, (_, index) => ({
  id: index + 1,
  src: `/src/assets/images/collection-two/retail-${index + 1}.jpg`, // update names later
  alt: `Hospitality + Retail ${index + 1}`,
}));

function HospitalityRetailPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Hospitality + Retail</h1>
          <p className={styles.subtitle}>
            Spaces, details, and moments from bars, restaurants, and retail environments.
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

export default HospitalityRetailPage;
