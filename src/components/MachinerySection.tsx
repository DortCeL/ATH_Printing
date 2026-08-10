import {
	Printer,
	ScanLine,
	Layers,
	FileText,
	Copy,
	Package,
	Cpu,
	Zap,
	type LucideIcon,
} from "lucide-react";
import machineryImg from "@/assets/machinery-plotter.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons: LucideIcon[] = [Printer, ScanLine, Layers, FileText, Copy, Package];
const extraIcons: LucideIcon[] = [Cpu, Zap];

const cardThemes = [
	{
		shell: "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20",
		icon: "bg-white/20 text-white",
		count: "text-white",
		tag: "text-primary-foreground/75",
	},
	{
		shell: "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/25",
		icon: "bg-white/25 text-white",
		count: "text-white",
		tag: "text-accent-foreground/80",
	},
	{
		shell: "bg-[#1a6f8b] text-white border-[#1a6f8b] shadow-md shadow-[#1a6f8b]/25",
		icon: "bg-white/20 text-white",
		count: "text-[#ffb35c]",
		tag: "text-white/75",
	},
	{
		shell: "bg-[#e8a54b] text-[#1a1208] border-[#e8a54b] shadow-md shadow-[#e8a54b]/25",
		icon: "bg-[#1a1208]/10 text-[#1a1208]",
		count: "text-[#1a1208]",
		tag: "text-[#1a1208]/70",
	},
	{
		shell: "bg-[#2d5a87] text-white border-[#2d5a87] shadow-md shadow-[#2d5a87]/25",
		icon: "bg-white/20 text-white",
		count: "text-[#ffb35c]",
		tag: "text-white/75",
	},
];

const MachinerySection = () => {
	const { t } = useLanguage();
	const m = translations.machinery;
	const [featured, ...rest] = m.machines;

	return (
		<section id='machinery' className='relative py-16 sm:py-20 md:py-28 overflow-hidden bg-surface-warm'>
			<div className='container relative'>
				<div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14'>
					<div>
						<p className='text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-2'>
							{t(m.badge)}
						</p>
						<h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
							{t(m.heading)}
						</h2>
					</div>
					<p className='text-muted-foreground text-sm sm:text-base max-w-xs sm:text-right'>
						{t(m.aside)}
					</p>
				</div>

				{/* Featured fleet highlight + photo */}
				<div className='grid lg:grid-cols-5 gap-4 sm:gap-5 mb-4 sm:mb-5'>
					<div className='lg:col-span-3 group relative rounded-2xl sm:rounded-3xl bg-foreground text-primary-foreground overflow-hidden min-h-[220px] sm:min-h-[280px] flex flex-col justify-between p-6 sm:p-8 md:p-10'>
						<div
							className='absolute inset-0 opacity-[0.08]'
							aria-hidden
							style={{
								backgroundImage:
									"linear-gradient(135deg, transparent 30%, hsl(217 72% 55%) 100%)",
							}}
						/>
						<div className='relative flex items-start justify-between gap-4'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform duration-300'>
								<Printer size={26} className='text-accent-foreground' />
							</div>
							<span className='font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-none text-accent tracking-tight'>
								{featured.count}
							</span>
						</div>
						<div className='relative mt-8 sm:mt-10'>
							<h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight'>
								{t(featured.name)}
							</h3>
							<p className='mt-2 text-sm sm:text-base text-primary-foreground/60 tracking-wide'>
								{t(featured.tag)}
							</p>
						</div>
					</div>

					<div className='lg:col-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[200px] sm:min-h-[280px]'>
						<img
							src={machineryImg}
							alt={t(m.imageAlt)}
							className='absolute inset-0 w-full h-full object-cover'
							loading='lazy'
							width={1280}
							height={896}
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent' />
					</div>
				</div>

				{/* Machine counts — colorful grid */}
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5'>
					{rest.map((machine, i) => {
						const Icon = icons[i + 1];
						const theme = cardThemes[i % cardThemes.length];
						return (
							<div
								key={i}
								className={`group flex flex-col justify-between min-h-[130px] sm:min-h-[150px] p-4 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:brightness-110 ${theme.shell}`}
							>
								<div className='flex items-start justify-between gap-2'>
									<div
										className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${theme.icon}`}
									>
										<Icon size={18} />
									</div>
									<span
										className={`font-display text-3xl sm:text-4xl font-bold leading-none ${theme.count}`}
									>
										{machine.count}
									</span>
								</div>
								<div className='mt-4'>
									<h3 className='font-heading font-bold text-sm sm:text-base leading-snug'>
										{t(machine.name)}
									</h3>
									<p className={`mt-1 text-[11px] sm:text-xs ${theme.tag}`}>
										{t(machine.tag)}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Extras strip */}
				<div className='flex flex-wrap gap-3 mb-10 md:mb-14'>
					{m.extras.map((extra, i) => {
						const Icon = extraIcons[i];
						const colored =
							i === 0
								? "bg-primary/10 border-primary/25 text-foreground"
								: "bg-accent/15 border-accent/30 text-foreground";
						return (
							<div
								key={i}
								className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border ${colored}`}
							>
								<Icon size={16} className={i === 1 ? "text-accent" : "text-primary"} />
								<span className='font-display text-xl font-bold leading-none'>
									{extra.count}
								</span>
								<span className='text-sm text-muted-foreground'>{t(extra.label)}</span>
							</div>
						);
					})}
				</div>

				{/* Daily capacity — number-forward */}
				<div className='rounded-2xl sm:rounded-3xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-10 overflow-hidden relative'>
					<div
						className='absolute inset-0 opacity-10'
						aria-hidden
						style={{
							backgroundImage:
								"radial-gradient(circle at 90% 10%, white, transparent 40%)",
						}}
					/>
					<div className='relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8'>
						<h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>
							{t(m.capacityHeading)}
						</h3>
						<span className='text-primary-foreground/55 text-sm uppercase tracking-[0.15em]'>
							{t(m.capacityUnit)}
						</span>
					</div>
					<div className='relative grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6'>
						{m.capacity.map((c) => (
							<div key={c.size} className='text-center sm:text-left'>
								<div className='font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none'>
									{c.value}
								</div>
								<div className='mt-2 text-xs sm:text-sm font-semibold text-primary-foreground/65 uppercase tracking-wider'>
									{c.size}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MachinerySection;
