import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="page-hero">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="page-hero-title">Contact JB Egg Incubator</h1>
            <p className="page-hero-subtitle mb-8">
              Reach out for product guidance, pricing, and order support. We are happy to help
              you choose the right incubator model for your farm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Phone</h2>
                <p className="mb-2">
                  <a href="tel:+918767189437" className="text-blue-700 underline hover:text-blue-900">
                    +91 8767189437
                  </a>
                </p>
                <p>
                  <a href="tel:+918803625410" className="text-blue-700 underline hover:text-blue-900">
                    +91 8803625410
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Email & Address</h2>
                <p className="mb-2">
                  <a href="mailto:jbincubator5@gmail.com" className="text-blue-700 underline hover:text-blue-900">
                    jbincubator5@gmail.com
                  </a>
                </p>
                <p className="text-slate-700">Lakhandur, Bhandara, Maharashtra 441803</p>
              </div>
            </div>
          </div>
        </section>       
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
