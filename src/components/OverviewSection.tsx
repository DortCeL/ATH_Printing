import {
	Award,
	Printer,
	Users,
	Building2,
	Check,
} from "lucide-react";
import overviewImg from "@/assets/overview-facility.jpg";
import abbu from "@/assets/abbu.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import ProprietorCard from "./ProprietorCard";
import Reveal from "./Reveal";

const OverviewSection = () => {
	const { t } = useLanguage();
	const o = translations.overview;

	const stats = [
		{ icon: Award, value: "30+", label: t(o.stats.years) },
		{ icon: Printer, value: "45,000+", label: t(o.stats.dailyCapacity) },
		{ icon: Users, value: "15", label: t(o.stats.team) },
		{ icon: Building2, value: "3", label: t(o.stats.branches) },
	];

	return (
		<section id='overview' className='py-16 sm:py-20 md:py-28 bg-background'>
			<Reveal variant='fade' className='text-center mb-8 sm:mb-10 px-4'>
				<p className='text-accent font-semibold text-sm sm:text-base uppercase tracking-wider'>
					{t(o.badge)}
				</p>
			</Reveal>
			<div className='container'>
				<div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
					<Reveal variant='left' className='min-w-0'>
						<ProprietorCard image={abbu} alt={t(o.imageAlt)} className='mb-8' />

						<div>
							<h2 className='text-3xl md:text-5xl font-heading font-bold text-foreground mb-6'>
								{t(o.heading)}
							</h2>
							<p className='text-muted-foreground text-lg mb-4'>{t(o.para1)}</p>
							<p className='text-muted-foreground mb-8'>{t(o.para2)}</p>
							<ul className='grid sm:grid-cols-2 gap-3'>
								{o.points.map((point, i) => (
									<li
										key={i}
										className='flex items-start gap-2 text-sm text-foreground'
									>
										<Check
											size={18}
											className='text-whatsapp shrink-0 mt-0.5'
										/>
										{t(point)}
									</li>
								))}
							</ul>
						</div>
					</Reveal>

					<div className='space-y-6'>
						<Reveal variant='right' delay={120}>
							<div className='rounded-3xl overflow-hidden shadow-lg'>
								<img
									src={overviewImg}
									alt={t(o.imageAlt)}
									className='w-full aspect-[4/3] object-cover'
									loading='lazy'
									width={1280}
									height={960}
								/>
							</div>
						</Reveal>
						<div className='grid grid-cols-2 gap-4'>
							{stats.map((stat, i) => (
								<Reveal key={i} variant='scale' delay={180 + i * 90}>
									<div className='bg-card border border-white/10 rounded-2xl p-5 text-center shadow-lg shadow-black/20'>
										<stat.icon size={22} className='text-primary mx-auto mb-2' />
										<div className='text-2xl md:text-3xl font-heading font-bold text-foreground'>
											{stat.value}
										</div>
										<div className='text-xs text-muted-foreground mt-1'>
											{stat.label}
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OverviewSection;
