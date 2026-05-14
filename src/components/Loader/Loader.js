import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-logo">NF&E</div>
          <div className="loader-spinner"></div>
          <p className="loader-text">Loading Premium Furniture...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
