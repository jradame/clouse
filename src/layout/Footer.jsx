import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Clouse Photography</span>
      <div className={styles.links}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="#commissions">Commissions</a>
      </div>
    </footer>
  );
}

export default Footer;
