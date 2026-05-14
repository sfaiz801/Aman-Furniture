import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaArrowRight, FaGem, FaHome, FaUsers, FaAward } from 'react-icons/fa';
import { companyData } from '../../data/company';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img src="/images/hero-bg.jpg" alt="Furniture Showroom" />
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaGem />
          <span>Wedding Season Special Offers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {companyData.tagline.split(' ').map((word, i) =>
            ['Premium', 'Furniture', 'Dream'].includes(word) ? (
              <span key={i} className="highlight">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {companyData.subTagline}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#offers" className="btn-gold">
            <span>View Offers</span>
            <FaArrowRight size={16} />
          </a>
          <a href={`tel:+91${companyData.mobile}`} className="btn-white">
            <FaPhone size={16} />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/91${companyData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp size={16} />
            <span>WhatsApp Order</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Furniture Designs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
