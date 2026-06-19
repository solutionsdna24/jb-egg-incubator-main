import { Link } from "react-router-dom";
import { MapPin, Package, BookOpen, ArrowRight } from "lucide-react";
import { ROUTES, PRODUCT_SLUGS } from "@/lib/routes";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blogs";

const regionalLinks = [
  {
    label: "Egg Incubator Maharashtra",
    to: ROUTES.landingMaharashtra,
    desc: "Statewide delivery from Bhandara factory",
  },
  {
    label: "Egg Incubator Nagpur",
    to: ROUTES.landingNagpur,
    desc: "Nearest manufacturer ~60 km from Nagpur",
  },
  {
    label: "Egg Incubator Vidarbha",
    to: ROUTES.landingVidarbha,
    desc: "Local factory · Marathi support",
  },
];

const HomeDiscoverLinks = () => (
  <section
    id="discover-jb"
    className="section-padding bg-white border-y border-stone-200"
    aria-labelledby="discover-jb-heading"
  >
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Browse JB</p>
        <h2 id="discover-jb-heading" className="section-title">
          Products, Regional Pages &amp; Guides
        </h2>
        <p className="section-subtitle mx-auto">
          Direct links to every JB egg incubator model, Maharashtra / Nagpur / Vidarbha pages, and
          our full blog — built for farmers across India.
        </p>
      </div>

      {/* Regional — high priority for local SEO */}
      <div className="mb-10">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Regional Egg Incubator Pages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {regionalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-5 hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
            >
              <span className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                {link.label}
              </span>
              <p className="text-sm text-stone-600 mt-1">{link.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 mt-3">
                View page
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* All product detail pages */}
      <div className="mb-10">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4">
          <Package className="h-4 w-4" aria-hidden="true" />
          All Egg Incubator Models
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => {
            const slug = PRODUCT_SLUGS[product.id];
            if (!slug) return null;
            return (
              <li key={product.id}>
                <Link
                  to={ROUTES.product(slug)}
                  className="flex flex-col rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 hover:border-emerald-400 hover:bg-white transition-colors h-full"
                >
                  <span className="font-bold text-stone-900 text-sm">{product.id}</span>
                  <span className="text-xs text-stone-600 mt-0.5 line-clamp-2">{product.tagline}</span>
                  <span className="text-xs font-semibold text-emerald-700 mt-2">{product.price}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-center">
          <Link to={ROUTES.products} className="text-sm font-semibold text-emerald-700 hover:underline">
            Compare all models on products page →
          </Link>
        </p>
      </div>

      {/* Blog posts */}
      <div>
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Egg Incubator Blog &amp; Guides
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[...blogPosts]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post) => (
              <li key={post.slug}>
                <Link
                  to={ROUTES.blogPost(post.slug)}
                  className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 hover:border-emerald-400 hover:bg-white transition-colors"
                >
                  <span className="shrink-0 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2 py-0.5 mt-0.5">
                    {post.category}
                  </span>
                  <span className="text-sm font-medium text-stone-800 leading-snug">{post.title}</span>
                </Link>
              </li>
            ))}
        </ul>
        <p className="mt-3 text-center">
          <Link to={ROUTES.blog} className="text-sm font-semibold text-emerald-700 hover:underline">
            View full blog with filters →
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default HomeDiscoverLinks;
