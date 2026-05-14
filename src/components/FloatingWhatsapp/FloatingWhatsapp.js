import { FaWhatsapp } from 'react-icons/fa';
import { companyData } from '../../data/company';

export default function FloatingWhatsapp() {
  return (
    <div className="floating-whatsapp">
      <a
        href={`https://wa.me/91${companyData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-floating"
        aria-label="Chat on WhatsApp"
      >
        <div className="pulse-ring"></div>
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
