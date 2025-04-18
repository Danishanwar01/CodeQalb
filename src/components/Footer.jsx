import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaTelegramPlane,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#2F855A',
      color: '#fff',
      padding: '2rem 1rem',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    navLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    contactInfo: {
      marginTop: '1rem',
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    contactLink: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '1.5rem',
    },
    iconLink: {
      textDecoration: 'none',
    },
    icon: {
      fontSize: '1.75rem',
      color: '#fff',
      transition: 'color 0.3s ease, transform 0.3s ease',
      cursor: 'pointer',
    },
    backToTop: {
      marginTop: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
    },
    backToTopLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#68D391',
      color: '#fff',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
    backToTopIcon: {
      fontSize: '1.25rem',
    },
    footerText: {
      marginTop: '1rem',
      fontSize: '0.875rem',
      color: '#A0AEC0',
    },
  };

  const navLinks = [
    { text: 'Home', url: '#' },
    { text: 'About', url: '#' },
    { text: 'Services', url: '#' },
    { text: 'Contact', url: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/code.qalb?mibextid=ZbWKwL' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/code.qalb?igsh=Z3V0OHZ4cHlxYmFk' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/6389616657' },
    { icon: <FaTelegramPlane />, url: 'http://t.me/CodeQalb' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@codeqalb?si=KOESgbxXKz747MDz' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.header}>CodeQalb</div>
        
        <div style={styles.navLinks}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.color = '#68D391')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div style={styles.contactInfo}>
          <p>
            Email: {' '}
            <a
              href="mailto:contact@danwartech.com"
              style={styles.contactLink}
              onMouseEnter={(e) => (e.target.style.color = '#68D391')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            >
              contact@CodeQalb.com
            </a>{' '}
            • Phone: +916389616657 +91 93694 64481
          </p>
          <p>
            2nd Floor, G-44, Kalindi Kunj Rd, above Duke Showroom, <br />
            near Central Bank of India, Shaheen Bagh, Okhla, <br />
            New Delhi, Delhi 11002
          </p>
        </div>

        <div style={styles.socialIcons}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <span
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = '#68D391';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {link.icon}
              </span>
            </a>
          ))}
        </div>

        <div style={styles.backToTop}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={styles.backToTopLink}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#48BB78')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#68D391')}
          >
            <FaArrowUp style={styles.backToTopIcon} />
          </a>
        </div>

        <p style={styles.footerText}>
          © {new Date().getFullYear()} CodeQalb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;