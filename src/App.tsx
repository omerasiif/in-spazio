import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  X,
  Menu,
  MoveRight,
  Sparkles,
  MapPin,
} from 'lucide-react';

const images = {
  kitchen: '/images/spazio.png',
  partition: '/images/spazio1.png',
};

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

const projects = [
  { category: 'Kitchen Interiors', title: 'Everyday, considered', image: '/images/spazio.png', className: 'project-large' },
  { category: 'Custom Interior Solutions', title: 'A considered division', image: '/images/spazio2.png', className: 'project-tall' },
  { category: 'Home Interiors', title: 'Quietly distinctive', image: '/images/spazio1.png', className: 'project-wide' },
  { category: 'Living Spaces', title: 'Room to live well', image: '/images/spazio.png', className: 'project-medium' },
  { category: 'Contemporary Interiors', title: 'Details with purpose', image: '/images/spazio2.png', className: 'project-medium' },
];

const services = [
  ['01', 'Interior Design Consultation', 'A considered starting point for spaces that reflect how you live.'],
  ['02', 'Modular Kitchens', 'Efficient, elegant kitchens designed around your daily rituals.'],
  ['03', 'Bedroom Interiors', 'Calm, personal rooms with storage and comfort in balance.'],
  ['04', 'Living Room Interiors', 'Layered living spaces made for connection and ease.'],
  ['05', 'Space Planning & Partitions', 'Clearer flow, better proportions and beautifully defined zones.'],
  ['06', 'Custom Furniture & Project Management', 'Thoughtful details carried through with care from idea to space.'],
];

const processSteps = [
  ['01', 'Consultation', 'Understand your space, requirements and vision.'],
  ['02', 'Planning', 'Develop layouts and design directions around the space.'],
  ['03', 'Design', 'Refine materials, details, furniture and overall character.'],
  ['04', 'Execution', 'Bring the design together into a finished space.'],
];

