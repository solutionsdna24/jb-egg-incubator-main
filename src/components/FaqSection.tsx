import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
import { Link } from "react-router-dom";

interface FaqSectionProps {
  showContactLink?: boolean;
}

const FaqSection = ({ showContactLink = true }: FaqSectionProps) => (
  <section className="section-padding bg-white" aria-labelledby="faq-heading">
    <div className="container mx-auto max-w-3xl px-4">
      <div className="text-center mb-8 sm:mb-10">
        <p className="section-eyebrow">Got Questions?</p>
        <h2 id="faq-heading" className="section-title">
          Frequently Asked Questions
        </h2>
        <p className="section-subtitle mx-auto">
          Answers to common questions about JB Egg Incubator models, ordering, delivery, and warranty.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="modern-card border border-slate-200 rounded-xl px-4 sm:px-5 data-[state=open]:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left text-slate-900 font-semibold hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {showContactLink && (
        <p className="text-center text-slate-600 mt-8 text-sm sm:text-base">
          Still have questions?{" "}
          <Link to="/contact" className="text-emerald-700 font-semibold hover:underline">
            Contact our team
          </Link>{" "}
          or call{" "}
          <a href="tel:+918767189437" className="text-emerald-700 font-semibold hover:underline">
            +91 8767189437
          </a>
        </p>
      )}
    </div>
  </section>
);

export default FaqSection;
