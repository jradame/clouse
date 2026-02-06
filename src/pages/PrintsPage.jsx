import printsCover from "../assets/images/prints/customprint.jpg";

const printsCards = Array(12).fill(printsCover);

function PrintsPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Prints</h1>
      <p className="page-subtitle">
        Selected images currently available as fine art prints.
      </p>

      <div className="gallery-grid">
        {printsCards.map((imgSrc, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={imgSrc}
              alt={`Print ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrintsPage;
