import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, ArrowRight, BookOpen, Search, SlidersHorizontal, X, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import SeoHead from "@/components/SeoHead";
import {
  blogPosts,
  BLOG_FILTER_OPTIONS,
  BLOG_SORT_OPTIONS,
  filterAndSortBlogs,
  countBlogsByCategory,
  type BlogSortId,
} from "@/lib/blogs";
import { ROUTES } from "@/lib/routes";

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const activeCategory = searchParams.get("category") || "all";
  const sort = (searchParams.get("sort") || "newest") as BlogSortId;

  const filteredPosts = useMemo(
    () => filterAndSortBlogs(blogPosts, activeCategory, search, sort),
    [activeCategory, search, sort],
  );

  const setCategory = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    setSearchParams(next, { replace: true });
  };

  const setSort = (id: BlogSortId) => {
    const next = new URLSearchParams(searchParams);
    if (id === "newest") next.delete("sort");
    else next.set("sort", id);
    setSearchParams(next, { replace: true });
  };

  const clearAll = () => {
    setSearch("");
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    activeCategory !== "all" || sort !== "newest" || search.trim().length > 0;

  return (
    <div className="page-shell">
      <SeoHead page="blogs" />
      <Header />
      <PromoBar />
      <main>
        <section className="relative bg-emerald-700 text-white px-4 py-14 sm:py-16 text-center overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold mb-4">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              JB Incubator Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Egg Incubator Blog — Maharashtra &amp; India Guides
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
              Articles on automatic egg incubator Maharashtra, egg hatching machine price, poultry
              incubator Vidarbha, and egg incubator Nagpur &amp; Bhandara — free guides for farmers
              nationwide.
            </p>
            <Link
              to={ROUTES.order}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              Order Now — From ₹2,700
            </Link>
          </div>
        </section>

        <section id="blog-list" className="section-padding px-4 bg-stone-100">
          <div className="container mx-auto max-w-4xl">
            {/* Filter toolbar */}
            <div className="sticky top-[4.5rem] lg:top-20 z-20 -mx-4 px-4 py-4 mb-8 bg-stone-100/95 backdrop-blur-md border-y border-stone-200/80 rounded-none">
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search articles, topics, or tags…"
                      className="w-full rounded-xl border border-stone-200 bg-white pl-10 pr-10 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                      aria-label="Search blog articles"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <label className="sr-only" htmlFor="blog-sort">
                      Sort articles
                    </label>
                    <select
                      id="blog-sort"
                      value={sort}
                      onChange={(e) => setSort(e.target.value as BlogSortId)}
                      className="flex-1 sm:w-44 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none"
                    >
                      {BLOG_SORT_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => setShowFilters((v) => !v)}
                      className="sm:hidden inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700"
                      aria-expanded={showFilters}
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Filter
                    </button>
                  </div>
                </div>

                <div
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${showFilters ? "" : "hidden"} sm:flex`}
                  role="group"
                  aria-label="Blog category filters"
                >
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                    {BLOG_FILTER_OPTIONS.map((opt) => {
                      const isActive = activeCategory === opt.id;
                      const count = countBlogsByCategory(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setCategory(opt.id)}
                          title={opt.description}
                          className={`shrink-0 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                            isActive
                              ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                              : "bg-white text-stone-700 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50"
                          }`}
                          aria-pressed={isActive}
                        >
                          {opt.label}
                          <span
                            className={`text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center ${
                              isActive ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
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
                      className="shrink-0 text-sm font-medium text-stone-500 hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      <X className="h-3.5 w-3.5" />
                      Clear all
                    </button>
                  )}
                </div>

                <p className="text-sm text-stone-600 inline-flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  Showing <strong className="text-stone-900">{filteredPosts.length}</strong> of{" "}
                  {blogPosts.length} articles
                </p>
              </div>
            </div>

            {/* Article list */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white border-2 border-stone-200 shadow-md hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
                  >
                    {post.image && (
                      <Link
                        to={ROUTES.blogPost(post.slug)}
                        className="sm:w-64 md:w-72 shrink-0 block overflow-hidden"
                      >
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
                        <button
                          type="button"
                          onClick={() => setCategory(post.category)}
                          className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 hover:bg-emerald-200 transition-colors"
                        >
                          {post.category}
                        </button>
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
                        <Link
                          to={ROUTES.blogPost(post.slug)}
                          className="hover:text-emerald-700 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-stone-600 leading-relaxed mb-3 flex-1">{post.excerpt}</p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-stone-500 bg-stone-100 rounded-md px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to={ROUTES.blogPost(post.slug)}
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
            ) : (
              <div className="text-center py-16 px-4 rounded-2xl border-2 border-dashed border-stone-300 bg-white">
                <BookOpen className="h-12 w-12 text-stone-300 mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-stone-800 mb-2">No articles match your filters</h2>
                <p className="text-stone-600 text-sm mb-6 max-w-md mx-auto">
                  Try another category or clear your search to browse all JB guides.
                </p>
                <button type="button" onClick={clearAll} className="btn-primary text-sm">
                  Show all articles
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
