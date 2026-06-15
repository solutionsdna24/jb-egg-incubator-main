import { products } from "@/lib/products";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Price", key: "price" as const },
  { label: "Capacity", key: "capacity" as const, fromFeatures: true },
  { label: "Body Material", values: ["Thermocol", "Fiber", "Metal"] },
  { label: "Auto Egg Turning", values: ["No", "No", "Yes"] },
  { label: "Digital Hygrometer", values: ["No", "Yes", "Yes"] },
  { label: "Hatch Rate", values: ["80%+", "85%+", "85%+"] },
  { label: "Warranty", values: ["6 months*", "6 months*", "6 months*"] },
];

const ComparisonSection = () => (
  <section className="section-padding bg-slate-50" aria-labelledby="comparison-heading">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="text-center mb-8 sm:mb-10">
        <p className="section-eyebrow">Side by Side</p>
        <h2 id="comparison-heading" className="section-title">
          Model Comparison
        </h2>
        <p className="section-subtitle mx-auto">
          Quickly compare JB incubator models to find the right fit for your farm and budget.
        </p>
      </div>

      <div className="overflow-x-auto modern-card border border-slate-200 bg-white">
        <table className="w-full min-w-[560px] text-sm sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left p-4 font-semibold text-slate-700">Feature</th>
              {products.map((p) => (
                <th key={p.id} className="p-4 font-bold text-blue-700 text-center">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-100 last:border-0">
                <td className="p-4 font-medium text-slate-700">{row.label}</td>
                {products.map((p, i) => {
                  let value: string;
                  if (row.key === "price") value = p.price;
                  else if (row.fromFeatures) value = p.features.capacity;
                  else value = row.values![i];

                  const isYesNo = value === "Yes" || value === "No";
                  return (
                    <td key={p.id} className="p-4 text-center text-slate-600">
                      {isYesNo ? (
                        value === "Yes" ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" aria-label="Yes" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" aria-label="No" />
                        )
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">* Warranty on controller & adapter</p>
    </div>
  </section>
);

export default ComparisonSection;
