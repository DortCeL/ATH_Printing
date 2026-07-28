import {
	Map,
	Printer,
	Copy,
	Palette,
	BookOpen,
	MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const icons = [Map, Printer, Copy, Palette, BookOpen];

const ServicesSection = () => {
	const { t } = useLanguage();
	const s = translations.services;

	return (
		<section id='services' className='py-20 md:py-28 bg-surface-blue'>
			<div className='container'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(s.badge)}
					</p>
					<h2 className='text-3xl md:text-5xl font-heading font-bold text-foreground mb-4'>
						{t(s.heading)}
					</h2>
					<p className='text-muted-foreground text-lg'>{t(s.subtitle)}</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{s.items.map((item, i) => {
						const Icon = icons[i];
						const featured = i === 0;
						return (
							<div
								key={i}
								className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg ${
									featured
										? "md:col-span-2 bg-primary text-primary-foreground border-primary shadow-md"
										: "bg-card border-border shadow-sm"
								}`}
							>
								<span
									className={`absolute top-6 right-8 text-5xl font-heading font-bold ${
										featured ? "text-primary-foreground/15" : "text-accent/15"
									}`}
								>
									{String(i + 1).padStart(2, "0")}
								</span>
								<div
									className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
										featured ? "bg-primary-foreground/15" : "bg-primary/10"
									}`}
								>
									<Icon
										size={28}
										className={
											featured ? "text-primary-foreground" : "text-primary"
										}
									/>
								</div>
								<h3
									className={`text-2xl  font-heading font-semibold mb-2 ${
										featured ? "text-primary-foreground" : "text-foreground"
									}`}
								>
									{t(item.title)}
								</h3>
								<p
									className={`text-sm leading-relaxed ${
										featured
											? "text-primary-foreground/80"
											: "text-muted-foreground"
									}`}
								>
									{t(item.description)}
								</p>
							</div>
						);
					})}

					{/* <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 lg:col-span-3 rounded-2xl p-8 bg-whatsapp text-whatsapp-foreground flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <span className="flex items-center gap-4">
              <MessageCircle size={32} />
              <span className="text-xl md:text-2xl font-heading font-bold">{t(s.cta)}</span>
            </span>
            <span className="text-sm font-semibold text-whatsapp-foreground/80">+880 1722 881393</span>
          </a> */}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
