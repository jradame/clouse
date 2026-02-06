import hospitalityCover from "../assets/images/hospitality/hospitality-cover.webp";

const hospitalityCards = Array(12).fill(hospitalityCover);

function HospitalityRetailPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Hospitality & Retail</h1>
      <p className="page-subtitle">
        Photography for hospitality, retail, and commercial environments.
      </p>

      <div className="gallery-grid">
        {hospitalityCards.map((imgSrc, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={imgSrc}
              alt={`Hospitality project ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HospitalityRetailPage;
