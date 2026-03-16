import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-primary text-lg">ATH</div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ATH — AutoCAD Training Home. {t(translations.footer.rights)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
