import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CtaSection from "@/components/CtaSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import {
  trainingModules,
  temperatureChart,
  hatchingProcess21Days,
  commonMistakes,
} from "@/lib/training";
import { ROUTES } from "@/lib/routes";
import { BookOpen, Thermometer } from "lucide-react";

const Training = () => (
  <div className="page-shell">
    <SeoHead page="training" />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <BookOpen className="h-10 w-10 mx-auto mb-4 text-emerald-200" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Poultry Incubation Training — JB Guides
          </h1>
          <p className="text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Learn how to hatch eggs in an incubator, follow our egg incubation temperature chart,
            master the 21 day hatching process, and avoid common incubation mistakes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title text-center mb-10">Training Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingModules.map((mod) => (
              <article key={mod.title} className="rounded-2xl border border-stone-200 p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{mod.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{mod.summary}</p>
                <ul className="space-y-1">
                  {mod.topics.map((t) => (
                    <li key={t} className="text-sm text-stone-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-50" aria-labelledby="temp-chart-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="temp-chart-heading" className="section-title text-center mb-8">
            <Thermometer className="inline h-7 w-7 text-emerald-700 mr-2 -mt-1" aria-hidden="true" />
            Egg Incubation Temperature Chart
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-emerald-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Phase</th>
                  <th className="px-4 py-3 text-left">Temperature</th>
                  <th className="px-4 py-3 text-left">Humidity</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {temperatureChart.map((row) => (
                  <tr key={row.day} className="border-t border-stone-100">
                    <td className="px-4 py-3 font-semibold">{row.day}</td>
                    <td className="px-4 py-3">{row.temperature}</td>
                    <td className="px-4 py-3">{row.humidity}</td>
                    <td className="px-4 py-3 text-stone-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title text-center mb-8">21 Day Hatching Process</h2>
          <div className="space-y-6">
            {hatchingProcess21Days.map((phase) => (
              <article key={phase.day} className="rounded-xl border border-stone-200 p-5">
                <p className="text-emerald-700 font-bold text-sm">{phase.day}</p>
                <h3 className="text-lg font-bold text-stone-900 mt-1">{phase.title}</h3>
                <p className="text-stone-600 mt-2 leading-relaxed">{phase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-red-50/50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title text-center mb-8">Common Incubation Mistakes</h2>
          <div className="space-y-4">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="rounded-xl bg-white border border-stone-200 p-5">
                <p className="font-bold text-red-700">✗ {item.mistake}</p>
                <p className="text-stone-700 mt-2 text-sm"><strong className="text-emerald-800">Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to={ROUTES.hatchingGuide} className="btn-accent">Download Free Hatching Guide</Link>
          </div>
        </div>
      </section>

      <InternalLinksSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Training;
