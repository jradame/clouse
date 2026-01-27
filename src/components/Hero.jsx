function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-text">
        <h1 className="home-hero-title">
          Clouse Photography
        </h1>

        <p className="home-hero-subtitle">
          Hospitality, travel, and commissioned photography with a refined,
          editorial perspective.
        </p>

        <p className="home-hero-body">
          Partnering with hotels, restaurants, and creative brands to capture
          spaces, stories, and details with quiet precision and a modern,
          cinematic feel.
        </p>

        {/* <a href="#portfolio" className="home-hero-cta">
          View portfolio
        </a> */}
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
