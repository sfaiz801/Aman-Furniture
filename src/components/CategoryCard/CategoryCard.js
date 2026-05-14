import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CategoryCard({ category, index }) {
  return (
    <motion.div
      className="category-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="category-image">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>
      <div className="category-overlay"></div>
      <div className="category-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <a href={category.link} className="btn-category">
          <span>View Products</span>
          <FaArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}
