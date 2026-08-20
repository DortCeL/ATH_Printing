import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const navLinks = [
	{ key: "overview" as const, href: "#overview", id: "overview" },
	{ key: "services" as const, href: "#services", id: "services" },
	{ key: "works" as const, href: "#works", id: "works" },
	{ key: "machinery" as const, href: "#machinery", id: "machinery" },
	{ key: "locations" as const, href: "#locations", id: "locations" },
	{ key: "team" as const, href: "#team", id: "team" },
];

const WHATSAPP_URL =
	"https://wa.me/8801785600774?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const HINT_KEY = "ath-lang-hint-seen";

const shell =
	"w-full max-w-[90rem] mx-auto px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16";

const getNavOffset = () => (window.innerWidth < 768 ? 130 : 100);

const resolveActiveSection = (): string | null => {
	const offset = getNavOffset();
	let current: string | null = null;

	for (const link of navLinks) {
		const el = document.getElementById(link.id);
		if (!el) continue;
		if (el.getBoundingClientRect().top - offset <= 1) {
			current = link.id;
		}
	}

	return current;
};

const scrollToSection = (id: string) => {
	const el = document.getElementById(id);
	if (!el) return;
	const top = window.scrollY + el.getBoundingClientRect().top - getNavOffset();
	window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};

