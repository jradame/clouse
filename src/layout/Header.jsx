import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          Clouse Photography
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/prints">Prints</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
