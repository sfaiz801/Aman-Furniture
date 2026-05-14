import GalleryGrid from '../components/Gallery/GalleryGrid';
import { galleryItems } from '../data/gallery';

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Portfolio</span>
          <h2>Our Gallery</h2>
          <div className="underline"></div>
        </div>
        <GalleryGrid items={galleryItems} />
      </div>
    </section>
  );
}
