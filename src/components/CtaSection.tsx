import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const CtaSection = () => (
  <section className="section-padding-sm px-4" aria-labelledby="cta-heading">
    <div className="container mx-auto max-w-5xl">
      <div className="rounded-2xl bg-white border border-stone-200 px-6 sm:px-12 py-10 sm:py-14 text-center shadow-sm">
        <p className="text-xs font-medium uppercase tracking-widest text-orange-600 mb-2">
          Limited Stock · Selling Fast
        </p>
        <h2 id="cta-heading" className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4">
          Ready to Start Hatching?
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
          Order your JB Egg Incubator today from ₹2,700. Pan-India delivery, setup support,
          and warranty on every unit.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/order-egg-incubator" className="btn-accent px-6 py-3.5">
            Submit Order Enquiry
          </Link>
          <a
            href="tel:+918767189437"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-6 py-3.5 rounded-xl transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call +91 8767189437
          </a>
          <a
            href="https://wa.me/918767189437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-xl transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
