import React from 'react';
import { 
  FaFacebookF, FaWhatsapp, FaInstagram, FaTelegramPlane, FaYoutube,
  FaPhone, FaEnvelope
} from 'react-icons/fa';

function Contact() {
  const styles = {
    page: {
      backgroundColor: '#fff5e6',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#2d3748',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    header: {
      fontSize: '3rem',
      marginTop: '40px',
      color: '#2d3748',
    },
    subHeader: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      color: '#4a5568',
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    detailItem: {
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#2d3748',
    },
    icon: {
      fontSize: '1.5rem',
      color: '#2F855A',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    socialIcon: {
      fontSize: '2rem',
      color: '#2d3748',
      transition: 'color 0.3s ease, transform 0.3s ease',
      cursor: 'pointer',
    },
    // ← Updated for fixed dimensions →
    mapContainer: {
      width: '100%',        // full width :contentReference[oaicite:5]{index=5}
      height: '400px',      // fixed height :contentReference[oaicite:6]{index=6}
      borderRadius: '8px',
      overflow: 'hidden',
    },
    map: {
      width: '100%',        // fill width :contentReference[oaicite:7]{index=7}
      height: '100%',       // fill height :contentReference[oaicite:8]{index=8}
      border: 'none',
    },
  };

  const phoneNumber = "+916389616657  +919369464481";
  const email = "contact@CodeQalb.com";
  const socialLinks = [
    { icon: <FaFacebookF />,   url: "https://www.facebook.com/code.qalb?mibextid=ZbWKwL" },
    { icon: <FaWhatsapp />,    url: "https://wa.me/6389616657" },
    { icon: <FaInstagram />,   url: "https://www.instagram.com/code.qalb?igsh=Z3V0OHZ4cHlxYmFk" },
    { icon: <FaTelegramPlane />, url: "http://t.me/CodeQalb" },
    { icon: <FaYoutube />,       url: "https://youtube.com/@codeqalb?si=KOESgbxXKz747MDz" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Contact Us</h1>
        <p style={styles.subHeader}>
          We'd love to hear from you. Get in touch with us through any of the methods below.
        </p>

        {/* Contact Details */}
        <div style={styles.contactDetails}>
          <div style={styles.detailItem}>
            <FaPhone style={styles.icon} />
            <span>{phoneNumber}</span>
          </div>
          <div style={styles.detailItem}>
            <FaEnvelope style={styles.icon} />
            <a href={`mailto:${email}`} style={{ color: '#2d3748', textDecoration: 'none' }}>
              {email}
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          {socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={styles.socialIcon}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#28a745';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#2d3748';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Fixed‐size Map Embed */}
        <div style={styles.mapContainer}>
          <iframe
            style={styles.map}
            src="https://maps.google.com/maps?q=reliwell+techno&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
