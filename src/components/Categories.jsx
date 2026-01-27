import { Link } from "react-router-dom";
import commissionedCover from "../assets/images/commissioned-work/double-helix.jpg";
import hospitalityCover from "../assets/images/hospitality/hospitality-cover.webp";
import travelCover from "../assets/images/travel/venice2016.jpg";
import printsCover from "../assets/images/prints/customprint.jpg";

function Categories() {
  return (
    <section className="categories-section">
      <h2 className="categories-heading">Portfolio</h2>

      <div className="categories-grid">
        {/* Travel & Personal */}
        <Link to="/travel" className="categories-card">
          <div className="categories-thumb">
            <img
              src={travelCover}
              alt="Travel & personal work"
              className="categories-image"
            />
          </div>
          <div className="categories-label">Travel & Personal</div>
        </Link>

        {/* Hospitality & Retail */}
        <Link to="/hospitality" className="categories-card">
          <div className="categories-thumb">
            <img
              src={hospitalityCover}
              alt="Hospitality & retail"
              className="categories-image"
            />
          </div>
          <div className="categories-label">Hospitality & Retail</div>
        </Link>

        {/* Commissioned Work */}
        <Link to="/commissioned" className="categories-card">
          <div className="categories-thumb">
            <img
              src={commissionedCover}
              alt="Commissioned work"
              className="categories-image"
            />
          </div>
          <div className="categories-label">Commissioned Work</div>
        </Link>

        {/* Prints */}
        <Link to="/prints" className="categories-card">
          <div className="categories-thumb">
            <div className="categories-image prints-image-wrapper">
              <img
                src={printsCover}
                alt="Prints selection"
                className="prints-image"
              />
            </div>
          </div>
          <div className="categories-label">Prints</div>
        </Link>
      </div>
    </section>
  );
}

export default Categories;
