import { teamMembers } from "@/lib/about";
import { Users } from "lucide-react";

const TeamSection = () => (
  <section id="team" className="section-padding bg-stone-50" aria-labelledby="team-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Our Team</p>
        <h2 id="team-heading" className="section-title">
          12+ People Behind JB Egg Incubator
        </h2>
        <p className="section-subtitle mx-auto">
          From manufacturing in Bhandara to sales in Nagpur and pan-India support — our egg incubator
          manufacturer team is here for every farmer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-emerald-300 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 mb-3">
              <Users className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-stone-900">{member.name}</h3>
            <p className="text-sm text-emerald-700 font-medium mt-1">{member.role}</p>
            <p className="text-xs text-stone-500 mt-1">{member.department}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
