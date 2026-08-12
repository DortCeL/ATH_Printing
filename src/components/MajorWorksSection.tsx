import { Calendar, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const MajorWorksSection = () => {
	const { t } = useLanguage();
	const w = translations.works;
	const [featured, ...rest] = w.items;

	return (
		<section id='works' className='py-20 md:py-28 bg-surface-deep text-foreground'>
			<div className='container'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(w.badge)}
					</p>
					<h2 className='text-3xl md:text-5xl font-heading font-bold mb-4'>
						{t(w.heading)}
					</h2>
					<p className='text-muted-foreground text-lg'>{t(w.subtitle)}</p>
				</div>

				{/* Featured — client first */}
				<div className='rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 mb-6 flex flex-col md:flex-row md:items-center gap-8'>
					<div className='shrink-0'>
						<div className='text-6xl md:text-8xl font-heading font-bold text-accent leading-none'>
							{t(featured.quantity)}
						</div>
						<div className='text-muted-foreground uppercase tracking-widest text-sm mt-2'>
							{t(w.copies)}
						</div>
					</div>
					<div className='h-px md:h-28 md:w-px bg-white/10' />
					<div className='space-y-3 min-w-0'>
						<h3 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground'>
							{t(featured.client)}
						</h3>
						<p className='text-base sm:text-lg text-muted-foreground leading-snug'>
							{t(featured.title)}
						</p>
						<div className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-1'>
							<span className='inline-flex items-center gap-2'>
								<Calendar size={16} className='text-accent' />
								{t(featured.year)}
							</span>
							<span className='inline-flex items-center gap-2'>
								<FileText size={16} className='text-accent' />
								{t(featured.note)}
							</span>
						</div>
					</div>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{rest.map((item, i) => (
						<div
							key={i}
							className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors flex flex-col'
						>
							<div className='text-4xl font-heading font-bold text-accent'>
								{t(item.quantity)}
							</div>
							<div className='text-muted-foreground uppercase tracking-widest text-[10px] mt-1 mb-5'>
								{t(w.copies)}
							</div>

							<h3 className='font-heading font-bold text-lg sm:text-xl leading-snug text-foreground mb-2'>
								{t(item.client)}
							</h3>
							<p className='text-sm text-muted-foreground leading-snug mb-4'>
								{t(item.title)}
							</p>

							<div className='mt-auto space-y-1.5 text-xs text-muted-foreground/80'>
								<div className='flex items-center gap-2'>
									<Calendar size={13} className='text-accent shrink-0' />
									{t(item.year)}
								</div>
								<div className='flex items-center gap-2'>
									<FileText size={13} className='text-accent shrink-0' />
									{t(item.note)}
								</div>
							</div>
						</div>
					))}
				</div>

				<p className='text-center mt-12 text-lg font-heading font-semibold text-muted-foreground'>
					<span className='text-accent'>{t(w.bannerTotal)}</span> {t(w.banner)}
				</p>
			</div>
		</section>
	);
};

export default MajorWorksSection;
