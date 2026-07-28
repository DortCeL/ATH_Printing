import { Building2, Calendar, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const MajorWorksSection = () => {
  const { t } = useLanguage();
  const w = translations.works;
  const [featured, ...rest] = w.items;

  return (
    <section id="works" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(w.badge)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t(w.heading)}</h2>
          <p className="text-primary-foreground/70 text-lg">{t(w.subtitle)}</p>
        </div>

        {/* Featured flagship project */}
        <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 md:p-12 mb-6 flex flex-col md:flex-row md:items-center gap-8">
          <div className="shrink-0">
            <div className="text-6xl md:text-8xl font-heading font-bold text-accent leading-none">
              {featured.quantity}
            </div>
            <div className="text-primary-foreground/60 uppercase tracking-widest text-sm mt-2">{t(w.copies)}</div>
          </div>
          <div className="h-px md:h-24 md:w-px bg-primary-foreground/15" />
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">{t(featured.title)}</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
              <span className="inline-flex items-center gap-2">
                <Building2 size={16} className="text-accent" />
                {t(featured.client)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                {t(featured.year)}
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText size={16} className="text-accent" />
                {t(featured.note)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="text-4xl font-heading font-bold text-accent">{item.quantity}</div>
              <div className="text-primary-foreground/60 uppercase tracking-widest text-[10px] mt-1 mb-4">
                {t(w.copies)}
              </div>
              <h3 className="font-heading font-semibold mb-3 leading-snug">{t(item.title)}</h3>
              <div className="space-y-1.5 text-xs text-primary-foreground/60">
                <div className="flex items-center gap-2">
                  <Building2 size={13} className="text-accent shrink-0" />
                  {t(item.client)}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-accent shrink-0" />
                  {t(item.year)}
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={13} className="text-accent shrink-0" />
                  {t(item.note)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg font-heading font-semibold text-primary-foreground/80">
          <span className="text-accent">211,000+</span> {t(w.banner)}
        </p>
      </div>
    </section>
  );
};

export default MajorWorksSection;
