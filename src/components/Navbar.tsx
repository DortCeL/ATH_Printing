import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const navLinks = [
	{ key: "overview" as const, href: "#overview", id: "overview" },
	{ key: "services" as const, href: "#services", id: "services" },
	{ key: "works" as const, href: "#works", id: "works" },
	{ key: "machinery" as const, href: "#machinery", id: "machinery" },
	{ key: "locations" as const, href: "#locations", id: "locations" },
	{ key: "contact" as const, href: "#contact", id: "contact" },
];

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const getNavOffset = () => (window.innerWidth < 1024 ? 110 : 96);

const resolveActiveSection = () => {
	const offset = getNavOffset();
	let current = navLinks[0].id;

	for (const link of navLinks) {
		const el = document.getElementById(link.id);
		if (!el) continue;
		if (el.getBoundingClientRect().top - offset <= 1) {
			current = link.id;
		}
	}

	return current;
};

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [activeId, setActiveId] = useState("overview");
	const { lang, setLang, t } = useLanguage();
	const mobileLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
	const lockActiveRef = useRef(false);
	const unlockTimerRef = useRef<number | null>(null);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 40);
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
		const el = mobileLinkRefs.current[activeId];
		el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
	}, [activeId]);

	const handleNavClick = (id: string) => {
		setActiveId(id);
		lockActiveRef.current = true;

		if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
		unlockTimerRef.current = window.setTimeout(() => {
			lockActiveRef.current = false;
			setActiveId(resolveActiveSection());
		}, 900);
	};

	const toggleLang = () => setLang(lang === "en" ? "bn" : "en");
	const langLabel = lang === "en" ? "Bangla" : "English";

	return (
		<>
			{/* Mobile / tablet: fixed dark two-row bar */}
			<nav className='lg:hidden fixed top-0 inset-x-0 z-50 bg-[#0c1220] text-white shadow-lg'>
				<div className='relative flex items-center justify-center px-2 sm:px-4 py-3 border-b border-white/10 min-h-[3.25rem]'>
					<a
						href='#'
						className='text-center font-heading font-bold text-lg sm:text-2xl leading-tight tracking-wide text-red-500 px-16 sm:px-24'
					>
						AutoCAD Training Home
					</a>
					<button
						onClick={toggleLang}
						className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors'
						aria-label='Toggle language'
					>
						<Globe size={15} />
						<span>{langLabel}</span>
					</button>
				</div>

				<div className='overflow-x-auto scrollbar-none'>
					<div className='flex items-center gap-1.5 px-2 sm:px-3 py-2 min-w-max'>
						{navLinks.map((link) => {
							const active = activeId === link.id;
							return (
								<a
									key={link.href}
									href={link.href}
									ref={(node) => {
										mobileLinkRefs.current[link.id] = node;
									}}
									onClick={() => handleNavClick(link.id)}
									aria-current={active ? "true" : undefined}
									className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
										active
											? "bg-accent text-accent-foreground shadow-md shadow-accent/40 scale-105"
											: "text-white/65 hover:text-white hover:bg-white/10"
									}`}
								>
									{t(translations.nav[link.key])}
								</a>
							);
						})}
						<a
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='ml-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-whatsapp text-whatsapp-foreground whitespace-nowrap'
						>
							WhatsApp
						</a>
					</div>
				</div>
			</nav>

			{/* Desktop: floating pill */}
			<nav
				className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,72rem)] transition-all duration-500 rounded-2xl border ${
					scrolled
						? "bg-white/95 backdrop-blur-xl border-border/50 shadow-xl shadow-black/10"
						: "bg-white backdrop-blur-lg shadow-lg border-border/30"
				}`}
			>
				<div className='flex items-center justify-between h-14 px-5'>
					<a
						href='#'
						className='text-xl font-heading font-extrabold text-primary tracking-widest'
					>
						ATH
					</a>

					<div className='flex items-center gap-1.5 xl:gap-2'>
						{navLinks.map((link) => {
							const active = activeId === link.id;
							return (
								<a
									key={link.href}
									href={link.href}
									onClick={() => handleNavClick(link.id)}
									aria-current={active ? "true" : undefined}
									className={`relative px-3.5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
										active
											? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
											: "text-gray-600 hover:text-primary hover:bg-primary/8"
									}`}
								>
									{t(translations.nav[link.key])}
								</a>
							);
						})}
					</div>

					<div className='flex items-center gap-3'>
						<button
							onClick={toggleLang}
							className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors'
							aria-label='Toggle language'
						>
							<Globe size={14} />
							{langLabel}
						</button>
						<a
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-whatsapp text-whatsapp-foreground text-xs font-semibold hover:opacity-90 transition-opacity'
						>
							{t(translations.nav.orderWhatsApp)}
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
