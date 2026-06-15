import { useLocation, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CtaSection from "@/components/CtaSection";
import { landingPagesByPath, getLandingRelated } from "@/lib/landingPages";
import { faqPageJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { CheckCircle2, ArrowRight } from "lucide-react";

const KeywordLanding = () => {
  const { pathname } = useLocation();
  const page = landingPagesByPath[pathname];

  if (!page) {
    return <Navigate to={ROUTES.home} replace />;
  }

  const related = getLandingRelated(page);

  return (
    <div className="page-shell">
      <SeoHead
        page="home"
        titleOverride={page.title.replace(/ \| JB$/, "").replace(/ — JB$/, "")}
        descriptionOverride={page.description}
        pathOverride={page.path}
        extraJsonLd={[faqPageJsonLd(page.faqs)]}
      />
      <Header />
      <main>
        <section className="page-hero bg-gradient-to-br from-emerald-50 via-white to-stone-50">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="section-eyebrow">{page.eyebrow}</p>
            <h1 className="page-hero-title">{page.h1}</h1>
            <p className="page-hero-subtitle">{page.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              {page.productPath && (
                <Link to={page.productPath} className="btn-accent text-center">
                  View {page.recommendedModel ?? "Model"} Specs
                </Link>
              )}
              <Link to={ROUTES.order} className="btn-outline text-center">
                Get Price Quote
              </Link>
              <a
                href="https://wa.me/918767189437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-green-600 text-green-700 font-semibold px-6 py-3 hover:bg-green-50 transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {page.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-stone-700 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {page.sections.map((section) => (
              <article key={section.heading} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">{section.heading}</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  {section.body.map((para) => (
                    <p key={para.slice(0, 50)}>{para}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-stone-900 mb-4">Related Egg Incubator Pages</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {related.map((rel) => (
                  <li key={rel.path}>
                    <Link
                      to={rel.path}
                      className="group flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-900"
                    >
                      <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      {rel.h1.split("—")[0].trim()}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={ROUTES.products} className="group flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-900">
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    All Products &amp; Prices
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.training} className="group flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-900">
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Poultry Incubation Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-stone-50 border-t border-stone-200">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="section-title text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-stone-200 bg-white p-5 group">
                  <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between gap-4">
                    {faq.question}
                    <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-stone-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default KeywordLanding;
