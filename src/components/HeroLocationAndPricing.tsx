import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { MapPin, ArrowRight, BadgeDollarSign } from "lucide-react";

const HeroLocationAndPricing = () => {
	const { t } = useLanguage();
	const loc = translations.locations;

	return (
		<div className='w-full max-w-xl lg:ml-auto'>
			<div className='rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl'>
				<div className='mb-6'>
					<p className='text-accent text-sm font-semibold uppercase tracking-wide'>
						{t(loc.badge)}
					</p>
					<h2 className='text-2xl md:text-3xl font-bold text-primary-foreground mt-2'>
						{t(loc.heading)}
					</h2>
					<p className='text-primary-foreground/75 mt-2'>{t(loc.subtitle)}</p>
				</div>

				<div className='space-y-3'>
					{loc.shops.map((shop) => (
						<a
							key={shop.name.en}
							href='#locations'
							className='group flex items-center justify-between rounded-2xl bg-black/10 backdrop:blur-lg hover:bg-white/15 border border-white/10 px-4 py-4 transition-all'
						>
							<div className='flex items-start gap-3'>
								<div className='mt-0.5 rounded-xl bg-accent/20 p-2 text-accent'>
									<MapPin size={18} />
								</div>

								<div>
									<h3 className='text-primary-foreground font-semibold'>
										{t(shop.name)}
									</h3>
									<p className='text-sm text-primary-foreground/70'>
										{t(shop.address)}
									</p>
								</div>
							</div>

							<ArrowRight
								size={18}
								className='text-primary-foreground/60 group-hover:text-primary-foreground transition-colors'
							/>
						</a>
					))}
				</div>

				<div className='mt-6 grid sm:grid-cols-1 gap-3'>
					{/* <a
						href='#locations'
						className='inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 bg-primary-foreground text-foreground font-semibold hover:opacity-90 transition-all'
					>
						<MapPin size={18} />
						View Locations
					</a> */}

					<a
						href='#pricing'
						className='inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all'
					>
						<BadgeDollarSign size={18} />
						{t(translations.hero.viewPricing)}
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroLocationAndPricing;
