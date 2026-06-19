import { Link } from "react-router-dom";
import { Thermometer, Droplets, Egg, Zap, ArrowRight, Check } from "lucide-react";
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
  "Most Popular": "bg-orange-100 text-orange-800",
  Premium: "bg-stone-200 text-stone-700",
};

const ProductPreviewSection = () => (
  <section className="section-padding bg-stone-50" aria-labelledby="products-preview-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <p className="section-eyebrow">Our Range</p>
          <h2 id="products-preview-heading" className="section-title">
            Popular Incubator Models
          </h2>
          <p className="section-subtitle mt-2 max-w-xl">
            Compare capacity, automation level, and pricing. Every model ships ready to use with
            setup guidance from our team.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors shrink-0"
        >
          View all products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.filter((p) => p.featured).map((product) => (
          <article
            key={product.id}
            className="modern-card overflow-hidden border border-stone-200 bg-white group hover:shadow-md transition-all duration-200 notranslate"
            translate="no"
          >
            <div className="relative overflow-hidden">
              <ProductImage
                src={product.image}
                alt={`${product.name} egg incubator`}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-slate-100 text-slate-800"}`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">{product.name}</h3>
                  <p className="text-sm text-stone-500 mt-0.5">{product.tagline}</p>
                </div>
                <p className="text-xl sm:text-2xl font-semibold text-emerald-700 shrink-0">{product.price}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 my-4">
                {(Object.entries(product.features) as [keyof typeof specIcons, string][]).map(([key, value]) => {
                  const Icon = specIcons[key];
                  return (
                    <div key={key} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 bg-stone-50 rounded-lg px-2.5 py-2">
                      <Icon className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span className="truncate">{value}</span>
                    </div>
                  );
                })}
              </div>

              <ul className="space-y-1.5 mb-5">
                {product.keyFeatures.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Link to="/order-egg-incubator" className="btn-accent flex-1 text-center text-sm py-2.5">
                  Order Now
                </Link>
                <Link
                  to={ROUTES.product(PRODUCT_SLUGS[product.id])}
                  className="btn-outline flex-1 text-center text-sm py-2.5"
                >
                  Full Specs
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductPreviewSection;
