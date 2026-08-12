import { ArrowDown, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-printing.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const formatPhoneDisplay = (raw: string) => {
	const digits = raw.replace(/\D/g, "");
	if (digits.length === 11) {
		return `${digits.slice(0, 5)}-${digits.slice(5)}`;
	}
	return raw;
};

const toTelHref = (raw: string) => {
	const digits = raw.replace(/\D/g, "");
	return `tel:+88${digits}`;
};

const HeroSection = () => {
	const { t } = useLanguage();
	const h = translations.hero;
	const loc = translations.locations;
	const proprietorPhones = h.proprietor_phone_numbers;

	return (
		<section className='relative min-h-[100svh] flex items-center justify-center pt-[6.75rem] md:pt-[5.5rem] lg:pt-[6rem] overflow-hidden'>
			<div className='absolute inset-0'>
				<img
					src={heroImg}
					alt='Professional large format printing'
					className='w-full h-full object-cover animate-hero-zoom'
				/>
				<div className='absolute inset-0 bg-[#070b14]/70' />
				<div className='absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]/50' />
			</div>

			<div className='container relative z-10 w-full py-10 sm:py-16 md:py-20 pb-24'>
				<div className='mx-auto w-full max-w-5xl text-center animate-fade-in-up flex flex-col items-center'>
					<h1 className='w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]'>
						<span className='font-display block text-[clamp(2.5rem,10vw,6.75rem)] leading-[1.05] font-bold tracking-tight text-white'>
							{t(h.companyName)}
						</span>
						<span className='font-display mt-2 sm:mt-3 inline-block text-[clamp(1.5rem,5vw,3rem)] font-bold tracking-[0.18em] text-[#ff9a3c]'>
							({t(h.companyAbbr)})
						</span>
					</h1>

					<p className='mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white font-body font-medium drop-shadow-md'>
						{t(h.description)}
					</p>

					{/* CEO / proprietor numbers — quiet, compact */}
					<div className='mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6'>
						{proprietorPhones.map((phone) => (
							<a
								key={phone}
								href={toTelHref(phone)}
								className='inline-flex items-center gap-1.5 sm:gap-2 text-white/85 hover:text-white transition-colors'
							>
								<Phone size={14} className='opacity-70 shrink-0' />
								<span className='font-heading text-sm sm:text-base md:text-lg tracking-wide'>
									{formatPhoneDisplay(phone)}
								</span>
							</a>
						))}
					</div>

					<div className='mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3'>
						{loc.shops.map((shop, index) => (
							<a
								key={index}
								href='#locations'
								className='inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/15 border border-white/40 text-white text-xs sm:text-sm font-semibold backdrop-blur-md hover:bg-[#ff9a3c] hover:border-[#ff9a3c] hover:text-[#0a1020] transition-all duration-300'
							>
								<MapPin size={14} className='shrink-0 sm:w-4 sm:h-4' />
								{t(shop.name)}
							</a>
						))}
					</div>
				</div>
			</div>

			<a
				href='#overview'
				className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float text-white/70 hover:text-white transition-colors'
				aria-label='Scroll down'
			>
				<ArrowDown size={28} />
			</a>
		</section>
	);
};

export default HeroSection;
