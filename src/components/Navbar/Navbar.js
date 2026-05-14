import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { companyData } from '../../data/company';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Offers', href: '#offers' },
  { name: 'Categories', href: '#categories' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Factory', href: '#factory' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="logo-icon">{companyData.shortName}</div>
            <span className="logo-text d-none d-md-block">{companyData.name}</span>
          </a>

          <div className="nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={`tel:+91${companyData.mobile}`}
              className="btn-premium btn-nav"
            >
              <FaPhone size={14} />
              <span>Call Now</span>
            </a>
            <div
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu open"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <FaTimes
                  size={24}
                  color="#fff"
                  onClick={() => setMobileOpen(false)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-actions">
                <a href={`tel:+91${companyData.mobile}`} className="btn-call btn">
                  <FaPhone /> Call Now
                </a>
                <a
                  href={`https://wa.me/91${companyData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
