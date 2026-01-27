import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AboutPanel from "./AboutPanel.jsx";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    const scrollToPortfolio = () => {
      const el = document.getElementById("portfolio");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/") {
      scrollToPortfolio();
    } else {
      navigate("/");
      setTimeout(scrollToPortfolio, 100);
    }
  };

  const handleAboutClick = () => {
    setIsAboutOpen(true);
    setMenuOpen(false); // close mobile menu when opened
  };

  const handlePortfolioMenuClick = () => {
    handlePortfolioClick();
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <Link
              to="/"
              className="header-logo-link"
              onClick={() => setMenuOpen(false)}
            >
              Clouse Photography
            </Link>
          </div>

          {/* desktop nav */}
          <nav className="header-nav">
            <button
              type="button"
              className="header-nav-button"
              onClick={() => setIsAboutOpen(true)}
            >
              About
            </button>

            <button
              type="button"
              className="header-nav-button"
              onClick={handlePortfolioClick}
            >
              Portfolio
            </button>

            <Link to="/prints">Prints</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* mobile hamburger */}
          <button
            type="button"
            className="header-nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header-nav-toggle-line" />
            <span className="header-nav-toggle-line" />
            <span className="header-nav-toggle-line" />
          </button>
        </div>

        {/* mobile menu */}
        <nav
          className={
            "header-nav-mobile" + (menuOpen ? " header-nav-mobile-open" : "")
          }
        >
          <button
            type="button"
            className="header-nav-mobile-link"
            onClick={handleAboutClick}
          >
            About
          </button>

          <button
            type="button"
            className="header-nav-mobile-link"
            onClick={handlePortfolioMenuClick}
          >
            Portfolio
          </button>

          <Link
            to="/prints"
            className="header-nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Prints
          </Link>

          <Link
            to="/contact"
            className="header-nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </header>

      <AboutPanel
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </>
  );
}

export default Header;
