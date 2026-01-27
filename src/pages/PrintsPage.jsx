// src/pages/PrintsPage.jsx
import printsCover from "../assets/images/prints/customprint.jpg";

function PrintsPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Prints</h1>
      <p className="page-subtitle">
        Selected photographs available as archival prints for homes, studios,
        and hospitality spaces.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={printsCover}
            alt="Framed print"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}

export default PrintsPage;
