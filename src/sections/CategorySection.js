import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard/CategoryCard';

export default function CategorySection() {
  return (
    <section id="categories" className="categories-section">
      <div className="container-custom">
        <div className="section-title">
          <span className="subtitle">Our Collection</span>
          <h2>Furniture Categories</h2>
          <div className="underline"></div>
        </div>
        <div className="row g-4">
          {categories.map((category, index) => (
            <div key={category.id} id={category.link.replace('#', '')} className="col-lg-3 col-md-4 col-6">
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
