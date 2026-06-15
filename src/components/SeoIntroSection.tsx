import { Link } from "react-router-dom";
import { ArrowRight, Egg, MapPin, Clock } from "lucide-react";

const SeoIntroSection = () => (
  <section
    id="about-jb-incubators"
    className="section-padding bg-white"
    aria-labelledby="about-jb-heading"
  >
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="section-eyebrow">About JB</p>
        <h2 id="about-jb-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
          Best Egg Incubator Company in India — Built in Maharashtra
        </h2>
        <p className="text-base sm:text-lg text-stone-700 max-w-3xl leading-relaxed">
          JB is an <strong>egg incubator manufacturer in India</strong> and trusted{" "}
          <strong>poultry incubator supplier</strong> from <strong>Lakhandur, Bhandara, Maharashtra</strong>.
          Whether you need a budget manual unit or a <strong>commercial egg incubator</strong> with
          automatic controls, we offer clear <strong>egg hatching machine price</strong> tiers and
          honest support for Indian farms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: Egg,
            title: "50–100 Eggs Per Cycle",
            text: "Pick the right size for your farm — no need to overpay for capacity you don't use yet.",
          },
          {
            icon: MapPin,
            title: "Egg Incubator in Maharashtra",
            text: "Factory in Bhandara with fast delivery across Maharashtra and all India — local Marathi support available.",
          },
          {
            icon: Clock,
            title: "21-Day Hatch Cycle",
            text: "Stable heat & humidity for chicken eggs. Duck and quail farmers also use JB with great results.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border-2 border-stone-200 bg-stone-50 p-6 text-center hover:border-emerald-300 transition-colors"
          >
            <div className="icon-circle mx-auto mb-4">
              <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
            <p className="text-base text-stone-700 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-6 sm:p-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-stone-900 mb-4">Automatic Egg Incubator Machine — Pick Your Model</h3>
        <ul className="space-y-4 text-base text-stone-800 leading-relaxed mb-6">
          <li>
            <strong className="text-emerald-800">JBW100 (from ₹2,700)</strong> — Best for beginners.
            Manual control, thermocol body, up to 100 eggs. Simple and affordable.
          </li>
          <li>
            <strong className="text-emerald-800">JBST100</strong> — Most popular. Fiber body + digital
            hygrometer for better humidity control and stronger build.
          </li>
          <li>
            <strong className="text-emerald-800">JBI80M</strong> — Premium automatic. Metal body, auto egg
            turning, digital monitor — for serious hatcheries.
          </li>
        </ul>
        <p className="text-base text-stone-700 leading-relaxed mb-6">
          All models use just <strong>120W power</strong>, include setup guidance, and ship across India.
          Watch real customer videos on our{" "}
          <Link to="/" onClick={(e) => { e.preventDefault(); document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" }); }} className="text-emerald-700 font-bold hover:underline">
            YouTube section
          </Link>
          , then{" "}
          <Link to="/contact" className="text-emerald-700 font-bold hover:underline">
            call us
          </Link>{" "}
          for a personal recommendation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/jb-egg-incubator-order" className="btn-accent justify-center gap-2">
            Get Price & Order
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/products" className="btn-outline justify-center">
            View All Models
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SeoIntroSection;
