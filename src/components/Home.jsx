import React, { useState, useEffect, useRef } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiSmartphone,
  FiPackage,
  FiUsers,
  FiCloud,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiShare2,
  FiFileText,
  FiDollarSign,
  FiMail,
  FiBarChart2,
  FiGlobe,
  FiMessageSquare,
  FiShield,
  FiActivity,
  FiSettings,
  FiRefreshCw
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Helper Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

// Static Data
const coreServices = [
  { icon: <FiCode />, title: 'Web Development', description: 'Custom web solutions tailored to your business needs.' },
  { icon: <FiSmartphone />, title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for all devices.' },
  { icon: <FiPackage />, title: 'Software Development', description: 'End-to-end software solutions for your organization.' },
  { icon: <FiUsers />, title: 'IT Consulting', description: 'Expert guidance and efficient project delivery.' },
  { icon: <FiCloud />, title: 'Cloud Services', description: 'Scalable cloud infrastructure and management.' },
  { icon: <FiBarChart2 />, title: 'Digital Marketing', description: 'Innovative strategies to boost online reach.' }
];

const marketingServices = [
  { icon: <FiSearch />, title: 'SEO Optimization', description: 'Boost search engine rankings and organic traffic.' },
  { icon: <FiShare2 />, title: 'Social Media Marketing', description: 'Engage audiences across social platforms.' },
  { icon: <FiFileText />, title: 'Content Marketing', description: 'Compelling content strategies that convert.' },
  { icon: <FiDollarSign />, title: 'Online Advertising', description: 'Targeted PPC campaigns that deliver results.' },
  { icon: <FiMail />, title: 'Email Marketing', description: 'Personalized email campaigns that convert.' },
  { icon: <FiBarChart2 />, title: 'Analytics & Reporting', description: 'Data-driven insights to optimize strategy.' }
];

const runningprojects = [
  { icon: <FiSmartphone />, title: 'Trusted Experts at your Door', description: 'Book trusted professionals for beauty, repair, cleaning & more, all in one app.' },
  { icon: <FiCode />, title: 'Luxora – Shop Fine Live Better', description: 'Everything you need, just a click away.' },
  { icon: <FiMessageSquare />, title: 'Real-Time Messaging for Everyone', description: 'Online now – feel free to say hi!' },
  { icon: <FiGlobe />, title: 'The Awaz – Hear the World Speak', description: 'Global stories, local voices. Stay informed with news that resonates.' },
];

const projectSteps = [
  {  icon: <FiUsers />, title: 'Discovery', description: 'Engage stakeholders to capture vision, goals, scope, and potential risks.'},
  { icon: <FiFileText />, title: 'Blueprint', description: 'Create a strategic plan with milestones, deliverables, resources, and change-control.'},
  { icon: <FiShare2 />, title: 'Communication',description: 'Establish update cadences, channels, and feedback loops for full transparency.'},
  { icon: <FiChevronRight />,title: 'Execution',description: 'Mobilize our team with proven methodologies, quality checks, and agile adaptation.' },
  { icon: <FiCheck />, title: 'Delivery & Support',description: 'Deploy on time, on budget, and provide post-launch training and performance monitoring.'},
  { icon: <FiShield />, title: 'Risk Management', description: 'Identify, assess, and mitigate risks to keep your project on solid ground.' },
  {icon: <FiShare2 />,title: 'Communication', description: 'Establish update cadences, channels, and feedback loops for full transparency.' },
  {icon: <FiActivity />, title: 'Quality Assurance', description: 'Perform rigorous testing and validation at every phase to ensure excellence.'},
  { icon: <FiSettings />, title: 'Client Training', description: 'Equip your team with the knowledge and documentation for a seamless handoff.'},
  { icon: <FiRefreshCw />, title: 'Continuous Improvement', description: 'Analyze performance data and implement refinements to maximize ROI.'}
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  const visibleCards = isMobile ? 1 : windowWidth < 1024 ? 2 : 3;
  const cardWidth = 300;
  const cardMargin = 20;
  const actualCardWidth = cardWidth + cardMargin;
  const maxSlideIndex = Math.max(0, coreServices.length - visibleCards);
  const safeSlide = Math.min(currentSlide, maxSlideIndex);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));

  const handleBookDemo = () =>
    window.open('https://wa.me/6389616657', '_blank');

  // Touch Support
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const handleTouchStart = (e) =>
    (touchStartXRef.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    (touchEndXRef.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) (diff > 0 ? nextSlide() : prevSlide());
  };

  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
const maxProjectIndex = Math.max(0, projectSteps.length - visibleCards);
const safeProjectSlide = Math.min(currentProjectSlide, maxProjectIndex);

const nextProjectSlide = () =>
  setCurrentProjectSlide((p) =>
    p >= maxProjectIndex ? 0 : p + 1
  );
const prevProjectSlide = () =>
  setCurrentProjectSlide((p) =>
    p <= 0 ? maxProjectIndex : p - 1
  );

// Touch support for project slider
const projTouchStartX = useRef(0);
const projTouchEndX = useRef(0);
const handleProjTouchStart = (e) =>
  (projTouchStartX.current = e.targetTouches[0].clientX);
const handleProjTouchMove = (e) =>
  (projTouchEndX.current = e.targetTouches[0].clientX);
