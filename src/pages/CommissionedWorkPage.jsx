import commissionedCover from "../assets/images/commissioned-work/double-helix.jpg";

const commissionedCards = Array(12).fill(commissionedCover);

function CommissionedWorkPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Commissioned Work</h1>
      <p className="page-subtitle">
        Selected commissions for commercial, editorial, and hospitality clients.
      </p>

      <div className="gallery-grid">
        {commissionedCards.map((imgSrc, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={imgSrc}
              alt={`Commissioned project ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommissionedWorkPage;
