import { ArrowDown, MapPin, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-printing.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import HeroLocationAndPricing from "@/components/HeroLocationAndPricing";

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const HeroSection = () => {
	const { t } = useLanguage();
	const h = translations.hero;

	return (
		<section className='relative min-h-screen flex items-center pt-16 overflow-hidden'>
			<div className='absolute inset-0'>
				<img
					src={heroImg}
					alt='Professional large format printing'
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40' />
			</div>

			<div className='container relative z-10 py-20 md:py-32'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Hero left side */}
					<div className='max-w-2xl space-y-6 animate-fade-in-up'>
						<div className='inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold'>
							{t(h.badge)}
						</div>

						<h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight'>
							{t(h.heading1)}
							<br />
							<span className='text-accent'>{t(h.heading2)}</span>{" "}
							{t(h.heading3)}
						</h1>

						<p className='text-lg md:text-xl text-primary-foreground/80 max-w-xl'>
							{t(h.description)}
						</p>

						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<a
								href={WHATSAPP_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-whatsapp text-whatsapp-foreground text-lg font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl'
							>
								<MessageCircle size={22} />
								{t(translations.nav.orderWhatsApp)}
							</a>
							{/* 
							<a
								href='#pricing'
								className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground text-lg font-semibold hover:bg-primary-foreground/10 transition-all'
							>
								{t(h.viewPricing)}
							</a> */}
						</div>
					</div>
					{/* Hero right side */}
					<HeroLocationAndPricing />
				</div>
			</div>

			<a
				href='#services'
				className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float text-primary-foreground/60 hover:text-primary-foreground transition-colors'
				aria-label='Scroll down'
			>
				<ArrowDown size={28} />
			</a>
		</section>
	);
};

export default HeroSection;
