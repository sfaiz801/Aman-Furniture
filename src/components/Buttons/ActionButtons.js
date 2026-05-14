import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { companyData } from '../../data/company';

export function CallButton({ className = '', children }) {
  return (
    <a href={`tel:+91${companyData.mobile}`} className={`btn-call ${className}`}>
      <FaPhone size={14} />
      {children || <span>Call Now</span>}
    </a>
  );
}

export function WhatsAppButton({ className = '', message = '', children }) {
  const url = message
    ? `https://wa.me/91${companyData.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/91${companyData.whatsapp}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`btn-whatsapp ${className}`}>
      <FaWhatsapp size={14} />
      {children || <span>WhatsApp</span>}
    </a>
  );
}
