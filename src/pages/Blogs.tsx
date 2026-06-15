import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import SeoHead from "@/components/SeoHead";
import { blogPosts } from "@/lib/blogs";

const Blogs = () => (
  <div className="page-shell">
    <SeoHead page="blogs" />
    <Header />
    <PromoBar />
    <main>
      <section className="relative bg-emerald-700 text-white px-4 py-14 sm:py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold mb-4">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            JB Incubator Blog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Egg Incubator Blog — Maharashtra &amp; India Guides
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
            Articles on automatic egg incubator Maharashtra, egg hatching machine price, poultry incubator
            supplier Vidarbha, and egg incubator Nagpur &amp; Bhandara — free guides for farmers nationwide.
          </p>
          <Link
            to="/jb-egg-incubator-order"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors"
          >
            Order Now — From ₹2,700
          </Link>
        </div>
      </section>

      <section className="section-padding px-4 bg-stone-100">
        <div className="container mx-auto max-w-4xl space-y-6">
          {[...blogPosts]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post) => (
              <article
                key={post.slug}
                className="flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white border-2 border-stone-200 shadow-md hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                {post.image && (
                  <Link to={`/blog/${post.slug}`} className="sm:w-64 md:w-72 shrink-0 block overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 sm:h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-3">
                    <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1">{post.category}</span>
                    <span className="text-stone-500">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 text-stone-500">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-emerald-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-emerald-800 hover:text-emerald-900"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blogs;
