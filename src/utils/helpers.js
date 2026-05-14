// Helper utilities for the application

export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function isMobile() {
  return typeof window !== 'undefined' && window.innerWidth < 992;
}

export function getWhatsAppLink(phone, message = '') {
  const base = `https://wa.me/91${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function getCallLink(phone) {
  return `tel:+91${phone}`;
}
