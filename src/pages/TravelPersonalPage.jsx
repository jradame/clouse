import travelCover from "../assets/images/travel/venice2016.jpg";

function TravelPersonalPage() {
  return (
    <section className="page-section travel-page">
      <h1 className="page-title">Travel &amp; Personal</h1>
      <p className="page-subtitle">
        Personal work and travel images that inform commissioned projects.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={travelCover}
            alt="Venice 2016"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}


export default TravelPersonalPage;
