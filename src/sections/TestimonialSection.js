import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function TestimonialSection() {
  return (
    <section id="reviews" className="testimonials-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <div className="underline"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
