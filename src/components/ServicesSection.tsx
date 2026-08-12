import { Map, Printer, Copy, Palette, BookOpen, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons: LucideIcon[] = [Map, Printer, Copy, Palette, BookOpen];

const cardThemes = [
	{
		shell: "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20",
		icon: "bg-white/20 text-white",
		num: "text-white/25",
		tag: "text-primary-foreground/75",
	},
	{
		shell: "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/25",
		icon: "bg-white/25 text-white",
		num: "text-white/30",
		tag: "text-accent-foreground/80",
	},
	{
		shell: "bg-[#1a6f8b] text-white border-[#1a6f8b] shadow-md shadow-[#1a6f8b]/25",
		icon: "bg-white/20 text-white",
		num: "text-white/25",
		tag: "text-white/75",
	},
	{
		shell: "bg-[#e8a54b] text-[#1a1208] border-[#e8a54b] shadow-md shadow-[#e8a54b]/25",
		icon: "bg-[#1a1208]/10 text-[#1a1208]",
		num: "text-[#1a1208]/20",
		tag: "text-[#1a1208]/70",
	},
];

const ServicesSection = () => {
	const { t } = useLanguage();
	const s = translations.services;
	const [featured, ...rest] = s.items;

	return (
		<section id='services' className='relative py-16 sm:py-20 md:py-28 overflow-hidden bg-surface-blue'>
			<div
				className='pointer-events-none absolute inset-0'
				aria-hidden
				style={{
					background:
						"radial-gradient(ellipse 70% 50% at 10% 0%, hsl(217 72% 48% / 0.08), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, hsl(25 95% 55% / 0.06), transparent)",
				}}
			/>

			<div className='container relative'>
				<div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14'>
					<div>
						<p className='text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-2'>
							{t(s.badge)}
						</p>
						<h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
							{t(s.heading)}
						</h2>
					</div>
					<p className='text-muted-foreground text-sm sm:text-base max-w-xs sm:text-right'>
						{t(s.aside)}
					</p>
				</div>

				{/* Featured — instant eye-catch */}
				<div className='group relative mb-4 sm:mb-5 rounded-2xl sm:rounded-3xl bg-surface-deep text-foreground overflow-hidden border border-white/10'>
					<div
						className='absolute inset-0 opacity-[0.12]'
						aria-hidden
						style={{
							backgroundImage:
								"linear-gradient(135deg, transparent 40%, hsl(25 95% 55%) 100%)",
						}}
					/>
					<div className='relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 sm:p-8 md:p-10'>
						<div className='flex items-center gap-4 md:flex-col md:items-start shrink-0'>
							<div className='w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform duration-300'>
								<Map size={30} className='text-accent-foreground' />
							</div>
							<span className='font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white/15 leading-none md:hidden'>
								01
							</span>
						</div>

						<div className='flex-1 min-w-0'>
							<p className='text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-2'>
								{t(s.featuredLabel)}
							</p>
							<h3 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight'>
								{t(featured.title)}
							</h3>
							<p className='mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground tracking-wide'>
								{t(featured.tag)}
							</p>
						</div>

						<span className='hidden md:block font-display text-[7rem] lg:text-[9rem] font-bold leading-none text-white/[0.06] select-none'>
							01
						</span>
					</div>
				</div>

				{/* Secondary services — colorful grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
					{rest.map((item, i) => {
						const Icon = icons[i + 1];
						const num = String(i + 2).padStart(2, "0");
						const theme = cardThemes[i % cardThemes.length];
						return (
							<div
								key={i}
								className={`group relative flex flex-col justify-between min-h-[140px] sm:min-h-[180px] p-4 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:brightness-110 ${theme.shell}`}
							>
								<div className='flex items-start justify-between gap-2'>
									<div
										className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${theme.icon}`}
									>
										<Icon size={22} />
									</div>
									<span
										className={`font-display text-2xl sm:text-3xl font-bold leading-none ${theme.num}`}
									>
										{num}
									</span>
								</div>

								<div className='mt-6 sm:mt-8'>
									<h3 className='font-heading font-bold text-sm sm:text-lg leading-snug'>
										{t(item.title)}
									</h3>
									<p className={`mt-1.5 text-[11px] sm:text-xs leading-relaxed ${theme.tag}`}>
										{t(item.tag)}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
