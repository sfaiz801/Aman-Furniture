import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const categories = ['All', 'Bed', 'Sofa', 'Almari', 'Wedding', 'Electronics', 'Factory'];

export default function GalleryGrid({ items }) {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All'
    ? items
    : items.filter(item => item.category === filter);

  return (
    <>
      <div className="gallery-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="gallery-grid">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className={`gallery-item ${item.id % 5 === 0 ? 'tall' : ''} ${item.id % 7 === 0 ? 'wide' : ''}`}
              onClick={() => setLightbox(item)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <div className="lightbox-close" onClick={() => setLightbox(null)}>
                <FaTimes />
              </div>
              <img src={lightbox.src} alt={lightbox.title} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
