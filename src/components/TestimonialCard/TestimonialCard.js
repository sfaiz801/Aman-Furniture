import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
      </div>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={16}
            color={i < testimonial.rating ? '#D4AF37' : '#ddd'}
          />
        ))}
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <h4>{testimonial.name}</h4>
        <p>{testimonial.location}</p>
      </div>
    </div>
  );
}
