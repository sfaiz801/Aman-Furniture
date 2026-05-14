import { offers } from '../data/offers';
import OfferCard from '../components/OfferCard/OfferCard';

export default function OfferSection() {
  return (
    <section id="offers" className="offers-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Special Deals</span>
          <h2>Our Combo Offers</h2>
          <div className="underline"></div>
        </div>
        <div className="row g-4">
          {offers.map((offer, index) => (
            <div key={offer.id} className="col-lg-4 col-md-6">
              <OfferCard offer={offer} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
