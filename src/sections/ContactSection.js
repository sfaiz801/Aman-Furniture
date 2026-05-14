import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { companyData } from '../data/company';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    requirement: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AMobile: ${formData.mobile}%0AAddress: ${formData.address}%0ARequirement: ${formData.requirement}`;
    window.open(`https://wa.me/91${companyData.whatsapp}?text=${message}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Us</h2>
          <div className="underline"></div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>{companyData.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone size={22} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href={`tel:+91${companyData.mobile}`}>+91 {companyData.mobile}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp size={22} />
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <a href={`https://wa.me/91${companyData.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {companyData.whatsapp}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock size={22} />
                </div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>{companyData.timing}</p>
                </div>
              </div>

              <div className="contact-actions">
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
          </div>

          <div className="col-lg-7">
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Send Inquiry</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Furniture Requirement</label>
                  <textarea
                    name="requirement"
                    className="form-control"
                    placeholder="Tell us what furniture you need..."
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-premium btn-submit">
                  <FaPaperPlane /> Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="row g-4 mt-4 align-items-center">
          <div className="col-lg-6">
            <motion.div 
              className="location-image-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/location.jpg" 
                alt="National Furniture & Electronics Storefront" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              />
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="map-container" style={{ height: '400px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.7104692790937!2d84.32455907409477!3d26.36397643355529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993012a82844b25%3A0x82e18fb497725aa0!2sSewa%2BCare%2BHospital%2BMirganj!5e0!3m2!1sen!2sin!4v1715686252346!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="National Furniture Location"
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
