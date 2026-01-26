import styles from "./CommissionedWorkPage.module.css";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

const photos = Array.from({ length: 34 }, (_, index) => ({
  id: index + 1,
  src: `/src/assets/images/collection-three/commissioned-${index + 1}.jpg`, // adjust filenames later
  alt: `Commissioned Work ${index + 1}`,
}));

function CommissionedWorkPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Commissioned Work</h1>
          <p className={styles.subtitle}>
            Selected assignments for brands, publications, and clients.
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

export default CommissionedWorkPage;
