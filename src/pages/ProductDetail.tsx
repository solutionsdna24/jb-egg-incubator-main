import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import ProductImage from "@/components/ProductImage";
import CtaSection from "@/components/CtaSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import { getSpecBySlug } from "@/lib/specifications";
import { products } from "@/lib/products";
import { ROUTES } from "@/lib/routes";
import {
  getProductPageSeo,
  productJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const spec = slug ? getSpecBySlug(slug) : undefined;
  const product = spec ? products.find((p) => p.id === spec.model) : undefined;

  if (!spec || !product) {
    return <Navigate to={ROUTES.products} replace />;
  }

  const pageSeo = getProductPageSeo(spec.model);
  const productPath = ROUTES.product(slug!);

  return (
    <div className="page-shell">
      <SeoHead
        page="product"
        titleOverride={pageSeo?.title ?? `${spec.model} ${spec.type} — ${spec.capacity}`}
        descriptionOverride={
          pageSeo?.description ??
          `${spec.model} egg incubator: ${spec.type}, ${spec.capacity}, ${spec.power}. Egg incubator manufacturer JB — Bhandara, Maharashtra, India.`
        }
        keywordsOverride={pageSeo?.keywords}
        pathOverride={productPath}
        ogType="product"
        extraJsonLd={[
          productJsonLd(product, spec),
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Products", path: ROUTES.products },
            { name: spec.model, path: productPath },
          ]),
        ]}
      />
      <Header />
      <main>
        <section className="section-padding bg-stone-50">
          <div className="container mx-auto max-w-6xl px-4">
            <nav className="text-sm text-stone-600 mb-6" aria-label="Breadcrumb">
              <Link to={ROUTES.home} className="hover:text-emerald-700">Home</Link>
              {" / "}
              <Link to={ROUTES.products} className="hover:text-emerald-700">Products</Link>
              {" / "}
              <span className="text-stone-900 font-medium">{spec.model}</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ProductImage src={product.image} alt={`${spec.model} egg incubator`} heightClass="h-80 sm:h-96" className="rounded-2xl border border-stone-200" />
              <div>
                <p className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">{spec.type}</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-2">
                  {spec.model} — {spec.capacity}
                </h1>
                <p className="text-2xl font-bold text-emerald-700 mb-4">{product.price}</p>
                <p className="text-stone-600 leading-relaxed mb-6">{product.tagline}. {spec.idealFor}.</p>
                <ul className="space-y-2 mb-8">
                  {product.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-stone-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={ROUTES.order} className="btn-accent text-center">Order {spec.model}</Link>
                  <Link to={ROUTES.contact} className="btn-outline text-center">Ask Questions</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="section-title mb-8">Detailed Specifications — {spec.model}</h2>
            <dl className="grid sm:grid-cols-2 gap-4">
              {[
                ["Capacity", spec.capacity],
                ["Body", spec.body],
                ["Dimensions", spec.dimensions],
                ["Weight", spec.weight],
                ["Power", spec.power],
                ["Voltage", spec.voltage],
                ["Temperature", spec.temperatureRange],
                ["Humidity", spec.humidityRange],
                ["Turning", spec.turning],
                ["Warranty", spec.warranty],
                ...spec.specs.map((s) => [s.label, s.value] as const),
              ].map(([label, value]) => (
                <div key={label} className="border-b border-stone-100 pb-3">
                  <dt className="text-stone-500 text-sm">{label}</dt>
                  <dd className="font-semibold text-stone-900">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={ROUTES.training} className="text-emerald-700 font-semibold hover:underline">Poultry training →</Link>
              <Link to={ROUTES.hatchingGuide} className="text-emerald-700 font-semibold hover:underline">Free hatching guide →</Link>
              <Link to={ROUTES.about} className="text-emerald-700 font-semibold hover:underline">About JB →</Link>
            </div>
          </div>
        </section>

        <InternalLinksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
