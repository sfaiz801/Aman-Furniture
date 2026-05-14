import { motion } from 'framer-motion';
import { FaGem } from 'react-icons/fa';

export default function WeddingBanner() {
  return (
    <section className="wedding-banner">
      <div className="wedding-bg"></div>
      <div className="wedding-content">
        <motion.div
          className="wedding-icon"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaGem />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gold-text">Shaadi Special</span> Furniture Combo Offers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Complete your wedding home setup with our exclusive combo packages. Limited stock available!
        </motion.p>
        <motion.div
          className="wedding-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Limited Stock - Book Now!
        </motion.div>
      </div>
    </section>
  );
}
