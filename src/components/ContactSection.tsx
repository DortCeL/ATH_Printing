import { MessageCircle, Phone, MapPin, Mail, Upload } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL = "https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const ContactSection = () => {
  const { t } = useLanguage();
  const c = translations.contact;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t(c.badge)}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">{t(c.heading)}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t(c.subtitle)}</p>

            <div className="space-y-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-whatsapp/10 border border-whatsapp/20 hover:bg-whatsapp/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-whatsapp flex items-center justify-center shrink-0">
                  <MessageCircle size={24} className="text-whatsapp-foreground" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t(c.whatsapp)}</div>
                  <div className="text-muted-foreground text-sm">+880 1722 881393</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t(c.phone)}</div>
                  <div className="text-muted-foreground text-sm">+880 1722 881393</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t(c.email)}</div>
                  <div className="text-muted-foreground text-sm">info@athprinting.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t(c.location)}</div>
                  <div className="text-muted-foreground text-sm">{t(c.locationValue)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-10 rounded-3xl border-2 border-dashed border-border bg-muted/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">{t(c.uploadTitle)}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t(c.uploadDesc)}</p>
              <div className="px-6 py-3 rounded-xl bg-muted text-muted-foreground text-sm font-semibold">
                {t(c.comingSoon)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
