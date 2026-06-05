const SeoIntroSection = () => {
  return (
    <section
      id="about-jb-incubators"
      className="bg-white py-12 px-4"
      aria-labelledby="about-jb-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 id="about-jb-heading" className="text-3xl font-bold text-gray-800 mb-4">
          About JB Egg Incubator
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          JB Egg Incubator manufactures reliable poultry incubators for farmers across India.
          Our models are designed for stable temperature control, practical daily use, and
          consistent hatch performance in both small farms and growing poultry businesses.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Whether you need a budget-friendly manual incubator or a fully automatic model with
          digital monitoring, JB offers options for different capacity needs. Explore our{" "}
          <a href="/products" className="text-blue-700 underline hover:text-blue-900">
            egg incubator products
          </a>
          , or{" "}
          <a href="/contact" className="text-blue-700 underline hover:text-blue-900">
            contact our team
          </a>{" "}
          for model selection support.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Popular models include JBW100 for manual operation, JBST100 with improved monitoring,
          and JBIN100A for automatic egg turning and advanced control. All units are built with
          durable materials, energy-efficient heating, and dependable components backed by
          customer support and warranty coverage.
        </p>
        <nav aria-label="Related page sections" className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="/" className="text-blue-700 underline hover:text-blue-900">
            Home
          </a>
          <a href="/products" className="text-blue-700 underline hover:text-blue-900">
            Products
          </a>
          <a href="/details" className="text-blue-700 underline hover:text-blue-900">
            Details
          </a>
          <a href="/contact" className="text-blue-700 underline hover:text-blue-900">
            Contact
          </a>
          <a href="tel:+918767189437" className="text-blue-700 underline hover:text-blue-900">
            Call +91 8767189437
          </a>
        </nav>
      </div>
    </section>
  );
};

export default SeoIntroSection;
