import { Printer, ScanLine, Layers, FileText, Copy, Package, Cpu, Zap } from "lucide-react";
import machineryImg from "@/assets/machinery-plotter.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Printer, ScanLine, Layers, FileText, Copy, Package];

const MachinerySection = () => {
  const { t } = useLanguage();
  const m = translations.machinery;

  return (
    <section id="machinery" className="py-20 md:py-28 bg-surface-warm">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(m.badge)}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">{t(m.heading)}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t(m.subtitle)}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {m.machines.map((machine, i) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 flex gap-4 items-start shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">
                        <span className="text-accent text-xl">{machine.count}</span>{" "}
                        <span className="text-sm">{t(machine.name)}</span>
                      </div>
                      <div className="text-muted-foreground text-xs mt-0.5">{t(machine.detail)}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                <Cpu size={15} className="text-primary" /> 8 {t(m.extras.computers)}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                <Zap size={15} className="text-accent" /> 3 {t(m.extras.generators)}
              </span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={machineryImg}
              alt={t(m.imageAlt)}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
        </div>

        {/* Daily capacity */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">{t(m.capacityHeading)}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {m.capacity.map((c) => (
              <div key={c.size} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold">{c.value}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {c.size} · {t(m.capacityUnit)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinerySection;