const MAPS_LINK = 'https://maps.app.goo.gl/DwmiYqRW6tw3BhUr7';
const MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1&query=IN+SPAZIO+Interiors+Malappuram+Kerala';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + dir + projects.length) % projects.length);
    }
  };

  return (
    <div className="site-shell">
      {/* Header */}
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <button className="brand" onClick={() => scrollTo('top')}>
          <span className="brand-mark">IN SPAZIO</span>
          <span className="brand-subtitle">Interiors</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <a
          className="header-cta"
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Get a consultation <ArrowRight size={15} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, i) => (
          <button
            key={item.id}
            style={{ transitionDelay: `${45 * i}ms` }}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
            <ArrowRight size={17} />
          </button>
        ))}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Start a conversation <ArrowRight size={17} />
        </a>
      </div>

      <main>
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">Kerala · Interior design · Home solutions</p>
            <h1>
              Interiors designed<br />
              <em>around the way</em><br />
              you live.
            </h1>
            <p className="hero-copy">
              Thoughtful interior design and home solutions for spaces that feel refined, functional and truly yours.
            </p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => scrollTo('projects')}>
                Explore our work <ArrowDown size={16} />
              </button>
              <a
                className="text-link light-link"
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Get a consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </div>
          <div className="hero-index">
            01 <span>/</span> 04
          </div>
        </section>

        {/* About */}
        <section className="about section-pad" id="about">
          <div className="section-number">
            01 <span>About IN SPAZIO</span>
          </div>
          <div className="about-grid">
            <div className="about-image-wrap">
              <img
                src={images.partition}
                alt="Custom partition and wall detail by IN SPAZIO Interiors"
                loading="lazy"
              />
              <span className="image-caption">A detail in the making</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About IN SPAZIO</p>
              <h2>
                Creating spaces with purpose, character <em>and detail.</em>
              </h2>
              <p className="body-copy">
                IN SPAZIO Interiors provides interior and home solutions in Kerala, helping clients transform their spaces through thoughtful design, practical planning and carefully considered d[...]
              </p>
              <div className="about-meta">
                <span>Kerala</span>
                <span>Interior Design</span>
                <span>Home Solutions</span>
              </div>
              <button
                className="circle-link"
                onClick={() => scrollTo('services')}
                aria-label="Explore services"
              >
                <MoveRight size={20} />
              </button>
            </div>
          </div>
          <div className="decorative-n">S</div>
        </section>

        {/* Projects */}
        <section className="projects section-pad" id="projects">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">02 / Selected work</p>
              <h2>
                Spaces that feel<br />
                <em>like yours.</em>
              </h2>
            </div>
            <p className="section-intro">
              A glimpse into the interiors, details and spaces we help bring to life.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <button
                key={`${project.title}-${i}`}
                className={`project-card ${project.className}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <span className="project-shade" />
                <span className="project-info">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </span>
                <span className="project-arrow">
                  <ArrowRight size={18} />
                </span>
              </button>
            ))}
          </div>
          <p className="photo-note">
            Actual project photography · IN SPAZIO Interiors
          </p>
        </section>

        {/* Services */}
        <section className="services section-pad" id="services">
          <div className="section-number">
            03 <span>What we do</span>
          </div>
          <div className="section-heading-row services-heading">
            <div>
              <p className="eyebrow">Our services</p>
              <h2>
                Designed around<br />
                <em>your everyday.</em>
              </h2>
            </div>
            <p className="section-intro">
              Interior solutions designed around your space, lifestyle and requirements.
            </p>
          </div>
          <div className="services-list">
            {services.map(([num, title, desc]) => (
              <div className="service-row" key={num}>
                <span className="service-number">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowRight className="service-icon" size={18} />
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy section-pad">
          <div className="philosophy-image">
            <img
              src={images.kitchen}
              alt="Custom modular kitchen interior by IN SPAZIO Interiors"
              loading="lazy"
            />
            <div className="image-stamp">
              <Sparkles size={17} />
              <span>Thoughtful<br />by design</span>
            </div>
          </div>
          <div className="philosophy-copy">
            <p className="eyebrow">04 / Our approach</p>
            <h2>
              Beautiful spaces should also <em>work beautifully.</em>
            </h2>
            <p className="body-copy">
              From the overall layout to the smallest detail, every element should have a purpose. Our approach combines visual character with practical functionality to create interiors that fee[...]
            </p>
            <div className="principles">
              <div>
                <span>01</span>
                <strong>Function</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Detail</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Character</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="image-break">
          <img src={images.partition} alt="Interior detail" loading="lazy" />
          <div className="image-break-overlay" />
          <p>Designed for living.</p>
          <span className="break-mark">IN SPAZIO</span>
        </section>

        {/* Gallery */}
        <section className="gallery section-pad">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">05 / Project gallery</p>
              <h2>
                A closer look at<br />
                <em>the details.</em>
              </h2>
            </div>
            <div className="gallery-side">
              <p className="section-intro">
                Explore the material, light and craft behind our interiors.
              </p>
              <div className="filter-row">
                <button className="active">All</button>
              </div>
            </div>
          </div>
          <div className="gallery-grid">
            {projects.map((project, i) => (
              <button
                key={`gallery-${i}`}
                className={`gallery-item gallery-${i + 1}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <span>
                  <ArrowUp size={15} /> View detail
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="process section-pad" id="process">
          <div className="section-number">
            06 <span>Our process</span>
          </div>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">From idea to space</p>
              <h2>
                Good design starts<br />
                <em>with listening.</em>
              </h2>
            </div>
            <p className="section-intro">
              A clear, collaborative approach to creating spaces with intention.
            </p>
          </div>
          <div className="process-list">
            {processSteps.map(([num, title, desc]) => (
              <div className="process-item" key={num}>
                <span>{num}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews section-pad">
          <div className="review-grid">
            <div>
              <p className="eyebrow">07 / Google presence</p>
              <h2>
                Made to be lived in.<br />
                <em>Built on trust.</em>
              </h2>
            </div>
            <div className="review-card">
              <div className="google-g">G</div>
              <div>
                <div className="rating">
                  <strong>4.6</strong>
                  <span>★★★★★</span>
                </div>
                <p>Rated 4.6/5 on Google</p>
                <small>29 reviews</small>
              </div>
              <a href={MAPS_SEARCH} target="_blank" rel="noreferrer">
                View Google reviews <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact section-pad" id="contact">
          <div className="contact-map">
            <div className="map-lines" />
            <div className="map-pin">
              <MapPin size={19} />
            </div>
            <div className="map-label">
              Malappuram<br />
              <span>Kerala, India</span>
            </div>
          </div>
          <div className="contact-copy">
            <p className="eyebrow">08 / Visit us</p>
            <h2>
              Let's talk about<br />
              <em>your space.</em>
            </h2>
            <p className="address">
              IN SPAZIO Interiors<br />
              <br />
              [ADDRESS]<br />
              Kerala, India
            </p>
            <a className="phone" href="tel:[PHONE NUMBER]">
              [PHONE NUMBER]
            </a>
            <div className="contact-actions">
              <a className="button button-dark" href="tel:[PHONE NUMBER]">
                Call now <ArrowRight size={15} />
              </a>
              <a className="button button-outline" href="https://wa.me/[WHATSAPP NUMBER]" target="_blank" rel="noreferrer">
                WhatsApp <ArrowRight size={15} />
              </a>
              <a className="directions" href={MAPS_LINK} target="_blank" rel="noreferrer">
                Get directions <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <img src={images.kitchen} alt="IN SPAZIO Interiors kitchen project" loading="lazy" />
          <div className="final-overlay" />
          <div className="final-content">
            <p className="eyebrow light">IN SPAZIO Interiors</p>
            <h2>
              Let's create a space<br />
              that <em>feels like yours.</em>
            </h2>
            <p>Have a home or interior project in mind? Start a conversation with us.</p>
            <a
              className="button button-light"
              href="https://wa.me/[WHATSAPP NUMBER]"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div>
            <span className="footer-logo">IN SPAZIO</span>
            <p>
              Interiors<br />
              & Home Solutions
            </p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="footer-links">
            <span>Connect</span>
            <a href="tel:[PHONE NUMBER]">[PHONE NUMBER]</a>
            <a href="https://wa.me/[WHATSAPP NUMBER]" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 IN SPAZIO Interiors</span>
          <span>Kerala, India</span>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer">
          <button
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={23} />
          </button>
          <button
            className="lightbox-prev"
            onClick={() => navigateLightbox(-1)}
            aria-label="Previous image"
          >
            <ArrowLeft size={27} />
          </button>
          <div className="lightbox-image-wrap">
            <img src={projects[lightboxIndex].image} alt={projects[lightboxIndex].title} />
            <p>
              {projects[lightboxIndex].category} <span>·</span> {projects[lightboxIndex].title}
            </p>
          </div>
          <button
            className="lightbox-next"
            onClick={() => navigateLightbox(1)}
            aria-label="Next image"
          >
            <ArrowRight size={27} />
          </button>
          <div className="lightbox-count">
            {String(lightboxIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
