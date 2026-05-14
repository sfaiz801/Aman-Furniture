import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { companyData } from '../../data/company';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Offers', href: '#offers' },
  { name: 'Categories', href: '#categories' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="footer-brand">
              <div className="footer-logo">
                {companyData.shortName}<span>.</span>
              </div>
              <p>{companyData.description}</p>
              <div className="footer-social">
                <a href={companyData.social.facebook} aria-label="Facebook">
                  <FaFacebookF size={18} />
                </a>
                <a href={companyData.social.instagram} aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
                <a href={companyData.social.youtube} aria-label="YouTube">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-links">
              <h4>Categories</h4>
              <ul>
                <li><a href="#beds">Beds</a></li>
                <li><a href="#sofa">Sofa Sets</a></li>
                <li><a href="#almari">Almari</a></li>
                <li><a href="#wedding">Wedding Packages</a></li>
                <li><a href="#electronics">Electronics</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>{companyData.location}</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <a href={`tel:+91${companyData.mobile}`}>+91 {companyData.mobile}</a>
              </div>
              <div className="footer-contact-item">
                <FaWhatsapp />
                <a href={`https://wa.me/91${companyData.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {companyData.whatsapp}
                </a>
              </div>
              <div className="footer-contact-item">
                <FaClock />
                <span>{companyData.timing}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {companyData.name}. All Rights Reserved.</p>
          <p className="footer-timing">{companyData.timing}</p>
        </div>
      </div>
    </footer>
  );
}
