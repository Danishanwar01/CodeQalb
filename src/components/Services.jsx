import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiCheck, FiCode, FiSmartphone, FiCloud, FiUsers, FiDatabase, FiGlobe, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Services = () => {

  const NextArrow = (props) => (
    <button
      {...props}
      style={{
        ...props.style,
        display: "block",
        width: "50px",
        height: "50px",
        right: "-55px",
        top: "50%", 
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1,
        transform: "translateY(-50%)", 
        transition: "all 0.3s ease",
        position: "absolute" 
      }}
      className="slick-next-custom"
    >
      <FiChevronRight size={40} color="#2F855A" />
    </button>
  );
  
  const PrevArrow = (props) => (
    <button
      {...props}
      style={{
        ...props.style,
        display: "block",
        width: "50px",
        height: "50px",
        left: "-55px",
        top: "50%",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1,
        transform: "translateY(-50%)", 
        transition: "all 0.3s ease",
        position: "absolute" 
      }}
      className="slick-prev-custom"
    >
      <FiChevronLeft size={40} color="#2F855A" />
    </button>
  );
  
  const styles = {
    hero: {
      backgroundColor: '#2F855A',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#2d3748',
    },
    serviceCard: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '10px',
    },
    ctaButton: {
      backgroundColor: '#2F855A',
      color: '#ffffff',
      padding: '15px 40px',
      borderRadius: '25px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    featureList: {
      margin: '20px 0',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '20px 0',
    },
    techItem: {
      backgroundColor: '#f0fff4',
      padding: '8px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#2F855A',
    },
  };

  const services = [
    {
      icon: <FiCode style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'Web Development',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'CMS Integration',
        'API Development',
        'Website Maintenance'
      ],
      tech: ['React', 'Node.js', 'Python', 'WordPress', 'MongoDB']
    },
    {
      icon: <FiSmartphone style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'Mobile App Development',
      features: [
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Testing & Deployment',
        'Maintenance & Updates'
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: <FiDatabase style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'Software Development',
      features: [
        'Custom Software Solutions',
        'ERP Systems',
        'CRM Development',
        'Cloud Integration',
        'Legacy System Modernization'
      ],
      tech: ['Java', '.NET', 'Docker', 'AWS', 'MySQL']
    },
    {
      icon: <FiUsers style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'IT Consulting',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'IT Infrastructure Audit',
        'Cybersecurity Consulting',
        'Project Management'
      ],
      tech: ['ITIL', 'COBIT', 'NIST', 'GDPR', 'ISO 27001']
    },
    {
      icon: <FiCloud style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'Cloud Services',
      features: [
        'Cloud Migration',
        'Server Management',
        'Cloud Security',
        'DevOps Automation',
        '24/7 Monitoring'
      ],
      tech: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform']
    },
    {
      icon: <FiGlobe style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
      title: 'Digital Marketing',
      features: [
        'SEO & SEM Strategies',
        'Content Marketing',
        'Email Campaigns',
        'Social Media Management',
        'Analytics & Reporting'
      ],
      tech: ['Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp', 'HubSpot']
    }
  ];

  const handleContact = () => {
    window.open('https://wa.me/6389616657', '_blank');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 2 : 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#fff5e6', minHeight: '100vh' }}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
            Professional IT Services
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            Transform your business with our expert technology solutions
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 20px' }}>
        <div style={styles.container}>
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                  {service.icon}
                  <h2 style={{ fontSize: '2rem', color: '#2d3748' }}>{service.title}</h2>
                </div>
                <div style={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FiCheck style={{ color: '#2F855A' }} />
                      <p style={{ color: '#4a5568' }}>{feature}</p>
                    </div>
                  ))}
                </div>
                <h3 style={{ color: '#2d3748', margin: '20px 0' }}>Technologies We Use:</h3>
                <div style={styles.techStack}>
                  {service.tech.map((tech, idx) => (
                    <span key={idx} style={styles.techItem}>{tech}</span>
                  ))}
                </div>
                <button 
                  onClick={handleContact}
                  style={styles.ctaButton}
                >
                  Schedule Consultation
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#2F855A' }}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <h2 style={{ ...styles.sectionHeading, color: 'white' }}>
            Need Custom Solutions?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#e2e8f0' }}>
            Let's discuss your unique business requirements
          </p>
          <button 
            onClick={handleContact}
            style={{ 
              ...styles.ctaButton,
              backgroundColor: 'white',
              color: '#2F855A'
            }}
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
