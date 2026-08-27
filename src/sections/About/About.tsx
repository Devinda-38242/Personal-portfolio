
import './About.css';
import devindaPhoto from '../../assets/devinda-about.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Header */}
        <div className="about-heading">
          <span className="about-eyebrow">
            ABOUT
          </span>

          <span className="about-heading-line" />
          
          <span className="about-heading-dot" />
        </div>

        <div className="about-main">

          {/* Portrait Card */}
          <div className="about-portrait-wrapper">
            <div className="about-portrait-card">

              <div className="portrait-top">
                <span>DEV / 01</span>

                <div className="portrait-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="portrait-glow" />

              <div className="portrait-image-wrapper">
                <img
                  src={devindaPhoto}
                  alt="Devinda"
                  className="portrait-image"
                />
              </div>

              <div className="portrait-overlay" />

              <div className="portrait-content">
                <span className="portrait-name">
                  DEVINDA
                </span>

                <span className="portrait-role">
                  DATA SCIENCE UNDERGRADUATE
                </span>

                <div className="portrait-line" />

                <div className="portrait-meta">
                  <div>
                    <span className="meta-label">STATUS</span>
                    <span className="meta-value">BUILDING</span>
                  </div>

                  <div>
                    <span className="meta-label">FOCUS</span>
                    <span className="meta-value">AI / ML</span>
                  </div>

                  <div>
                    <span className="meta-label">MODE</span>
                    <span className="meta-value">CURIOUS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* About Content */}
          <div className="about-content">

            <span className="about-label">
              WHO IS
            </span>

            <h2>
              DEVINDA<span>?</span>
            </h2>

            <div className="about-subtitle">
              DATA SCIENCE <span>×</span> TECHNOLOGY <span>×</span> CREATIVITY
            </div>

            <div className="about-story">
              <p>
                I'm a Data Science undergraduate passionate about
                turning data into meaningful insights and building
                intelligent solutions that create real-world impact.
              </p>

              <p>
                I enjoy exploring the intersection of AI, analytics
                and software engineering — solving complex problems,
                designing thoughtful solutions and continuously
                learning new technologies.
              </p>

              <p>
                Beyond the code, I'm driven by creativity, curiosity
                and the belief that technology can be used to create
                experiences that genuinely matter.
              </p>
            </div>

            {/* Stats */}
            <div className="about-stats">

              <div className="about-stat">
                <span className="stat-icon">◫</span>
                <strong>02</strong>
                <span>YEAR</span>
              </div>

              <div className="about-stat">
                <span className="stat-icon">⌘</span>
                <strong>AI</strong>
                <span>FOCUS</span>
              </div>

              <div className="about-stat">
                <span className="stat-icon">✦</span>
                <strong>∞</strong>
                <span>CURIOSITY</span>
              </div>

              <div className="about-stat">
                <span className="stat-icon">↗</span>
                <strong>∞</strong>
                <span>LEARNING</span>
              </div>

            </div>

          </div>
        </div>

        {/* Identity Cards */}
        <div className="identity-grid">

          <div className="identity-card">
            <span className="identity-number">01</span>

            <div className="identity-icon">⌁</div>

            <h3>DATA</h3>

            <span className="identity-line" />

            <p>
              Turning raw data into meaningful insights
              that support better decisions and create value.
            </p>
          </div>

          <div className="identity-card">
            <span className="identity-number">02</span>

            <div className="identity-icon">⌘</div>

            <h3>BUILD</h3>

            <span className="identity-line" />

            <p>
              Building intelligent, scalable and
              user-focused solutions for real problems.
            </p>
          </div>

          <div className="identity-card">
            <span className="identity-number">03</span>

            <div className="identity-icon">✦</div>

            <h3>CREATE</h3>

            <span className="identity-line" />

            <p>
              Combining technology and creativity to
              design experiences that make an impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;