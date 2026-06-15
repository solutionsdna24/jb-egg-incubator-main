import { Thermometer, Droplets, Egg, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import { ROUTES, PRODUCT_SLUGS } from "@/lib/routes";

const specIcons = {
  control: Thermometer,
  monitoring: Droplets,
  capacity: Egg,
  power: Zap,
};

const badgeColors: Record<string, string> = {
  "Budget Pick": "bg-emerald-100 text-emerald-800",
  "Most Popular": "bg-amber-100 text-amber-800",
  Premium: "bg-violet-100 text-violet-800",
};

const ProductsSection = () => (
  <section id="products" className="section-padding bg-slate-50">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10 sm:mb-14">
        <p className="section-eyebrow">Full Catalogue</p>
        <h2 className="section-title">Commercial Egg Incubator Models & Prices</h2>
        <p className="section-subtitle mx-auto">
          Automatic egg incubator machines from a leading poultry incubator supplier in India.
          Compare egg hatching machine price, capacity, and features for JBW100, JBST100, and JBI80M.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <article
            id={`product-${product.id}`}
            key={product.id}
            className="modern-card overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col notranslate"
            translate="no"
          >
            <div className="relative">
              <ProductImage
                src={product.image}
                alt={`${product.name} egg incubator`}
                heightClass="h-56 sm:h-64"
              />
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[product.badge] ?? ""}`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="text-sm text-slate-500">{product.tagline}</p>
                </div>
                <span className="text-2xl font-bold text-blue-700 shrink-0">{product.price}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 my-4">
                {(Object.entries(product.features) as [keyof typeof specIcons, string][]).map(([key, value]) => {
                  const Icon = specIcons[key];
                  return (
                    <div key={key} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 rounded-lg px-2.5 py-2">
                      <Icon className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />
                      <span>{value}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mb-6 flex-1">
                <p className="font-semibold text-stone-900 mb-3 text-sm uppercase tracking-wide">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600 flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                <Link
                  to={ROUTES.product(PRODUCT_SLUGS[product.id])}
                  className="btn-outline flex-1 text-center text-sm py-2.5"
                >
                  Full Specs
                </Link>
                <Link to={ROUTES.order} className="btn-primary flex-1 text-center text-sm py-2.5">
                  Order Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-slate-600 mt-10 text-sm sm:text-base">
        Need help choosing?{" "}
        <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
          Contact us
        </Link>{" "}
        or call{" "}
        <a href="tel:+918767189437" className="text-blue-700 font-semibold hover:underline">
          +91 8767189437
        </a>
      </p>
    </div>
  </section>
);

export default ProductsSection;
