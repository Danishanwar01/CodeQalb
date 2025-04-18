import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [hoveredLink, setHoveredLink] = useState(null);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];
  const styles = {
    navbar: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#2F855A', // Green color for logo
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    navLink: {
      color: '#2F855A', // Green color for links
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    mobileMenu: {
      backgroundColor: '#f7fafc',
      padding: '0.5rem 1rem',
    },
    menuButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
    },
  };
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          <Link to="/" style={styles.logo}>CodeQalb</Link>
          {isDesktop && (
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    ...styles.navLink,
                    backgroundColor: hoveredLink === link.name ? '#e6fffa' : 'transparent', // Light background on hover
                    transform: hoveredLink === link.name ? 'translateY(-2px)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          {!isDesktop && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={styles.menuButton}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX style={{ fontSize: '1.5rem', color: '#2d3748' }} />
              ) : (
                <FiMenu style={{ fontSize: '1.5rem', color: '#2d3748' }} />
              )}
            </button>
          )}
        </div>
        {!isDesktop && isOpen && (
          <div style={styles.mobileMenu}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  ...styles.navLink,
                  display: 'block',
                  margin: '0.5rem 0',
                  fontSize: '1rem',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;