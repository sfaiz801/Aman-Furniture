import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSmile, FaBox, FaCouch, FaCalendarAlt } from 'react-icons/fa';

const counters = [
  { icon: FaSmile, target: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: FaBox, target: 3500, suffix: '+', label: 'Orders Delivered' },
  { icon: FaCouch, target: 120, suffix: '+', label: 'Furniture Designs' },
  { icon: FaCalendarAlt, target: 15, suffix: '+', label: 'Years of Trust' },
];

function CounterItem({ counter, index }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = counter.target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= counter.target) {
        setCount(counter.target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, counter.target]);

  return (
    <div className="col-6 col-lg-3" ref={ref}>
      <motion.div
        className="counter-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="counter-icon">
          <counter.icon size={32} />
        </div>
        <div className="counter-number">
          {count.toLocaleString('en-IN')}{counter.suffix}
        </div>
        <div className="counter-label">{counter.label}</div>
      </motion.div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container-custom">
        <div className="row g-4">
          {counters.map((counter, index) => (
            <CounterItem key={index} counter={counter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
