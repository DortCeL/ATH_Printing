import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const FAQSection = () => {
  const { t } = useLanguage();
  const f = translations.faq;

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-blue">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(f.badge)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">{t(f.heading)}</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {f.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
