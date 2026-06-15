import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, Tag, ArrowLeft, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogs";
import { blogPostingJsonLd } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;
  const related = slug ? getRelatedBlogs(slug, 3) : [];

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="page-shell">
      <SeoHead
        page="blogs"
        titleOverride={post.title}
        descriptionOverride={post.excerpt}
        pathOverride={`/blog/${post.slug}`}
        extraJsonLd={[blogPostingJsonLd(post)]}
      />
      <Header />
      <main>
        <article className="section-padding px-4">
          <div className="container mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-emerald-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-2xl border border-stone-200 mb-6 aspect-[16/9] object-cover"
                loading="eager"
                decoding="async"
              />
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-4">
              <span className="inline-flex items-center gap-1">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {post.category}
              </span>
              <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-stone max-w-none space-y-4 text-stone-600 leading-relaxed">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-orange-50 border border-orange-100 text-center">
              <p className="font-semibold text-stone-800 mb-2">Limited Stock — Selling Fast</p>
              <p className="text-sm text-stone-600 mb-4">
                Order your JB Egg Incubator today. From ₹2,700 with pan-India delivery and setup support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/order-egg-incubator" className="btn-accent">
                  Submit Order Enquiry
                </Link>
                <a href="tel:+918767189437" className="btn-outline inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>

            {related.length > 0 && (
              <aside className="mt-12 pt-10 border-t border-stone-200" aria-labelledby="related-blogs-heading">
                <h2 id="related-blogs-heading" className="text-xl font-bold text-stone-900 mb-6">
                  Related Articles
                </h2>
                <ul className="space-y-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/blog/${item.slug}`}
                        className="group flex items-start justify-between gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
                      >
                        <span>
                          <span className="block font-semibold text-stone-900 group-hover:text-emerald-700">
                            {item.title}
                          </span>
                          <span className="block text-sm text-stone-600 mt-1 line-clamp-2">{item.excerpt}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-emerald-600 mt-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
