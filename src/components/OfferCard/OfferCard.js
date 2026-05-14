import { motion } from 'framer-motion';
import { FaCheck, FaPhone, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { companyData } from '../../data/company';

export default function OfferCard({ offer, index }) {
  const savings = offer.marketPrice - offer.price;

  return (
    <motion.div
      className="offer-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="offer-ribbon">{offer.ribbon}</div>
      <div className="offer-badge">
        <span className="badge-premium">{offer.badge}</span>
      </div>

      <div className="offer-image">
        <img src={offer.image} alt={offer.title} loading="lazy" />
        <div className="offer-overlay"></div>
      </div>

      <div className="offer-content">
        <h3 className="offer-title">{offer.title}</h3>

        <div className="offer-items">
          {offer.items.map((item, i) => (
            <div key={i} className="offer-item">
              <FaCheck size={14} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="offer-pricing">
          <span className="offer-price">₹{offer.price.toLocaleString('en-IN')}</span>
          <span className="market-price">₹{offer.marketPrice.toLocaleString('en-IN')}</span>
          <span className="save-text">Save ₹{savings.toLocaleString('en-IN')}</span>
        </div>

        <div className="offer-actions">
          <a
            href={`https://wa.me/91${companyData.whatsapp}?text=Hi! I want to book the ${offer.title} for ₹${offer.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn"
          >
            <FaShoppingCart size={14} />
            <span>Book Now</span>
          </a>
          <a href={`tel:+91${companyData.mobile}`} className="btn-call btn">
            <FaPhone size={14} />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/91${companyData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn"
          >
            <FaWhatsapp size={14} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
