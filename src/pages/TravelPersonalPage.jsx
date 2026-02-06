import travelCover from "../assets/images/travel/venice2016.jpg";

const travelCards = Array(12).fill(travelCover);

function TravelPersonalPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Travel & Personal</h1>
      <p className="page-subtitle">
        Selected personal and travel work from various locations.
      </p>

      <div className="gallery-grid">
        {travelCards.map((imgSrc, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={imgSrc}
              alt={`Travel photograph ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelPersonalPage;
