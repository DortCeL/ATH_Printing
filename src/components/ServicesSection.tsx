import { Map, Printer, Copy, Palette, BookOpen, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Reveal, { type RevealVariant } from "./Reveal";

const icons: LucideIcon[] = [Map, Printer, Copy, Palette, BookOpen];

const accents = [
	{
		iconWrap: "bg-accent/20 text-accent border-accent/35",
		bar: "bg-accent",
		num: "text-accent",
	},
	{
		iconWrap: "bg-primary/20 text-primary border-primary/35",
		bar: "bg-primary",
		num: "text-primary",
	},
	{
		iconWrap: "bg-sky-500/20 text-sky-400 border-sky-500/35",
		bar: "bg-sky-400",
		num: "text-sky-400",
	},
	{
		iconWrap: "bg-emerald-500/20 text-emerald-400 border-emerald-500/35",
		bar: "bg-emerald-400",
		num: "text-emerald-400",
	},
	{
		iconWrap: "bg-violet-500/20 text-violet-400 border-violet-500/35",
		bar: "bg-violet-400",
		num: "text-violet-400",
	},
];

const cardVariants: RevealVariant[] = ["left", "up", "right", "up", "scale"];

const ServicesSection = () => {
	const { t } = useLanguage();
	const s = translations.services;

	return (
		<section id='services' className='relative py-16 sm:py-20 md:py-28 overflow-hidden bg-surface-blue'>
			<div
				className='pointer-events-none absolute inset-0'
				aria-hidden
				style={{
					background:
						"radial-gradient(ellipse 70% 50% at 10% 0%, hsl(217 72% 48% / 0.1), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, hsl(25 95% 55% / 0.08), transparent)",
				}}
			/>

			<div className='container relative'>
				<Reveal variant='fade' className='text-center max-w-2xl mx-auto mb-10 md:mb-16'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(s.badge)}
					</p>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4'>
						{t(s.heading)}
					</h2>
					<p className='text-muted-foreground text-base sm:text-lg'>{t(s.aside)}</p>
				</Reveal>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto'>
					{s.items.map((item, i) => {
						const Icon = icons[i];
						const accent = accents[i % accents.length];
						const num = String(i + 1).padStart(2, "0");
						const featured = Boolean("featured" in item && item.featured);

						return (
							<Reveal
								key={i}
								variant={cardVariants[i % cardVariants.length]}
								delay={i * 90}
							>
								<article className='relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/90 p-6 sm:p-7 shadow-lg shadow-black/20 transition-colors hover:border-white/20'>
									<span
										className={`absolute left-0 top-0 bottom-0 w-1 ${accent.bar}`}
										aria-hidden
									/>

									<div className='flex items-start justify-between gap-3 mb-5'>
										<div
											className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accent.iconWrap}`}
										>
											<Icon size={22} />
										</div>
										<span
											className={`font-display text-3xl font-bold leading-none tabular-nums ${accent.num} opacity-80`}
										>
											{num}
										</span>
									</div>

									{featured && (
										<p className='mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-accent'>
											{t(s.featuredLabel)}
										</p>
									)}

									<h3 className='font-heading font-bold text-lg sm:text-xl text-foreground leading-snug mb-2'>
										{t(item.title)}
									</h3>
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{t(item.tag)}
									</p>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
