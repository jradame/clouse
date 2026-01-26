import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Clouse Photography</div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#categories">Portfolio</a>
        <a href="#prints">Prints</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
