import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12 max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray mt-2 lg:max-w-lg font-montserrat">Experience top notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols:1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;