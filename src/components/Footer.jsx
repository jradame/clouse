function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Clouse Photography</span>

        <div className="footer-credit">
          DESIGNED &amp; CODED BY JUSTIN ADAME
        </div>

        <div className="footer-links">
          {/* <a
            href="https://www.instagram.com/thisnormallife"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a> */}

          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
