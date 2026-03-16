import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const ts = translations.testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(ts.badge)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">{t(ts.heading)}</h2>
          <p className="text-muted-foreground text-lg">{t(ts.subtitle)}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ts.items.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t(item.text)}"</p>
              <div>
                <div className="font-heading font-semibold text-foreground text-sm">{t(item.name)}</div>
                <div className="text-muted-foreground text-xs">{t(item.role)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
