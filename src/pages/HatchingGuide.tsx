import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CtaSection from "@/components/CtaSection";
import { hatchingGuideSections, temperatureChart } from "@/lib/training";
import { BRAND_FOUNDED_YEAR } from "@/lib/about";
import { Download, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";

const HatchingGuide = () => {
  const handlePrint = () => window.print();

  return (
    <div className="page-shell">
      <SeoHead page="hatchingGuide" />
      <Header />
      <main>
        <section className="page-hero bg-gradient-to-br from-blue-50 via-white to-emerald-50 print:hidden">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="page-hero-title">Free JB Hatching Guide — Download &amp; Print</h1>
            <p className="page-hero-subtitle">
              Complete guide on humidity for egg hatching, temperature control, and the 21 day
              hatching process for JB egg incubator users in Maharashtra and India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
              <button type="button" onClick={handlePrint} className="btn-accent inline-flex items-center justify-center gap-2">
                <Printer className="h-4 w-4" aria-hidden="true" />
                Print / Save as PDF
              </button>
              <a href="tel:+918767189437" className="btn-outline inline-flex items-center justify-center gap-2">
                <Download className="h-4 w-4" aria-hidden="true" />
                Call for Printed Copy
              </a>
            </div>
          </div>
        </section>

        <article id="hatching-guide-content" className="section-padding bg-white max-w-3xl mx-auto px-4 print:py-8">
          <header className="mb-8 print:mb-6">
            <p className="text-emerald-700 font-semibold">JB Egg Incubator · Since {BRAND_FOUNDED_YEAR}</p>
            <h2 className="text-2xl font-bold text-stone-900 mt-2">Complete Egg Hatching Guide</h2>
            <p className="text-stone-600 mt-2">Lakhandur, Bhandara, Maharashtra · +91 8767189437</p>
          </header>

          {hatchingGuideSections.map((section) => (
            <section key={section.title} className="mb-8">
              <h3 className="text-xl font-bold text-stone-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-stone-700 leading-relaxed flex gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="mb-8">
            <h3 className="text-xl font-bold text-stone-900 mb-3">Temperature &amp; Humidity Chart</h3>
            <table className="w-full text-sm border border-stone-200">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-3 py-2 text-left">Days</th>
                  <th className="px-3 py-2 text-left">Temp</th>
                  <th className="px-3 py-2 text-left">Humidity</th>
                </tr>
              </thead>
              <tbody>
                {temperatureChart.map((row) => (
                  <tr key={row.day} className="border-t border-stone-200">
                    <td className="px-3 py-2">{row.day}</td>
                    <td className="px-3 py-2">{row.temperature}</td>
                    <td className="px-3 py-2">{row.humidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <p className="text-sm text-stone-500 border-t border-stone-200 pt-6">
            Need help? <Link to={ROUTES.contact} className="text-emerald-700 font-semibold hover:underline">Contact JB</Link> or{" "}
            <Link to={ROUTES.calculator} className="text-emerald-700 font-semibold hover:underline">use our capacity calculator</Link>.
          </p>
        </article>

        <div className="print:hidden">
          <CtaSection />
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default HatchingGuide;
