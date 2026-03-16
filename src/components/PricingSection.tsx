import { Check, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL = "https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const sizes = [
  { size: "A4", dimensions: "210 × 297mm", price: "10", bulkPrice: "7" },
  { size: "A3", dimensions: "297 × 420mm", price: "20", bulkPrice: "15" },
  { size: "A2", dimensions: "420 × 594mm", price: "40", bulkPrice: "30" },
  { size: "A1", dimensions: "594 × 841mm", price: "80", bulkPrice: "60" },
  { size: "A0", dimensions: "841 × 1189mm", price: "150", bulkPrice: "120" },
  { size: "Custom", dimensions: "Any size", price: "Contact", bulkPrice: "Contact" },
];

const PricingSection = () => {
  const { t } = useLanguage();
  const p = translations.pricing;

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(p.badge)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">{t(p.heading)}</h2>
          <p className="text-muted-foreground text-lg">{t(p.subtitle)}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="grid grid-cols-4 bg-primary text-primary-foreground text-sm font-semibold">
              <div className="px-6 py-4">{t(p.size)}</div>
              <div className="px-6 py-4">{t(p.dimensions)}</div>
              <div className="px-6 py-4 text-center">{t(p.perCopy)}</div>
              <div className="px-6 py-4 text-center">{t(p.bulk)}</div>
            </div>

            {sizes.map((item, i) => (
              <div
                key={item.size}
                className={`grid grid-cols-4 text-sm ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/50"
                } ${item.size === "A1" ? "ring-2 ring-accent ring-inset" : ""}`}
              >
                <div className="px-6 py-4 font-heading font-bold text-foreground flex items-center gap-2">
                  {item.size}
                  {item.size === "A1" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">
                      {t(p.popular)}
                    </span>
                  )}
                </div>
                <div className="px-6 py-4 text-muted-foreground">{item.dimensions}</div>
                <div className="px-6 py-4 text-center font-semibold text-foreground">
                  {item.price === "Contact" ? "—" : `৳${item.price}`}
                </div>
                <div className="px-6 py-4 text-center font-semibold text-accent">
                  {item.bulkPrice === "Contact" ? "—" : `৳${item.bulkPrice}`}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {p.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check size={16} className="text-whatsapp shrink-0" />
                {t(f)}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-whatsapp text-whatsapp-foreground text-lg font-bold hover:opacity-90 transition-all shadow-lg"
            >
              <MessageCircle size={22} />
              {t(p.getQuote)}
            </a>
            <p className="text-muted-foreground text-sm mt-3">{t(p.customNote)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
