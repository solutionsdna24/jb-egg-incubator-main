import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    lines: [
      { label: "+91 8767189437", href: "tel:+918767189437" },
      { label: "+91 8803625410", href: "tel:+918803625410" },
    ],
    note: "Call for orders, pricing, and delivery enquiries.",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ label: "jbincubator5@gmail.com", href: "mailto:jbincubator5@gmail.com" }],
    note: "Email us for bulk orders and business enquiries.",
  },
  {
    icon: MapPin,
    title: "Office Address",
    lines: [{ label: "Lakhandur, Bhandara, Maharashtra 441803", href: undefined }],
    note: "Visit by appointment. Pan-India delivery available.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      { label: "Mon – Sat: 9:00 AM – 7:00 PM", href: undefined },
      { label: "Sunday: 10:00 AM – 5:00 PM", href: undefined },
    ],
    note: "WhatsApp messages answered throughout the day.",
  },
];

const Contact = () => (
  <div className="page-shell">
    <SeoHead page="contact" />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="page-hero-title">Contact JB Egg Incubator</h1>
          <p className="page-hero-subtitle mb-8">
            Our team is ready to help you choose the right incubator, confirm pricing, and arrange
            delivery anywhere in India. Reach out by phone, email, or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:+918767189437" className="btn-primary inline-flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <a
              href="https://wa.me/918767189437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/jb-egg-incubator-order" className="btn-outline">
              Order Enquiry Form
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {contactMethods.map((method) => (
              <article
                key={method.title}
                className="modern-card p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle">
                    <method.icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">{method.title}</h2>
                </div>
                <div className="space-y-1 mb-3">
                  {method.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.label}
                        href={line.href}
                        className="block text-blue-700 hover:text-blue-900 font-medium break-all"
                      >
                        {line.label}
                      </a>
                    ) : (
                      <p key={line.label} className="text-slate-700">
                        {line.label}
                      </p>
                    ),
                  )}
                </div>
                <p className="text-sm text-slate-500">{method.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
