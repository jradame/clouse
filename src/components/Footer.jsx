function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Clouse Photography</span>
        <div className="footer-links">
          <a
  href="https://instagram.com/yourhandle"
  onClick={(e) => e.preventDefault()}
  className="nav-link nav-link--disabled"
>
  Instagram
</a>

          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
