// src/pages/ContactPage.jsx
import profile from "../assets/images/profile/profile.jpg"; // adjust path if needed

function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="contact-layout">
        {/* LEFT COLUMN */}
        <div className="contact-profile-column">
          <div className="contact-profile-wrap">
            <img
              src={profile}
              alt="Profile"
              className="contact-profile-image"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-form-column">
          <div className="contact-form-wrap">
            <h1 className="page-title">Contact</h1>

            <form className="contact-form">
              <label>
                Name
                <input type="text" name="name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Message
                <textarea name="message" rows="4" required />
              </label>

              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