const handleProjTouchEnd = () => {
  const diff = projTouchStartX.current - projTouchEndX.current;
  if (Math.abs(diff) > 50)
    diff > 0 ? nextProjectSlide() : prevProjectSlide();
};

  // Styles
  const styles = {
    /* prevent ANY horizontal scrolling on the page */
    page: {
      backgroundColor: '#fff5e6',
      fontFamily: 'sans-serif',
      overflowX: 'hidden',
      touchAction: 'pan-y' /* let vertical scroll but stop horizontal page–bounce */
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 30px'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #f5f1f0, #edd99d)',
      textAlign: 'center',
      padding: '20px'
    },
    heading: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      marginBottom: '20px',
      color: '#2d3748'
    },
    subheading: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: '#4a5568',
      marginBottom: '30px'
    },
    button: {
      backgroundColor: '#2F855A',
      color: '#fff',
      padding: '14px 28px',
      borderRadius: '30px',
      fontWeight: '600',
      margin: '10px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    },
    /* clamp the slider so it can't overscroll */
    sliderWrapper: {
      overflow: 'hidden',
      position: 'relative',
      marginTop: '60px',
      overscrollBehaviorX: 'none' /* no bounce on the slider itself */
    },
    sliderContainer: {
      display: 'flex',
      transition: 'transform 0.4s ease-in-out',
      transform: `translateX(-${safeSlide * actualCardWidth}px)`
    },
    featureCard: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      padding: '20px',
      minWidth: `${cardWidth}px`,
      margin: '0 10px',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: '#2F855A',
      color: '#fff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: 'none',
      cursor: 'pointer',
      zIndex: 2
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '2.5rem',
      marginBottom: '40px',
      color: '#2F855A'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: '20px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      textAlign: 'center'
    },
    ctaSection: {
      padding: '80px 20px',
      backgroundColor: '#fff5e6',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heading}>
            Transform Your Business with{' '}
            <span style={{ color: '#2F855A' }}>Tech Solutions</span>
          </h1>
          <p style={styles.subheading}>
            Leverage cutting-edge technology solutions to drive your business
            forward.
          </p>
          <p style={styles.subheading}>
            "Grow local, go global—turn your small shop into a bold online
            brand and turn connections into celebrations!"
          </p>
          <div>
            <Link to="/services" style={styles.button}>
              Get Started <FiArrowRight />
            </Link>
            <button
              onClick={handleBookDemo}
              style={{ ...styles.button, backgroundColor: '#0a192f' }}
            >
              Book Demo <FiCheck />
            </button>
          </div>
        </div>
      </section>

      {/* Core Services Slider */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff5e6' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Core Services</h2>
          <div style={styles.sliderWrapper}>
            {!isMobile && (
              <button
                style={{ ...styles.navButton, left: '10px' }}
                onClick={prevSlide}
              >
                <FiChevronLeft />
              </button>
            )}
            <div
              style={styles.sliderContainer}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {coreServices.map((item, i) => (
                <div key={i} style={styles.featureCard}>
                  <div
                    style={{
                      fontSize: '2rem',
                      color: '#2F855A',
                      marginBottom: '15px'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#4a5568' }}>{item.description}</p>
                </div>
              ))}
            </div>
            {!isMobile && (
              <button
                style={{ ...styles.navButton, right: '10px' }}
                onClick={nextSlide}
              >
                <FiChevronRight />
              </button>
            )}
          </div>
        </div>
      </section>

    
      {/* Marketing Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Digital Marketing Solutions</h2>
          <div style={styles.grid}>
            {marketingServices.map((item, i) => (
              <div key={i} style={styles.card}>
                <div style={{ fontSize: '2rem', color: '#2F855A', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#4a5568' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Running projects Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>In Progress at CodeQalb</h2>
          <div style={styles.grid}>
            {runningprojects.map((item, i) => (
              <div key={i} style={styles.card}>
                <div style={{ fontSize: '2rem', color: '#2F855A', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#4a5568' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



     
 {/* Project Management Slider */}
<section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
  <div style={styles.container}>
    <h2 style={styles.sectionTitle}>Project Management Process</h2>
    <div style={styles.sliderWrapper}>
      {!isMobile && (
        <button
          style={{ ...styles.navButton, left: 10 }}
          onClick={prevProjectSlide}
        >
          <FiChevronLeft />
        </button>
      )}

      <div
        style={{
          ...styles.sliderContainer,
          transform: `translateX(-${safeProjectSlide * actualCardWidth}px)`
        }}
        onTouchStart={handleProjTouchStart}
        onTouchMove={handleProjTouchMove}
        onTouchEnd={handleProjTouchEnd}
      >
        {projectSteps.map((item, i) => (
          <div key={i} style={styles.featureCard}>
            <div
              style={{
                fontSize: '2rem',
                color: '#2F855A',
                marginBottom: '15px'
              }}
            >
              {item.icon}
            </div>
            <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>
              {item.title}
            </h3>
            <p style={{ color: '#4a5568' }}>{item.description}</p>
          </div>
        ))}
      </div>

      {!isMobile && (
        <button
          style={{ ...styles.navButton, right: 10 }}
          onClick={nextProjectSlide}
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  </div>
</section>




      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ready to Transform Your Business?</h2>
          <div>
            <Link to="/services" style={styles.button}>
              Get Started <FiArrowRight />
            </Link>
            <button onClick={handleBookDemo} style={{ ...styles.button, backgroundColor: '#0a192f' }}>
              Book Demo <FiCheck />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;