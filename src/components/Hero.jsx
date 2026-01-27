function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-text">
        <h1 className="home-hero-title">Clouse Photography</h1>
        <p className="home-hero-subtitle">
          Hospitality, travel, and commissioned photography with a refined,
          editorial perspective.
        </p>
        <a href="#portfolio" className="home-hero-cta">
          View Portfolio
        </a>
      </div>

      <div className="home-hero-image-block">
        <div className="home-hero-image-placeholder">
          Featured image
        </div>
      </div>
    </section>
  );
}

export default Hero;
