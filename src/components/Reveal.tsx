import {
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type ElementType,
	type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
	children: ReactNode;
	variant?: RevealVariant;
	delay?: number;
	duration?: number;
	className?: string;
	as?: ElementType;
	once?: boolean;
	amount?: number;
};

const Reveal = ({
	children,
	variant = "up",
	delay = 0,
	duration = 700,
	className,
	as: Tag = "div",
	once = true,
	amount = 0.14,
}: RevealProps) => {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setVisible(true);
				if (once) observer.unobserve(el);
			},
			{ threshold: amount, rootMargin: "0px 0px -6% 0px" }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [amount, once]);

	const style = {
		"--reveal-delay": `${delay}ms`,
		"--reveal-duration": `${duration}ms`,
	} as CSSProperties;

	return (
		<Tag
			ref={ref as never}
			className={cn("reveal", `reveal-${variant}`, visible && "is-visible", className)}
			style={style}
		>
			{children}
		</Tag>
	);
};

export default Reveal;
