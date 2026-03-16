import { Map, Ruler, Building2, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Map, Ruler, Building2, Layers];

const ServicesSection = () => {
  const { t } = useLanguage();
  const s = translations.services;

  return (
    <section id="services" className="py-20 md:py-28 bg-surface-blue">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(s.badge)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">{t(s.heading)}</h2>
          <p className="text-muted-foreground text-lg">{t(s.subtitle)}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{t(item.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
