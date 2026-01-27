import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AboutPanel from "./AboutPanel.jsx";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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

  return (
    <>
      <header className="header">
        <div className="layout-container header-inner">
          <div className="header-logo">
            <Link to="/" className="header-logo-link">
              Clouse Photography
            </Link>
          </div>

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
        </div>
      </header>

      <AboutPanel
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </>
  );
}

export default Header;
