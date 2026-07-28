import { MessageCircle, ArrowDown, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-printing.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const HeroSection = () => {
	const { t } = useLanguage();
	const h = translations.hero;

	const locations = ["Mirpur 10", "Farmgate", "Mohakhali"];

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
				<div className='max-w-2xl space-y-6 animate-fade-in-up'>
					<div className='inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold'>
						{t(h.badge)}
					</div>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight'>
						<span className='text-accent'>{t(h.heading3)}</span>
						<br />
						{t(h.heading1)}
						{t(h.heading2)}
						<br />
					</h1>
					<p className='text-lg md:text-xl text-primary-foreground/80 max-w-xl'>
						{t(h.description)}
					</p>

					{/* Numbers */}
					<div className='flex flex-row items-center gap-4'>
						<div className='px-4 py-1.5 rounded-full bg-accent/20 text-white text-xl font-semibold'>
							01711-825803
						</div>
						<div className='px-4 py-1.5 rounded-full bg-accent/20 text-white text-xl font-semibold'>
							01971-825803
						</div>
						<div className='px-4 py-1.5 rounded-full bg-accent/20 text-white text-xl font-semibold'>
							01785-600774
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 pt-4'>
						{/* The three locations at a glance */}

						<div className='flex gap-6 justify-center'>
							{locations.map((location, index) => (
								<a
									key={index}
									className='flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-white rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-accent group'
									href='#locations'
								>
									<MapPin className='w-6 h-6 text-accent group-hover:text-black' />
									<span className='text-white group-hover:text-black font-semibold text-lg'>
										{location}
									</span>
								</a>
							))}
						</div>

						{/* VIEW PRICING button */}
						{/* <a
							href='#pricing'
							className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground text-lg font-semibold hover:bg-primary-foreground/10 transition-all'
						>
							{t(h.viewPricing)}
						</a> */}
					</div>
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
