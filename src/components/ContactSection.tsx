import { MessageCircle, Phone, MapPin, Clock, Mail, ExternalLink, User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const CENTRAL_WHATSAPP =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const ContactSection = () => {
	const { t } = useLanguage();
	const c = translations.contact;
	const loc = translations.locations;

	return (
		<section id='contact' className='relative py-16 sm:py-20 md:py-28 overflow-hidden bg-surface-deep'>
			<div
				className='pointer-events-none absolute inset-0 opacity-[0.35]'
				aria-hidden
				style={{
					backgroundImage:
						"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(217 72% 48% / 0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, hsl(25 95% 55% / 0.08), transparent)",
				}}
			/>

			<div className='container relative'>
				<div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(c.badge)}
					</p>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4'>
						{t(c.heading)}
					</h2>
					<p className='text-muted-foreground text-base sm:text-lg'>{t(c.subtitle)}</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto'>
					{loc.shops.map((shop, i) => {
						const waUrl = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(
							`Hi ATH ${t(shop.name)}, I want to place a print order`
						)}`;

						return (
							<article
								key={i}
								className='flex flex-col rounded-2xl border border-white/10 bg-card/80 backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300'
							>
								<div className='px-5 sm:px-6 pt-6 pb-4 border-b border-border/80'>
									<div className='flex items-start justify-between gap-3'>
										<div>
											<p className='text-xs font-semibold uppercase tracking-wider text-accent mb-1'>
												{t(loc.manager)}
											</p>
											<h3 className='font-heading font-bold text-foreground text-xl sm:text-2xl'>
												{t(shop.name)}
											</h3>
										</div>
										<div className='w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0'>
											<User size={20} className='text-primary' />
										</div>
									</div>
								</div>

								<div className='flex-1 px-5 sm:px-6 py-5 space-y-4'>
									<div>
										<p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5'>
											{t(c.phoneLabel)}
										</p>
										<a
											href={`tel:${shop.phoneTel}`}
											className='inline-flex items-center gap-2.5 text-lg sm:text-xl font-heading font-bold text-foreground hover:text-primary transition-colors'
										>
											<Phone size={18} className='text-accent shrink-0' />
											{shop.phone}
										</a>
									</div>

									<div className='flex items-start gap-3 text-sm text-muted-foreground'>
										<Clock size={16} className='text-primary shrink-0 mt-0.5' />
										<div>
											<p className='font-medium text-foreground'>{t(c.hoursLabel)}</p>
											<p>{t(loc.hours)}</p>
											<p className='text-xs mt-0.5 text-muted-foreground/80'>
												{t(loc.closed)}
											</p>
										</div>
									</div>

									<div className='flex items-start gap-3 text-sm text-muted-foreground'>
										<MapPin size={16} className='text-primary shrink-0 mt-0.5' />
										<div>
											<p className='font-medium text-foreground mb-0.5'>
												{t(c.addressLabel)}
											</p>
											<p className='leading-relaxed'>{t(shop.address)}</p>
										</div>
									</div>
								</div>

								<div className='px-5 sm:px-6 pb-6 pt-1 grid grid-cols-1 sm:grid-cols-3 gap-2'>
									<a
										href={`tel:${shop.phoneTel}`}
										className='inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity'
									>
										<Phone size={14} />
										{t(c.callBranch)}
									</a>
									<a
										href={waUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-whatsapp text-whatsapp-foreground text-xs font-semibold hover:opacity-90 transition-opacity'
									>
										<MessageCircle size={14} />
										{t(c.whatsapp)}
									</a>
									<a
										href={shop.directionsUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-muted text-foreground text-xs font-semibold hover:bg-muted/80 transition-colors'
									>
										<ExternalLink size={14} />
										{t(c.directions)}
									</a>
								</div>
							</article>
						);
					})}
				</div>

				<div className='mt-10 md:mt-14 max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 rounded-2xl border border-border bg-muted/40 px-5 py-5 sm:px-8'>
					<div className='flex-1 min-w-0'>
						<p className='font-heading font-semibold text-foreground'>
							{t(c.centralWhatsApp)}
						</p>
						<a
							href={`mailto:${t(c.emailValue)}`}
							className='mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
						>
							<Mail size={14} className='shrink-0' />
							{t(c.emailValue)}
						</a>
					</div>
					<a
						href={CENTRAL_WHATSAPP}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold hover:opacity-90 transition-opacity shrink-0'
					>
						<MessageCircle size={18} />
						{t(c.centralWhatsAppCta)}
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
