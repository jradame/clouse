import commissionedCover from "../assets/images/commissioned-work/double-helix.jpg";

function CommissionedWorkPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Commissioned Work</h1>
      <p className="page-subtitle">
        Selected commissions for commercial, editorial, and hospitality clients.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={commissionedCover}
            alt="Commissioned project"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CommissionedWorkPage;
