import { Link } from "react-router-dom";
import { Flame, ArrowRight } from "lucide-react";

const PromoBar = () => (
  <div className="bg-orange-50 border-b border-orange-100 text-stone-800 text-sm">
    <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-800">
        <Flame className="h-4 w-4 text-orange-500 shrink-0" aria-hidden="true" />
        Limited Stock — Selling Fast
      </span>
      <span className="text-stone-700">Free setup guidance · 1 Year warranty</span>
      <Link
        to="/jb-egg-incubator-order"
        className="inline-flex items-center gap-1 font-semibold text-orange-600 hover:text-orange-700"
      >
        Order Now
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  </div>
);

export default PromoBar;
