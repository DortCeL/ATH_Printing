import { Cpu, Zap, Target, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Cpu, Target, Zap, Shield];

const TechnologySection = () => {
  const { t } = useLanguage();
  const tech = translations.technology;

  return (
    <section id="technology" className="py-20 md:py-28 bg-surface-warm">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(tech.badge)}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">{t(tech.heading)}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t(tech.subtitle)}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {tech.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm">{t(f.title)}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{t(f.description)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-7xl font-heading font-bold text-primary">2400</div>
                <div className="text-xl font-heading font-semibold text-foreground">{t(tech.dpiLabel)}</div>
                <p className="text-muted-foreground text-sm">{t(tech.dpiNote)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
