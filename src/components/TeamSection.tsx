import { useState } from "react";
import { User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Reveal from "./Reveal";

import anwarImg from "@/assets/employees/MD Anwar Hossain.jpg";
import sudevImg from "@/assets/employees/Shudev Mitro Shuvo.jpg";
import habibImg from "@/assets/employees/Habib Hussain.jpg";
import shiponImg from "@/assets/employees/Shipon Kumar.jpg";
import biplobImg from "@/assets/employees/Biplob Mitro.jpg";
import rahimImg from "@/assets/employees/Abdur Rahim.jpg";

type BranchId = "mirpur" | "farmgate" | "mohakhali";
type RoleKey = keyof typeof translations.team.roles;

type TeamMember = {
	id: string;
	/** Display name — leave as-is for real staff; edit placeholders anytime */
	name: { en: string; bn: string };
	role: RoleKey;
	/** Pass imported image, or null for placeholder photo */
	image: string | null;
};

/** Shown first on every branch tab */
const headOfOperations: TeamMember = {
	id: "head-anwar",
	name: { en: "MD Anwar Hossain", bn: "মোঃ আনোয়ার হোসেন" },
	role: "headOfOperations",
	image: anwarImg,
};

/**
 * Edit this object to add/update staff.
 * For Farmgate / Mohakhali: replace name, role, and set `image` to an import.
 * Head of Operations is shared across all branches automatically.
 */
const branchStaff: Record<BranchId, TeamMember[]> = {
	mirpur: [
		{
			id: "mirpur-sudev",
			name: { en: "Sudev Mitro Shuvo", bn: "সুদেব মিত্র শুভ" },
			role: "branchManager",
			image: sudevImg,
		},
		{
			id: "mirpur-habib",
			name: { en: "Habib Hussain", bn: "হাবিব হুসাইন" },
			role: "seniorExecutive",
			image: habibImg,
		},
		{
			id: "mirpur-biplob",
			name: { en: "Biplob Mitro", bn: "বিপ্লব মিত্র" },
			role: "seniorExecutive",
			image: biplobImg,
		},
		{
			id: "mirpur-shipon",
			name: { en: "Shipon Kumar", bn: "শিপন কুমার" },
			role: "juniorExecutive",
			image: shiponImg,
		},
		{
			id: "mirpur-rahim",
			name: { en: "Abdur Rahim", bn: "আব্দুর রহিম" },
			role: "assistantExecutive",
			image: rahimImg,
		},
	],

	// TODO: replace placeholders when Farmgate staff photos/names are ready
	farmgate: [
		{
			id: "farmgate-1",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "branchManager",
			image: null,
		},
		{
			id: "farmgate-2",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "seniorExecutive",
			image: null,
		},
		{
			id: "farmgate-3",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "juniorExecutive",
			image: null,
		},
	],

	// TODO: replace placeholders when Mohakhali staff photos/names are ready
	mohakhali: [
		{
			id: "mohakhali-1",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "branchManager",
			image: null,
		},
		{
			id: "mohakhali-2",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "seniorExecutive",
			image: null,
		},
		{
			id: "mohakhali-3",
			name: { en: "Team member", bn: "টিম সদস্য" },
			role: "juniorExecutive",
			image: null,
		},
	],
};

const branchOrder: BranchId[] = ["mirpur", "farmgate", "mohakhali"];

const MemberCard = ({
	member,
	t,
}: {
	member: TeamMember;
	t: (obj: Record<string, string>) => string;
}) => {
	const roleLabel = t(translations.team.roles[member.role]);
	const isPlaceholder = !member.image;

	return (
		<article className='group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-card/80 shadow-lg shadow-black/20 transition-colors hover:border-accent/40'>
			<div className='relative aspect-[4/5] bg-muted overflow-hidden'>
				{member.image ? (
					<img
						src={member.image}
						alt={t(member.name)}
						className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
						loading='lazy'
					/>
				) : (
					<div className='absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary to-muted'>
						<div className='flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5'>
							<User size={28} className='text-muted-foreground' />
						</div>
						<p className='text-xs font-medium text-muted-foreground'>
							{t(translations.team.comingSoon)}
						</p>
					</div>
				)}
				<div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent' />
			</div>

			<div className='flex flex-1 flex-col p-4 sm:p-5'>
				<h3
					className={`font-heading font-bold text-base sm:text-lg text-foreground leading-snug ${
						isPlaceholder ? "text-muted-foreground" : ""
					}`}
				>
					{t(member.name)}
				</h3>
				<p className='mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-accent'>
					{roleLabel}
				</p>
			</div>
		</article>
	);
};

const TeamSection = () => {
	const { t } = useLanguage();
	const team = translations.team;
	const [branch, setBranch] = useState<BranchId>("mirpur");
	const members = [headOfOperations, ...branchStaff[branch]];

	return (
		<section id='team' className='relative py-16 sm:py-20 md:py-28 bg-background overflow-hidden'>
			<div
				className='pointer-events-none absolute inset-0 opacity-40'
				aria-hidden
				style={{
					background:
						"radial-gradient(ellipse 55% 40% at 80% 0%, hsl(25 95% 55% / 0.1), transparent), radial-gradient(ellipse 45% 35% at 0% 100%, hsl(217 72% 48% / 0.12), transparent)",
				}}
			/>

			<div className='container relative'>
				<Reveal variant='fade' className='text-center max-w-2xl mx-auto mb-8 md:mb-12'>
					<p className='text-accent font-semibold text-sm uppercase tracking-wider mb-3'>
						{t(team.badge)}
					</p>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4'>
						{t(team.heading)}
					</h2>
					<p className='text-muted-foreground text-base sm:text-lg'>{t(team.subtitle)}</p>
				</Reveal>

				<Reveal variant='up' delay={80} className='flex justify-center mb-8 md:mb-12'>
					<div
						role='tablist'
						aria-label={t(team.badge)}
						className='inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-card border border-white/10 shadow-lg shadow-black/20'
					>
						{branchOrder.map((id) => {
							const active = branch === id;
							return (
								<button
									key={id}
									type='button'
									role='tab'
									aria-selected={active}
									onClick={() => setBranch(id)}
									className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
										active
											? "bg-accent text-accent-foreground shadow-md shadow-accent/30"
											: "text-muted-foreground hover:text-foreground hover:bg-white/5"
									}`}
								>
									{t(team.branches[id])}
								</button>
							);
						})}
					</div>
				</Reveal>

				<div
					key={branch}
					className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto'
				>
					{members.map((member, i) => (
						<Reveal key={`${branch}-${member.id}`} variant='up' delay={60 + i * 70}>
							<MemberCard member={member} t={t} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
