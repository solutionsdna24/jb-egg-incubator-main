import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { getLatestBlogs } from "@/lib/blogs";

const BlogSection = () => {
  const posts = getLatestBlogs(3);

  return (
    <section
      id="blog"
      className="relative section-padding bg-stone-100 border-y border-stone-200"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 mb-3">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              Tips & Guides
            </span>
            <h2 id="blog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Egg Incubator Blog — Guides & Egg Hatching Machine Price
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mt-2">
              Expert advice to help you hatch smarter — and find the right JB model faster.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors shrink-0 shadow-sm"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border-2 border-stone-200 shadow-md hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/10]">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="h-full w-full bg-emerald-100" />
                )}
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-emerald-800 hover:text-emerald-900"
                  aria-label={`Read more: ${post.title}`}
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/jb-egg-incubator-order" className="btn-accent text-base px-8 py-3.5 shadow-lg">
            Ready to Buy? Get a Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
