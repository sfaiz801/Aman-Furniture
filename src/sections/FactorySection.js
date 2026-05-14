import { motion } from 'framer-motion';
import { FaCheck, FaIndustry, FaUsers, FaTruck, FaPencilRuler } from 'react-icons/fa';

const factoryFeatures = [
  { icon: FaIndustry, text: 'Direct Factory Price' },
  { icon: FaPencilRuler, text: 'Custom Design Available' },
  { icon: FaUsers, text: 'Wholesale Orders' },
  { icon: FaTruck, text: 'Home Delivery' },
];

const factoryStats = [
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Skilled Workers' },
  { number: '1000+', label: 'Monthly Production' },
  { number: '100%', label: 'Quality Check' },
];

export default function FactorySection() {
  return (
    <section id="factory" className="factory-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Our Factory</span>
          <h2>Direct From Factory</h2>
          <div className="underline"></div>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <motion.div
              className="factory-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/factory-main.jpg" alt="Our Furniture Factory" loading="lazy" />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="factory-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Premium Quality, Factory Direct</h3>
              <p>
                We manufacture our own furniture in our state-of-the-art factory. 
                This means you get the best quality at the lowest price - direct 
                from our workshop to your home. No middlemen, no extra charges.
              </p>
              <ul className="factory-list">
                {factoryFeatures.map((feature, i) => (
                  <li key={i}>
                    <feature.icon size={20} />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="row g-4 mt-5">
          {factoryStats.map((stat, index) => (
            <div key={index} className="col-6 col-lg-3">
              <motion.div
                className="factory-stat"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
