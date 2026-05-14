import Head from 'next/head';
import dynamic from 'next/dynamic';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../sections/HeroSection';
import WeddingBanner from '../sections/WeddingBanner';
import OfferSection from '../sections/OfferSection';
import CategorySection from '../sections/CategorySection';
import WhyChooseUs from '../sections/WhyChooseUs';
import FactorySection from '../sections/FactorySection';
import GallerySection from '../sections/GallerySection';
import TrustSection from '../sections/TrustSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer/Footer';
import FloatingWhatsapp from '../components/FloatingWhatsapp/FloatingWhatsapp';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import { companyData } from '../data/company';

// Dynamic imports for heavy sections to improve initial load
const DynamicTestimonial = dynamic(() => import('../sections/TestimonialSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyData.name} | Premium Furniture & Electronics in Gopalganj, Bihar</title>
        <meta
          name="description"
          content={`${companyData.name} - Best furniture showroom in Gopalganj, Bihar. Wedding furniture combos, beds, sofa sets, almari, electronics. Factory direct prices. Call ${companyData.mobile}`}
        />
        <meta
          name="keywords"
          content="furniture shop Gopalganj, furniture Bihar, wedding furniture, sofa set, bed, almari, dressing table, electronics shop, furniture factory, Hathua Road furniture"
        />
        <meta name="author" content={companyData.name} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${companyData.name} - Premium Furniture & Electronics`} />
        <meta property="og:description" content={`${companyData.tagline}. ${companyData.subTagline}. Located at ${companyData.location}`} />
        <meta property="og:url" content="https://nationalfurnituregopalganj.com" />
        <meta property="og:site_name" content={companyData.name} />
        <meta property="og:locale" content="hi_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={companyData.name} />
        <meta name="twitter:description" content={companyData.tagline} />

        {/* Canonical */}
        <link rel="canonical" href="https://nationalfurnituregopalganj.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FurnitureStore',
              name: companyData.name,
              image: 'https://nationalfurnituregopalganj.com/images/logo.jpg',
              '@id': 'https://nationalfurnituregopalganj.com',
              url: 'https://nationalfurnituregopalganj.com',
              telephone: `+91${companyData.mobile}`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hathua Road, Barwa',
                addressLocality: 'Mirganj',
                addressRegion: 'Gopalganj',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.45,
                longitude: 84.35,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '20:00',
              },
              priceRange: '₹₹',
              paymentAccepted: 'Cash, UPI, Card',
              currenciesAccepted: 'INR',
            }),
          }}
        />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <WeddingBanner />
        <OfferSection />
        <CategorySection />
        <WhyChooseUs />
        <FactorySection />
        <GallerySection />
        <DynamicTestimonial />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <ScrollTop />

      {/* Sticky Mobile Bottom Bar */}
      <div className="mobile-sticky-bar">
        <a href={`tel:+91${companyData.mobile}`} className="btn-call btn">
          <FaPhone size={14} /> Call Now
        </a>
        <a
          href={`https://wa.me/91${companyData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp btn"
        >
          <FaWhatsapp size={14} /> WhatsApp
        </a>
      </div>
    </>
  );
}