const Navbar = () => {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [showLangHint, setShowLangHint] = useState(false);
	const { lang, setLang, t } = useLanguage();
	const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
	const lockActiveRef = useRef(false);
	const unlockTimerRef = useRef<number | null>(null);

	useEffect(() => {
		const onScroll = () => {
			if (!lockActiveRef.current) {
				setActiveId(resolveActiveSection());
			}
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
		};
	}, []);

	useEffect(() => {
		try {
			if (localStorage.getItem(HINT_KEY)) return;
		} catch {
			/* ignore */
		}
		const timer = window.setTimeout(() => setShowLangHint(true), 900);
		return () => window.clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!activeId || window.innerWidth >= 768) return;
		const el = linkRefs.current[activeId];
		el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
	}, [activeId]);

	const dismissLangHint = () => {
		setShowLangHint(false);
		try {
			localStorage.setItem(HINT_KEY, "1");
		} catch {
			/* ignore */
		}
	};

	const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		setActiveId(id);
		lockActiveRef.current = true;
		scrollToSection(id);
		window.history.replaceState(null, "", `#${id}`);

		if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
		unlockTimerRef.current = window.setTimeout(() => {
			lockActiveRef.current = false;
			setActiveId(resolveActiveSection());
		}, 900);
	};

	const toggleLang = () => {
		dismissLangHint();
		setLang(lang === "en" ? "bn" : "en");
	};

	const langLabelShort = lang === "en" ? "বাং" : "En";
	const langLabelFull = lang === "en" ? "Bangla" : "English";

	const navLinkClass = (active: boolean) =>
		`px-3 md:px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
			active
				? "bg-[#1a1208] text-accent shadow-md shadow-black/25 scale-105"
				: "text-[#1a1208]/75 hover:text-[#1a1208] hover:bg-black/10"
		}`;

	const langButtonClass =
		"relative shrink-0 flex items-center gap-1.5 rounded-md font-semibold transition-colors";

	const langOnDark =
		"text-white/80 hover:text-white hover:bg-white/10";
	const langOnOrange =
		"text-[#1a1208]/80 hover:text-[#1a1208] hover:bg-black/10";

	return (
		<nav className='fixed top-0 inset-x-0 z-50 shadow-xl shadow-black/35 border-b border-black/30'>
			<div className='md:hidden'>
				<div className='bg-black border-b border-white/10'>
					<div className={shell}>
						<a
							href='mailto:ath_cad@yahoo.com?subject=ATH%20Printing%20Inquiry'
							className='block text-center text-xs font-medium tracking-wide text-white/90 hover:text-white py-1'
							aria-label='Email ath_cad@yahoo.com'
						>
							ath_cad@yahoo.com
						</a>
					</div>
				</div>

				<div className='bg-accent border-b border-black/10'>
					<div className={`${shell} flex items-center justify-between gap-3 py-1.5`}>
						<a
							href='#'
							className='font-heading font-bold text-sm leading-tight tracking-wide text-[#1a1208] truncate min-w-0'
						>
							AutoCAD Training Home
						</a>
						<div className='relative flex items-center gap-2'>
							{showLangHint && (
								<div
									id='lang-hint'
									role='status'
									className='max-w-[9.5rem] rounded-md bg-[#1a1208] text-accent px-2 py-1 text-[10px] leading-snug font-semibold shadow-md animate-fade-in-up'
								>
									{t(translations.nav.langHint)}
									<button
										type='button'
										onClick={dismissLangHint}
										className='ml-2 underline decoration-accent/50 underline-offset-2 opacity-80 hover:opacity-100'
									>
										OK
									</button>
								</div>
							)}
							<button
								onClick={toggleLang}
								className={`${langButtonClass} ${langOnOrange} px-2 py-1 text-xs ${
									showLangHint ? "ring-2 ring-[#1a1208]/40 bg-black/10" : ""
								}`}
								aria-label='Toggle language'
								aria-describedby={showLangHint ? "lang-hint" : undefined}
							>
								<Globe size={14} className={showLangHint ? "animate-pulse" : ""} />
								<span>{langLabelFull}</span>
							</button>
						</div>
					</div>
				</div>

				<div className='bg-accent'>
					<div className='overflow-x-auto scrollbar-none'>
						<div className='flex items-center gap-1.5 px-3 py-1.5 min-w-max'>
							{navLinks.map((link) => {
								const active = activeId === link.id;
								return (
									<a
										key={link.href}
										href={link.href}
										ref={(node) => {
											linkRefs.current[link.id] = node;
										}}
										onClick={(e) => handleNavClick(e, link.id)}
										aria-current={active ? "true" : undefined}
										className={navLinkClass(active)}
									>
										{t(translations.nav[link.key])}
									</a>
								);
							})}
							<a
								href={WHATSAPP_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='ml-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1a1208] text-accent whitespace-nowrap hover:bg-black transition-colors'
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='hidden md:block'>
				<div className='bg-black border-b border-white/10'>
					<div className={`${shell} relative flex items-center justify-center py-1 md:py-1.5`}>
						<a
							href='mailto:ath_cad@yahoo.com?subject=ATH%20Printing%20Inquiry'
							className='text-sm lg:text-[0.95rem] font-medium tracking-wide text-white/90 hover:text-white transition-colors'
							aria-label='Email ath_cad@yahoo.com'
						>
							ath_cad@yahoo.com
						</a>
						<div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2'>
							{showLangHint && (
								<div
									id='lang-hint-desktop'
									role='status'
									className='rounded-md bg-accent text-accent-foreground px-2.5 py-1 text-xs font-semibold shadow-md whitespace-nowrap animate-fade-in-up'
								>
									{t(translations.nav.langHint)}
									<button
										type='button'
										onClick={dismissLangHint}
										className='ml-1.5 underline decoration-accent-foreground/50 underline-offset-2 opacity-80 hover:opacity-100'
									>
										OK
									</button>
								</div>
							)}
							<button
								onClick={toggleLang}
								className={`${langButtonClass} ${langOnDark} px-2.5 lg:px-3 py-1 text-sm ${
									showLangHint ? "ring-2 ring-accent/70 text-white bg-white/10" : ""
								}`}
								aria-label='Toggle language'
								aria-describedby={showLangHint ? "lang-hint-desktop" : undefined}
							>
								<Globe size={14} className={showLangHint ? "animate-pulse" : ""} />
								<span>{langLabelShort}</span>
							</button>
						</div>
					</div>
				</div>

				<div className='bg-accent'>
					<div className={`${shell} flex items-center justify-between gap-4 lg:gap-8 py-1.5 md:py-2`}>
						<a
							href='#'
							className='font-heading font-bold text-base lg:text-xl xl:text-2xl leading-tight tracking-wide text-[#1a1208] shrink-0'
						>
							AutoCAD Training Home
						</a>
						<div className='flex items-center gap-1.5 lg:gap-2 flex-wrap justify-end'>
							{navLinks.map((link) => {
								const active = activeId === link.id;
								return (
									<a
										key={link.href}
										href={link.href}
										onClick={(e) => handleNavClick(e, link.id)}
										aria-current={active ? "true" : undefined}
										className={navLinkClass(active)}
									>
										{t(translations.nav[link.key])}
									</a>
								);
							})}
							<a
								href={WHATSAPP_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='ml-4 lg:ml-5 px-3 lg:px-3.5 py-1.5 rounded-sm text-xs md:text-sm font-semibold bg-[#1a1208] text-accent whitespace-nowrap hover:bg-black transition-colors'
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
