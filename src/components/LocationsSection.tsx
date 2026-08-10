import { MapPin, Clock, ExternalLink, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const LocationsSection = () => {
	const { t } = useLanguage();
	const loc = translations.locations;

	return (
		<section id='locations' className='py-16 sm:py-20 md:py-28 bg-surface-warm'>
			<div className='container'>
				<div className='text-center max-w-2xl mx-auto mb-10 md:mb-16'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(loc.badge)}
					</p>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4'>
						{t(loc.heading)}
					</h2>
					<p className='text-muted-foreground text-base sm:text-lg'>{t(loc.subtitle)}</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto'>
					{loc.shops.map((shop, i) => (
						<div
							key={i}
							className='bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col'
						>
							<div className='aspect-[16/10] sm:aspect-[4/3] bg-muted'>
								<iframe
									src={shop.mapUrl}
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title={t(shop.name)}
								/>
							</div>

							<div className='p-5 sm:p-6 space-y-3 flex-1 flex flex-col'>
								<h3 className='font-heading font-bold text-foreground text-lg sm:text-xl'>
									{t(shop.name)}
								</h3>

								<div className='flex items-start gap-3 text-sm text-muted-foreground'>
									<MapPin size={16} className='text-primary shrink-0 mt-0.5' />
									<span className='leading-relaxed'>{t(shop.address)}</span>
								</div>

								<div className='flex items-start gap-3 text-sm text-muted-foreground'>
									<Clock size={16} className='text-primary shrink-0 mt-0.5' />
									<span>
										{t(loc.hours)}
										<span className='block text-xs mt-0.5 opacity-80'>
											{t(loc.closed)}
										</span>
									</span>
								</div>

								<a
									href={`tel:${shop.phoneTel}`}
									className='flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-colors'
								>
									<Phone size={16} className='text-accent shrink-0' />
									{shop.phone}
								</a>

								<div className='pt-2 mt-auto flex flex-wrap gap-2'>
									<a
										href={shop.directionsUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors'
									>
										<ExternalLink size={14} />
										{t(loc.getDirections)}
									</a>
									<a
										href={`tel:${shop.phoneTel}`}
										className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-foreground text-sm font-semibold hover:bg-muted/80 transition-colors'
									>
										<Phone size={14} />
										{t(loc.call)}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LocationsSection;
