import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const navLinks = [
	{ key: "overview" as const, href: "#overview" },
	{ key: "services" as const, href: "#services" },
	{ key: "works" as const, href: "#works" },
	{ key: "machinery" as const, href: "#machinery" },
	{ key: "pricing" as const, href: "#pricing" },
	{ key: "locations" as const, href: "#locations" },
	{ key: "contact" as const, href: "#contact" },
];

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { lang, setLang, t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleLang = () => setLang(lang === "en" ? "bn" : "en");

	return (
		<nav
			className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl border ${
				scrolled
					? "bg-white/90 backdrop-blur-xl border-border/50 shadow-xl shadow-black/20"
					: "bg-white backdrop-blur-lg shadow-xl border-border/30"
			}`}
		>
			<div className='flex items-center justify-between h-14 px-5'>
				<a
					href='#'
					className='text-xl font-heading font-extrabold text-primary tracking-widest'
				>
					ATH
				</a>

				{/* Desktop */}
				<div className='hidden lg:flex items-center gap-6'>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors'
						>
							{t(translations.nav[link.key])}
						</a>
					))}
				</div>

				<div className='hidden lg:flex items-center gap-3'>
					<button
						onClick={toggleLang}
						className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors'
						aria-label='Toggle language'
					>
						<Globe size={14} />
						{lang === "en" ? "বাংলা" : "English"}
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

				{/* Mobile toggle */}
				<div className='flex lg:hidden items-center gap-2'>
					<button
						onClick={toggleLang}
						className='p-2 text-muted-foreground hover:text-foreground'
						aria-label='Toggle language'
					>
						<Globe size={18} />
					</button>
					<button
						onClick={() => setOpen(!open)}
						className='p-2 text-foreground'
						aria-label='Toggle menu'
					>
						{open ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className='lg:hidden border-t border-border/30 px-5 pb-5 pt-3 space-y-6 bg-'>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className='block text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors'
						>
							{t(translations.nav[link.key])}
						</a>
					))}
					<a
						href={WHATSAPP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='block w-full text-center px-4 py-2 rounded-xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold'
					>
						{t(translations.nav.orderWhatsApp)}
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
