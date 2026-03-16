import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
	"https://wa.me/8801722881393?text=Hi%20ATH%2C%20I%20want%20to%20place%20a%20print%20order";

interface Message {
	from: "bot" | "user";
	text: string;
}

const ChatBot = () => {
	const [open, setOpen] = useState(false);
	const { t } = useLanguage();
	const cb = translations.chatbot;

	const [messages, setMessages] = useState<Message[]>([
		{ from: "bot", text: t(cb.greeting) },
	]);

	const handleQuestion = (q: string, a: string) => {
		setMessages((prev) => [
			...prev,
			{ from: "user", text: q },
			{ from: "bot", text: a },
		]);
	};

	return (
		<>
			{!open && (
				<button
					onClick={() => {
						setMessages([{ from: "bot", text: t(cb.greeting) }]);
						setOpen(true);
					}}
					className='fixed bottom-6 right-6 z-50 py-4 px-5 shadow-lg rounded-full bg-primary text-primary-foreground  hover:opacity-60 transition-opacity flex items-center justify-center animate-bounce cursor-pointer'
					aria-label='Open chat'
				>
					<div className=' flex flex-row items-center gap-4'>
						<label>CHAT WITH US</label>
						<MessageCircle size={24} />
					</div>
				</button>
			)}

			{open && (
				<div className='fixed bottom-6 right-6 z-50 w-[340px] max-h-[480px] flex flex-col bg-card rounded-2xl shadow-2xl border border-border overflow-hidden'>
					<div className='flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground'>
						<span className='font-heading font-semibold text-sm'>
							{t(cb.title)}
						</span>
						<button onClick={() => setOpen(false)} aria-label='Close chat'>
							<X size={18} />
						</button>
					</div>

					<div className='flex-1 overflow-y-auto p-4 space-y-3 max-h-[280px]'>
						{messages.map((m, i) => (
							<div
								key={i}
								className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${
									m.from === "bot"
										? "bg-muted text-foreground"
										: "bg-primary text-primary-foreground ml-auto"
								}`}
							>
								{m.text}
							</div>
						))}
					</div>

					<div className='border-t border-border p-3 space-y-2'>
						<div className='flex flex-wrap gap-1.5'>
							{cb.questions.map((qq, i) => (
								<button
									key={i}
									onClick={() => handleQuestion(t(qq.q), t(qq.a))}
									className='text-xs px-3 py-1.5 rounded-full bg-muted text-foreground hover:bg-primary/10 transition-colors'
								>
									{t(qq.q)}
								</button>
							))}
						</div>
						<a
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-whatsapp text-whatsapp-foreground text-xs font-semibold'
						>
							<Send size={14} />
							{t(cb.continueWhatsApp)}
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default ChatBot;
