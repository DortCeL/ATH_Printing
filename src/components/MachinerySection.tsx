import { Cpu, Zap, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const extraIcons: LucideIcon[] = [Cpu, Zap];

const MachinerySection = () => {
	const { t } = useLanguage();
	const m = translations.machinery;

	return (
		<section id='machinery' className='relative py-16 sm:py-20 md:py-28 overflow-hidden bg-surface-warm'>
			<div className='container relative'>
				<div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12'>
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

				{/* Machine inventory table */}
				<div className='rounded-2xl sm:rounded-3xl overflow-hidden border border-foreground/10 shadow-xl shadow-black/10 mb-6 sm:mb-8'>
					<div className='overflow-x-auto'>
						<table className='w-full min-w-[520px] border-collapse text-left'>
							<thead>
								<tr className='bg-surface-deep text-foreground'>
									<th className='px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
										{t(m.table.equipment)}
									</th>
									<th className='px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-accent text-center w-[100px] sm:w-[140px]'>
										{t(m.table.qty)}
									</th>
									<th className='px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
										{t(m.table.spec)}
									</th>
								</tr>
							</thead>
							<tbody>
								{m.machines.map((machine, i) => {
									const featured = Boolean(machine.featured);
									return (
										<tr
											key={i}
											className={`group border-t border-white/5 transition-colors ${
												featured
													? "bg-primary text-primary-foreground"
													: i % 2 === 0
														? "bg-[#121826] text-white"
														: "bg-[#1a2233] text-white"
											} hover:bg-accent hover:text-accent-foreground`}
										>
											<td className='px-4 sm:px-6 py-4 sm:py-5'>
												<span className='font-heading font-bold text-base sm:text-xl md:text-2xl leading-tight'>
													{t(machine.name)}
												</span>
											</td>
											<td className='px-4 sm:px-6 py-4 sm:py-5 text-center'>
												<span
													className={`font-display font-bold leading-none tracking-tight text-accent group-hover:text-accent-foreground ${
														featured
															? "text-4xl sm:text-5xl md:text-6xl"
															: "text-3xl sm:text-4xl md:text-5xl"
													}`}
												>
													{machine.count}
												</span>
											</td>
											<td className='px-4 sm:px-6 py-4 sm:py-5'>
												<span className='text-sm sm:text-base text-white/60 group-hover:text-accent-foreground/80'>
													{t(machine.tag)}
												</span>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
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

				{/* Daily capacity — compact, high-visibility */}
				<div className='rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] via-background to-primary/[0.08] p-4 sm:p-5 md:p-6'>
					<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-5'>
						<h3 className='font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight'>
							{t(m.capacityHeading)}
						</h3>
						<span className='inline-flex self-start sm:self-auto items-center px-2.5 py-1 rounded-full bg-surface-deep text-foreground border border-white/10 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]'>
							{t(m.capacityUnit)}
						</span>
					</div>

					<div className='grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3'>
						{m.capacity.map((c) => (
							<div
								key={c.size}
								className='rounded-xl bg-card border border-border shadow-sm px-2.5 py-3 sm:px-3 sm:py-3.5 text-center'
							>
								<div className='inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold tracking-wide mb-2'>
									{c.size}
								</div>
								<div className='font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none tracking-tight'>
									{c.value}
								</div>
								<div className='mt-1 text-[10px] sm:text-xs font-medium text-muted-foreground'>
									{t(m.capacityUnit)}
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
