import commissionedCover from "../assets/images/commissioned-work/double-helix.jpg";

function CommissionedWorkPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Commissioned Work</h1>
      <p className="page-subtitle">
        Selected commissions for clients across hospitality, product, and
        editorial.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={commissionedCover}
            alt="Double helix installation"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CommissionedWorkPage;
