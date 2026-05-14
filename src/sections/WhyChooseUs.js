import { motion } from 'framer-motion';
import { FaShieldAlt, FaIndustry, FaTruck, FaTools, FaRupeeSign, FaGem, FaAward } from 'react-icons/fa';
import { services } from '../data/services';

const iconMap = {
  FaShieldAlt: FaShieldAlt,
  FaIndustry: FaIndustry,
  FaTruck: FaTruck,
  FaTools: FaTools,
  FaRupeeSign: FaRupeeSign,
  FaGem: FaGem,
  FaAward: FaAward,
};

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Why Us</span>
          <h2>Why Choose National Furniture?</h2>
          <div className="underline"></div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="col-lg-3 col-md-4 col-6">
                <motion.div
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
