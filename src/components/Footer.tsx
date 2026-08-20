import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Reveal from "./Reveal";

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const formatPhoneDisplay = (raw: string) => {
	const digits = raw.replace(/\D/g, "");
	if (digits.length === 11) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
	return raw;
};

const toTelHref = (raw: string) => `tel:+88${raw.replace(/\D/g, "")}`;

const exploreLinks = [
	{ key: "overview" as const, href: "#overview" },
	{ key: "services" as const, href: "#services" },
	{ key: "works" as const, href: "#works" },
	{ key: "machinery" as const, href: "#machinery" },
	{ key: "locations" as const, href: "#locations" },
	{ key: "team" as const, href: "#team" },
	{ key: "contact" as const, href: "#contact" },
];

const Footer = () => {
	const { t } = useLanguage();
	const f = translations.footer;
	const loc = translations.locations;
	const phones = translations.hero.proprietor_phone_numbers;

	return (
		<footer className='bg-[#070b14] text-white'>
			<div className='container py-14 sm:py-16 md:py-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8'>
					<Reveal variant='up' className='xl:col-span-4'>
						<a href='#' className='inline-block'>
							<span className='font-display text-5xl sm:text-6xl font-bold tracking-tight text-white'>
								ATH
							</span>
						</a>
						<p className='mt-2 font-heading text-lg sm:text-xl font-semibold text-red-500'>
							AutoCAD Training Home
						</p>
						<p className='mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-sm'>
							{t(f.tagline)}
						</p>

						<a
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold hover:opacity-90 transition-opacity'
						>
							<MessageCircle size={18} />
							{t(f.whatsappCta)}
						</a>
					</Reveal>

					<Reveal variant='up' delay={80} className='xl:col-span-2'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5'>
							{t(f.explore)}
						</h3>
						<ul className='space-y-3'>
							{exploreLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className='text-sm sm:text-base text-white/70 hover:text-white transition-colors'
									>
										{t(translations.nav[link.key])}
									</a>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal variant='up' delay={140} className='xl:col-span-3'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5'>
							{t(f.branches)}
						</h3>
						<ul className='space-y-5'>
							{loc.shops.map((shop, i) => (
								<li key={i}>
									<div className='flex items-start gap-2.5'>
										<MapPin size={15} className='text-accent shrink-0 mt-1' />
										<div>
											<a
												href='#locations'
												className='font-heading font-bold text-white hover:text-accent transition-colors'
											>
												{t(shop.name)}
											</a>
											<a
												href={`tel:${shop.phoneTel}`}
												className='mt-1 flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors'
											>
												<Phone size={12} />
												{shop.phone}
											</a>
										</div>
									</div>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal variant='up' delay={200} className='xl:col-span-3'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5'>
							{t(f.reachUs)}
						</h3>

						<div className='space-y-5'>
							<div>
								<p className='text-xs font-semibold uppercase tracking-wider text-white/40 mb-2'>
									{t(f.ceoPhones)}
								</p>
								<div className='space-y-2'>
									{phones.map((phone) => (
										<a
											key={phone}
											href={toTelHref(phone)}
											className='flex items-center gap-2 text-base font-heading font-semibold text-white hover:text-accent transition-colors'
										>
											<Phone size={15} className='text-accent shrink-0' />
											{formatPhoneDisplay(phone)}
										</a>
									))}
								</div>
							</div>

							<div className='flex items-start gap-2.5'>
								<Clock size={15} className='text-accent shrink-0 mt-0.5' />
								<div>
									<p className='text-xs font-semibold uppercase tracking-wider text-white/40 mb-1'>
										{t(f.hours)}
									</p>
									<p className='text-sm text-white/80'>{t(f.hoursValue)}</p>
									<p className='text-xs text-white/45 mt-0.5'>{t(f.closed)}</p>
								</div>
							</div>

							<a
								href={`mailto:${t(translations.contact.emailValue)}`}
								className='flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors'
							>
								<Mail size={15} className='text-accent shrink-0' />
								{t(translations.contact.emailValue)}
							</a>
						</div>
					</Reveal>
				</div>
			</div>

			<div className='border-t border-white/10'>
				<div className='container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left'>
					<p className='text-xs sm:text-sm text-white/45'>
						© {new Date().getFullYear()} ATH — AutoCAD Training Home. {t(f.rights)}
					</p>
					<p className='text-xs text-white/35'>{t(f.branchesLine)}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
