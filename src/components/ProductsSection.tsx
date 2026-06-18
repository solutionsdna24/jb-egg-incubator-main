import { useMemo, useState } from "react";
import {
  Thermometer,
  Droplets,
  Egg,
  Zap,
  Check,
  Search,
  SlidersHorizontal,
  ArrowRight,
  X,
  LayoutGrid,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import {
  products,
  PRODUCT_FILTER_OPTIONS,
  PRODUCT_SORT_OPTIONS,
  filterAndSortProducts,
  countProductsByFilter,
  type Product,
  type ProductFilterTag,
  type ProductSortId,
} from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import { ROUTES, PRODUCT_SLUGS } from "@/lib/routes";

const specIcons = {
  control: Thermometer,
  monitoring: Droplets,
  capacity: Egg,
  power: Zap,
};

const badgeColors: Record<string, string> = {
  "Budget Pick": "bg-emerald-100 text-emerald-800 ring-emerald-200",
  "Most Popular": "bg-amber-100 text-amber-800 ring-amber-200",
  Premium: "bg-violet-100 text-violet-800 ring-violet-200",
  "Combine Incubator": "bg-blue-100 text-blue-800 ring-blue-200",
  "Small Farm": "bg-teal-100 text-teal-800 ring-teal-200",
  Commercial: "bg-orange-100 text-orange-800 ring-orange-200",
};

const CARD_FEATURES_PREVIEW = 5;

const isContactPrice = (price: string) => !price.includes("₹");

const ProductCard = ({ product }: { product: Product }) => {
  const slug = PRODUCT_SLUGS[product.id];
  const isCommercial =
    product.filterTags.includes("commercial") || product.filterTags.includes("combine");
  const previewFeatures = product.keyFeatures.slice(0, CARD_FEATURES_PREVIEW);
  const moreCount = product.keyFeatures.length - previewFeatures.length;

  return (
    <article
      id={`product-${product.id}`}
      className={`group modern-card overflow-hidden border bg-white flex flex-col notranslate transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
        isCommercial
          ? "border-emerald-200/80 hover:border-emerald-300 hover:shadow-emerald-100/50"
          : "border-slate-200 hover:border-slate-300 hover:shadow-slate-200/60"
      }`}
      translate="no"
    >
      <div className="relative overflow-hidden">
        <ProductImage
          src={product.image}
          alt={`${product.name} egg incubator`}
          heightClass="h-52 sm:h-56"
          className="group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ring-1 ${badgeColors[product.badge] ?? "bg-slate-100 text-slate-800"}`}
          >
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div className="rounded-xl bg-white/95 backdrop-blur px-3 py-2 shadow-sm">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Capacity</p>
            <p className="text-sm font-bold text-slate-900 leading-tight">{product.features.capacity}</p>
          </div>
          <div
            className={`rounded-xl px-3 py-2 shadow-sm backdrop-blur font-bold text-sm ${
              isContactPrice(product.price)
                ? "bg-emerald-700/95 text-white"
                : "bg-white/95 text-emerald-800"
            }`}
          >
            {product.price}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="mb-4">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
            {product.id}
          </p>
          <h3 className="text-xl font-bold text-slate-900 leading-snug">{product.tagline}</h3>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {(Object.entries(product.features) as [keyof typeof specIcons, string][]).map(
            ([key, value]) => {
              const Icon = specIcons[key];
              return (
                <div
                  key={key}
                  className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-100"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span className="truncate">{value}</span>
                </div>
              );
            },
          )}
        </div>

        <ul className="space-y-2 mb-5 flex-1">
          {previewFeatures.map((feature) => (
            <li key={feature} className="text-sm text-slate-600 flex items-start gap-2 leading-snug">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
          {moreCount > 0 && slug && (
            <li>
              <Link
                to={ROUTES.product(slug)}
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
              >
                +{moreCount} more features
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          )}
        </ul>

        <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-slate-100">
          {slug ? (
            <Link
              to={ROUTES.product(slug)}
              className="btn-outline flex-1 text-center text-sm py-2.5 gap-1.5"
            >
              Full Specs
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          <Link to={ROUTES.order} className="btn-accent flex-1 text-center text-sm py-2.5">
            Order Now
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProductsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const activeFilter = (searchParams.get("filter") || "all") as ProductFilterTag | "all";
  const sort = (searchParams.get("sort") || "recommended") as ProductSortId;

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, activeFilter, search, sort),
    [activeFilter, search, sort],
  );

  const setFilter = (id: ProductFilterTag | "all") => {
    const next = new URLSearchParams(searchParams);
    if (id === "all") next.delete("filter");
    else next.set("filter", id);
    setSearchParams(next, { replace: true });
  };

  const setSort = (id: ProductSortId) => {
    const next = new URLSearchParams(searchParams);
    if (id === "recommended") next.delete("sort");
    else next.set("sort", id);
    setSearchParams(next, { replace: true });
  };

  const clearAll = () => {
    setSearch("");
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    activeFilter !== "all" || sort !== "recommended" || search.trim().length > 0;

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-10">
          <p className="section-eyebrow">Full Catalogue</p>
          <h2 className="section-title">Egg Incubator Models &amp; Prices</h2>
          <p className="section-subtitle mx-auto">
            Filter by type, capacity, or budget. From ₹2,700 starter units to 816+272 commercial
            combine incubators — all Made in India from Bhandara, Maharashtra.
          </p>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[4.5rem] lg:top-20 z-20 -mx-4 px-4 py-4 mb-8 bg-slate-50/90 backdrop-blur-md border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by model, capacity, or feature…"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  aria-label="Search products"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <label className="sr-only" htmlFor="product-sort">
                  Sort products
                </label>
                <select
                  id="product-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as ProductSortId)}
                  className="flex-1 lg:w-52 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none"
                >
                  {PRODUCT_SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowFilters((v) => !v)}
                  className="lg:hidden inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  aria-expanded={showFilters}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </button>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${showFilters ? "" : "hidden"} lg:flex animate-slide-down`}
                role="group"
                aria-label="Product category filters"
              >
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                  {PRODUCT_FILTER_OPTIONS.map((opt) => {
                    const isActive = activeFilter === opt.id;
                    const count = countProductsByFilter(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFilter(opt.id)}
                        title={opt.description}
                        className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                          isActive
                            ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                            : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
                        }`}
                        aria-pressed={isActive}
                      >
                        {opt.label}
                        <span
                          className={`text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="shrink-0 text-sm font-medium text-slate-500 hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear all
                  </button>
                )}
              </div>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <p className="inline-flex items-center gap-2">
                <LayoutGrid className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of{" "}
                {products.length} models
              </p>
              <Link
                to={ROUTES.calculator}
                className="hidden sm:inline-flex text-emerald-700 font-medium hover:underline"
              >
                Capacity calculator →
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-white">
            <LayoutGrid className="h-12 w-12 text-slate-300 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No models match your filters</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
              Try a different category or clear your search to see the full JB catalogue.
            </p>
            <button type="button" onClick={clearAll} className="btn-primary text-sm">
              Show all models
            </button>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-emerald-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Not sure which incubator fits your farm?</h3>
            <p className="text-emerald-100 text-sm">
              Use our capacity calculator or speak with our Bhandara team for a custom quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Link to={ROUTES.calculator} className="btn-outline border-white/40 text-white hover:bg-white/10 text-center text-sm py-2.5">
              Calculator
            </Link>
            <Link to={ROUTES.contact} className="btn-accent text-center text-sm py-2.5">
              Get Expert Advice
            </Link>
          </div>
        </div>

        <p className="text-center text-slate-600 mt-10 text-sm sm:text-base">
          Need help choosing?{" "}
          <Link to={ROUTES.contact} className="text-emerald-700 font-semibold hover:underline">
            Contact us
          </Link>{" "}
          or call{" "}
          <a href="tel:+918767189437" className="text-emerald-700 font-semibold hover:underline">
            +91 8767189437
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
