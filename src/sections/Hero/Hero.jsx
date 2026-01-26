import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Clouse Photography</h1>
        <p className={styles.subtitle}>
          Photography focused on three distinct collections. Quiet, minimal, and intentional.
        </p>
        <a href="#categories" className={styles.cta}>
          View portfolio
        </a>
      </div>

      <div className={styles.imageBlock}>
        {/* Replace with real image later */}
        <div className={styles.imagePlaceholder}>Hero image</div>
      </div>
    </section>
  );
}

export default Hero;
