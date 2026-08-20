import { Cpu, Zap, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Reveal from "./Reveal";

const extraIcons: LucideIcon[] = [Cpu, Zap];

const MachinerySection = () => {
	const { t } = useLanguage();
	const m = translations.machinery;

	return (
		<section id='machinery' className='relative py-12 sm:py-16 md:py-20 overflow-hidden bg-surface-warm'>
			<div className='container relative'>
				<Reveal variant='fade' className='text-center max-w-2xl mx-auto mb-6 md:mb-8'>
					<p className='text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-1.5'>
						{t(m.badge)}
					</p>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
						{t(m.heading)}
					</h2>
				</Reveal>

				<Reveal variant='up' delay={80} duration={700} className='mx-auto max-w-xl mb-4 sm:mb-5'>
					<div className='rounded-xl sm:rounded-2xl overflow-hidden border border-foreground/10 shadow-lg shadow-black/10'>
						<table className='w-full border-collapse text-left'>
							<thead>
								<tr className='bg-surface-deep text-foreground'>
									<th className='px-4 sm:px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>
										{t(m.table.equipment)}
									</th>
									<th className='px-4 sm:px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent text-right w-[88px] sm:w-[110px]'>
										{t(m.table.qty)}
									</th>
								</tr>
							</thead>
							<tbody>
								{m.machines.map((machine, i) => (
									<tr
										key={i}
										className={`group border-t border-white/5 transition-colors ${
											i % 2 === 0 ? "bg-[#121826] text-white" : "bg-[#1a2233] text-white"
										} hover:bg-accent hover:text-accent-foreground`}
									>
										<td className='px-4 sm:px-5 py-3 sm:py-3.5'>
											<span className='font-heading font-bold text-sm sm:text-base md:text-lg leading-tight'>
												{t(machine.name)}
											</span>
										</td>
										<td className='px-4 sm:px-5 py-3 sm:py-3.5 text-right'>
											<span className='font-display text-2xl sm:text-3xl font-bold leading-none tracking-tight text-accent group-hover:text-accent-foreground'>
												{machine.count}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Reveal>

				<div className='flex flex-wrap justify-center gap-2 mb-6 md:mb-8'>
					{m.extras.map((extra, i) => {
						const Icon = extraIcons[i];
						const colored =
							i === 0
								? "bg-primary/10 border-primary/25 text-foreground"
								: "bg-accent/15 border-accent/30 text-foreground";
						return (
							<Reveal key={i} variant='up' delay={100 + i * 100}>
								<div
									className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border ${colored}`}
								>
									<Icon size={14} className={i === 1 ? "text-accent" : "text-primary"} />
									<span className='font-display text-lg font-bold leading-none'>
										{extra.count}
									</span>
									<span className='text-xs sm:text-sm text-muted-foreground'>
										{t(extra.label)}
									</span>
								</div>
							</Reveal>
						);
					})}
				</div>

				<Reveal variant='scale' delay={60} className='mx-auto max-w-xl'>
					<div className='rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] via-background to-primary/[0.08] p-3.5 sm:p-4 md:p-5'>
						<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4'>
							<h3 className='font-heading text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight'>
								{t(m.capacityHeading)}
							</h3>
							<span className='inline-flex self-start sm:self-auto items-center px-2 py-0.5 rounded-full bg-surface-deep text-foreground border border-white/10 text-[10px] font-semibold uppercase tracking-[0.12em]'>
								{t(m.capacityUnit)}
							</span>
						</div>

						<div className='grid grid-cols-3 sm:grid-cols-6 gap-2'>
							{m.capacity.map((c, i) => (
								<Reveal key={c.size} variant='up' delay={60 + i * 50}>
									<div className='rounded-lg bg-card border border-border px-2 py-2.5 sm:py-3 text-center'>
										<div className='inline-flex items-center justify-center min-w-[2rem] px-1.5 py-0.5 rounded bg-accent text-accent-foreground text-[10px] font-bold tracking-wide mb-1.5'>
											{c.size}
										</div>
										<div className='font-display text-xl sm:text-2xl font-bold text-foreground leading-none tracking-tight'>
											{c.value}
										</div>
										<div className='mt-0.5 text-[10px] font-medium text-muted-foreground'>
											{t(m.capacityUnit)}
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default MachinerySection;
