export type Lang = "en" | "bn";

export const translations = {
	// Navbar
	nav: {
		services: { en: "Services", bn: "সেবাসমূহ" },
		pricing: { en: "Pricing", bn: "মূল্য তালিকা" },
		technology: { en: "Technology", bn: "প্রযুক্তি" },
		testimonials: { en: "Testimonials", bn: "প্রশংসাপত্র" },
		faq: { en: "FAQ", bn: "প্রশ্নোত্তর" },
		locations: { en: "Locations", bn: "শাখাসমূহ" },
		contact: { en: "Contact", bn: "যোগাযোগ" },
		orderWhatsApp: { en: "Order via WhatsApp", bn: "WhatsApp এ অর্ডার" },
	},

	// Hero
	hero: {
		badge: {
			en: "Professional Printing Services",
			bn: "পেশাদার প্রিন্টিং সেবা",
		},
		heading1: { en: "Large Format", bn: "বড় ফরম্যাটের" },
		heading2: { en: "Printing", bn: "প্রিন্টিং" },
		heading3: { en: "Done Right", bn: "সঠিকভাবে" },
		description: {
			en: "Maps, architectural plans, engineering drawings — printed with precision, speed, and unmatched quality. Trusted by professionals across industries.",
			bn: "মানচিত্র, স্থাপত্য নকশা, ইঞ্জিনিয়ারিং ড্রয়িং — নির্ভুলতা, গতি এবং অতুলনীয় মানের সাথে প্রিন্ট করা হয়। সকল শিল্পের পেশাদারদের বিশ্বস্ত।",
		},
		viewPricing: { en: "View Pricing", bn: "মূল্য দেখুন" },
		locations: { en: "Our Locations", bn: "আমাদের শাখাসমূহ" },
	},

	// Services
	services: {
		badge: { en: "What We Do", bn: "আমরা যা করি" },
		heading: {
			en: "Professional Printing Services",
			bn: "পেশাদার প্রিন্টিং সেবা",
		},
		subtitle: {
			en: "From a single A4 page to thousands of A0 sheets — we handle it all with speed and precision.",
			bn: "একটি A4 পৃষ্ঠা থেকে হাজার হাজার A0 শীট — আমরা সবকিছু গতি ও নির্ভুলতার সাথে পরিচালনা করি।",
		},
		items: [
			{
				title: { en: "Map Printing", bn: "মানচিত্র প্রিন্টিং" },
				description: {
					en: "High-resolution maps at any scale. Perfect for surveyors, geographers, and urban planners.",
					bn: "যেকোনো স্কেলে উচ্চ-রেজোলিউশন মানচিত্র। জরিপকারী, ভূগোলবিদ এবং নগর পরিকল্পনাকারীদের জন্য আদর্শ।",
				},
			},
			{
				title: { en: "Engineering Drawings", bn: "ইঞ্জিনিয়ারিং ড্রয়িং" },
				description: {
					en: "Precise technical drawings with accurate line weights and dimensions for engineering projects.",
					bn: "ইঞ্জিনিয়ারিং প্রকল্পের জন্য সঠিক লাইন ওয়েট এবং মাত্রা সহ নির্ভুল প্রযুক্তিগত ড্রয়িং।",
				},
			},
			{
				title: { en: "Architectural Plans", bn: "স্থাপত্য নকশা" },
				description: {
					en: "Professional plan sets for architects — from concept sketches to construction documents.",
					bn: "স্থপতিদের জন্য পেশাদার নকশা সেট — ধারণা স্কেচ থেকে নির্মাণ নথি পর্যন্ত।",
				},
			},
			{
				title: { en: "Bulk Printing", bn: "বাল্ক প্রিন্টিং" },
				description: {
					en: "Volume discounts for organizations and companies. Submit hundreds of pages in one order.",
					bn: "প্রতিষ্ঠান এবং কোম্পানির জন্য ভলিউম ডিসকাউন্ট। এক অর্ডারে শত শত পৃষ্ঠা জমা দিন।",
				},
			},
		],
	},

	// Pricing
	pricing: {
		badge: { en: "Pricing", bn: "মূল্য তালিকা" },
		heading: { en: "Simple, Transparent Pricing", bn: "সহজ, স্বচ্ছ মূল্য" },
		subtitle: {
			en: "No hidden fees. Bulk discounts available for 50+ copies. All prices in BDT.",
			bn: "কোনো লুকানো ফি নেই। ৫০+ কপিতে বাল্ক ডিসকাউন্ট। সকল মূল্য BDT-তে।",
		},
		size: { en: "Size", bn: "সাইজ" },
		dimensions: { en: "Dimensions", bn: "মাত্রা" },
		perCopy: { en: "Per Copy", bn: "প্রতি কপি" },
		bulk: { en: "Bulk (50+)", bn: "বাল্ক (৫০+)" },
		popular: { en: "Popular", bn: "জনপ্রিয়" },
		features: [
			{ en: "High resolution output", bn: "উচ্চ রেজোলিউশন আউটপুট" },
			{ en: "Same-day delivery available", bn: "একই দিনে ডেলিভারি" },
			{ en: "Color & B/W options", bn: "রঙিন ও সাদা-কালো অপশন" },
			{ en: "Paper & glossy finish", bn: "পেপার ও গ্লসি ফিনিশ" },
			{ en: "Free quality check", bn: "বিনামূল্যে কোয়ালিটি চেক" },
			{ en: "Bulk order discounts", bn: "বাল্ক অর্ডার ডিসকাউন্ট" },
		],
		getQuote: { en: "Get a Quote on WhatsApp", bn: "WhatsApp-এ কোটেশন নিন" },
		customNote: {
			en: "Custom sizes? Large orders? Message us for the best price.",
			bn: "কাস্টম সাইজ? বড় অর্ডার? সেরা দামের জন্য আমাদের মেসেজ করুন।",
		},
	},

	// Technology
	technology: {
		badge: { en: "Our Technology", bn: "আমাদের প্রযুক্তি" },
		heading: {
			en: "Professional Machinery for Professional Results",
			bn: "পেশাদার ফলাফলের জন্য পেশাদার যন্ত্রপাতি",
		},
		subtitle: {
			en: "We invest in top-tier printing technology so your drawings, maps, and plans come out with flawless precision every time.",
			bn: "আমরা শীর্ষ-স্তরের প্রিন্টিং প্রযুক্তিতে বিনিয়োগ করি যাতে আপনার ড্রয়িং, মানচিত্র এবং নকশা প্রতিবার নিখুঁত নির্ভুলতায় বের হয়।",
		},
		dpiLabel: { en: "DPI Resolution", bn: "DPI রেজোলিউশন" },
		dpiNote: {
			en: "Maximum print precision for every detail",
			bn: "প্রতিটি বিস্তারিতের জন্য সর্বোচ্চ প্রিন্ট নির্ভুলতা",
		},
		features: [
			{
				title: {
					en: "Industrial-Grade Plotters",
					bn: "ইন্ডাস্ট্রিয়াল-গ্রেড প্লটার",
				},
				description: {
					en: "HP DesignJet & Canon imagePROGRAF series for ultra-precise output.",
					bn: "অতি-নির্ভুল আউটপুটের জন্য HP DesignJet ও Canon imagePROGRAF সিরিজ।",
				},
			},
			{
				title: { en: "Up to 2400 DPI", bn: "২৪০০ DPI পর্যন্ত" },
				description: {
					en: "Crystal-clear detail for the most demanding technical drawings.",
					bn: "সবচেয়ে কঠিন প্রযুক্তিগত ড্রয়িংয়ের জন্য স্ফটিক-পরিষ্কার বিস্তারিত।",
				},
			},
			{
				title: { en: "Rapid Turnaround", bn: "দ্রুত টার্নঅ্যারাউন্ড" },
				description: {
					en: "High-speed printing without compromising quality. Same-day available.",
					bn: "মান না কমিয়ে উচ্চ-গতির প্রিন্টিং। একই দিনে পাওয়া যায়।",
				},
			},
			{
				title: { en: "Consistent Quality", bn: "সামঞ্জস্যপূর্ণ মান" },
				description: {
					en: "Calibrated machines ensure every print matches your original files.",
					bn: "ক্যালিব্রেটেড মেশিন নিশ্চিত করে প্রতিটি প্রিন্ট আপনার আসল ফাইলের সাথে মেলে।",
				},
			},
		],
	},

	// Testimonials
	testimonials: {
		badge: { en: "Testimonials", bn: "প্রশংসাপত্র" },
		heading: { en: "Trusted by Professionals", bn: "পেশাদারদের বিশ্বস্ত" },
		subtitle: {
			en: "Engineers, architects, and organizations rely on ATH for their printing needs.",
			bn: "ইঞ্জিনিয়ার, স্থপতি এবং প্রতিষ্ঠানগুলো তাদের প্রিন্টিং প্রয়োজনে ATH-এর উপর নির্ভর করে।",
		},
		items: [
			{
				name: { en: "Eng. Rafiq Ahmed", bn: "ইঞ্জি. রফিক আহমেদ" },
				role: { en: "Civil Engineer", bn: "সিভিল ইঞ্জিনিয়ার" },
				text: {
					en: "ATH consistently delivers sharp, accurate prints of our structural drawings. Their turnaround time is unmatched.",
					bn: "ATH ধারাবাহিকভাবে আমাদের স্ট্রাকচারাল ড্রয়িংয়ের তীক্ষ্ণ, নির্ভুল প্রিন্ট প্রদান করে। তাদের টার্নঅ্যারাউন্ড টাইম অতুলনীয়।",
				},
			},
			{
				name: { en: "Fatima Khan", bn: "ফাতিমা খান" },
				role: { en: "Architecture Studio Lead", bn: "আর্কিটেকচার স্টুডিও লিড" },
				text: {
					en: "We've been using ATH for all our plan sets. The quality is outstanding and bulk pricing saves us a lot.",
					bn: "আমরা আমাদের সকল প্ল্যান সেটের জন্য ATH ব্যবহার করি। মান অসাধারণ এবং বাল্ক প্রাইসিং আমাদের অনেক সাশ্রয় করে।",
				},
			},
			{
				name: { en: "Dhaka Survey Corp.", bn: "ঢাকা সার্ভে কর্প." },
				role: { en: "Surveying Company", bn: "জরিপ কোম্পানি" },
				text: {
					en: "Printing hundreds of cadastral maps every month — ATH handles it without a single issue. Highly recommended.",
					bn: "প্রতি মাসে শত শত ভূমি মানচিত্র প্রিন্ট করা — ATH কোনো সমস্যা ছাড়াই এটি পরিচালনা করে। অত্যন্ত সুপারিশকৃত।",
				},
			},
		],
	},

	// FAQ
	faq: {
		badge: { en: "FAQ", bn: "প্রশ্নোত্তর" },
		heading: {
			en: "Frequently Asked Questions",
			bn: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
		},
		items: [
			{
				q: {
					en: "What file formats do you accept?",
					bn: "আপনারা কোন ফাইল ফরম্যাট গ্রহণ করেন?",
				},
				a: {
					en: "We accept PDF, DWG, DXF, JPEG, PNG, and TIFF files. For best results, we recommend high-resolution PDF files.",
					bn: "আমরা PDF, DWG, DXF, JPEG, PNG, এবং TIFF ফাইল গ্রহণ করি। সেরা ফলাফলের জন্য, আমরা উচ্চ-রেজোলিউশন PDF ফাইল সুপারিশ করি।",
				},
			},
			{
				q: { en: "What's the turnaround time?", bn: "ডেলিভারি সময় কত?" },
				a: {
					en: "Standard orders are completed within 24 hours. Same-day printing is available for urgent orders — just let us know via WhatsApp.",
					bn: "স্ট্যান্ডার্ড অর্ডার ২৪ ঘন্টার মধ্যে সম্পন্ন হয়। জরুরি অর্ডারের জন্য একই দিনে প্রিন্টিং পাওয়া যায় — শুধু WhatsApp-এ জানান।",
				},
			},
			{
				q: {
					en: "Do you offer bulk discounts?",
					bn: "আপনারা কি বাল্ক ডিসকাউন্ট দেন?",
				},
				a: {
					en: "Yes! Orders of 50+ copies get significantly reduced pricing. Contact us for custom bulk quotes.",
					bn: "হ্যাঁ! ৫০+ কপির অর্ডারে উল্লেখযোগ্যভাবে কম মূল্য পাওয়া যায়। কাস্টম বাল্ক কোটের জন্য আমাদের সাথে যোগাযোগ করুন।",
				},
			},
			{
				q: {
					en: "Can I get my prints delivered?",
					bn: "আমি কি প্রিন্ট ডেলিভারি পেতে পারি?",
				},
				a: {
					en: "We offer local delivery within Dhaka. For other locations, we can arrange courier shipping. Ask us for details.",
					bn: "আমরা ঢাকার মধ্যে স্থানীয় ডেলিভারি অফার করি। অন্যান্য স্থানের জন্য, আমরা কুরিয়ার শিপিং ব্যবস্থা করতে পারি।",
				},
			},
			{
				q: {
					en: "What paper types are available?",
					bn: "কোন ধরনের কাগজ পাওয়া যায়?",
				},
				a: {
					en: "We offer bond paper, coated glossy, matte finish, and tracing paper. Special materials are available on request.",
					bn: "আমরা বন্ড পেপার, কোটেড গ্লসি, ম্যাট ফিনিশ এবং ট্রেসিং পেপার অফার করি। বিশেষ উপকরণ অনুরোধে পাওয়া যায়।",
				},
			},
			{
				q: { en: "How do I send my files?", bn: "আমি কিভাবে ফাইল পাঠাবো?" },
				a: {
					en: "You can send files directly via WhatsApp, email, or share a Google Drive / Dropbox link with us.",
					bn: "আপনি সরাসরি WhatsApp, ইমেইল এর মাধ্যমে ফাইল পাঠাতে পারেন, অথবা আমাদের সাথে Google Drive / Dropbox লিঙ্ক শেয়ার করতে পারেন।",
				},
			},
		],
	},

	// Locations
	locations: {
		badge: { en: "Our Locations", bn: "আমাদের শাখাসমূহ" },
		heading: { en: "Visit Our Shops", bn: "আমাদের দোকানে আসুন" },
		subtitle: {
			en: "We have 3 convenient locations across Dhaka. Drop in anytime during business hours.",
			bn: "ঢাকা জুড়ে আমাদের ৩টি সুবিধাজনক শাখা রয়েছে। ব্যবসায়িক সময়ে যেকোনো সময় আসুন।",
		},
		hours: { en: "Sat–Thu: 9AM – 9PM", bn: "শনি–বৃহঃ: সকাল ৯টা – রাত ৯টা" },
		getDirections: { en: "Get Directions", bn: "দিকনির্দেশনা নিন" },
		shops: [
			{
				name: { en: "Farmgate", bn: "ফার্মগেট" },
				address: {
					en: "79 Green Road, Greenview Super Market (Ground floor), South of Ananda Cinema Hall, beside UCC Book House, Dhaka-1215",
					bn: "৭৯ গ্রীন রোড, গ্রীনভিউ সুপার মার্কেট (নীচ তলা), আনন্দ সিনেমা হলের দক্ষিণে, UCC Book House এর পাশে, ঢাকা-১২১৫",
				},
				mapUrl:
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.02036321553464!2d90.38966164384365!3d23.755977485304587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a3efb84a0d%3A0xd7a5c7c6f784315e!2sGreen%20View%20Super%20Market%2C%20Dhaka%201205!5e1!3m2!1sen!2sbd!4v1773072999294!5m2!1sen!2sbd",

				directionsUrl:
					"https://www.google.com/maps/dir/?api=1&destination=23.755974416624632,90.38966231439589",
			},
			{
				name: { en: "Mirpur-10", bn: "মিরপুর-১০" },
				address: {
					en: "Mirpur 10 Folpotti, Masjid Road, East of Baitul Mamur Masjid, Samad Plaza 2nd Floor, Dhaka-1216",
					bn: "মিরপুর ১০ ফলপট্টি, মসজিদ রোড, বাইতুল মামুর মসজিদের পূর্ব পাশে, সামাদ প্লাজা ২য় তলা, ঢাকা-১২১৬",
				},
				mapUrl:
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.90723467546263!2d90.36796806492002!3d23.806186185357053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6418c9adb%3A0x16e3ab67b799cd1c!2sMurad%20Surgical!5e1!3m2!1sen!2sbd!4v1773073366654!5m2!1sen!2sbd",
				directionsUrl:
					"https://www.google.com/maps/dir/?api=1&destination=23.806223574533778,90.36804316921474",
			},
			{
				name: { en: "Mohakhali", bn: "মহাখালী" },
				address: {
					en: "31/4, Colombia Super Market (3rd Floor), Mohakhali Wireless Gate, East of Titumir college, Dhaka-1215",
					bn: "৩১/৪, কলম্বিয়া সুপার মার্কেট (৩য় তলা), মহাখালী ওয়্যারলেস গেট, তিতুমীর কলেজের পূর্ব পাশে, ঢাকা–১২১৫",
				},
				mapUrl:
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7698815009318!2d90.40548587043875!3d23.78084866113725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7722b975f65%3A0x92328406030ab070!2sColombia%20Super%20Market!5e1!3m2!1sen!2sbd!4v1773074197451!5m2!1sen!2sbd",

				directionsUrl:
					"https://www.google.com/maps/dir/?api=1&destination=23.78083435879612,90.40515907474985",
			},
		],
	},

	// Contact
	contact: {
		badge: { en: "Contact Us", bn: "যোগাযোগ করুন" },
		heading: { en: "Ready to Print?", bn: "প্রিন্ট করতে প্রস্তুত?" },
		subtitle: {
			en: "Send us your files and we'll have your prints ready in no time. WhatsApp is the fastest way to reach us.",
			bn: "আমাদের আপনার ফাইল পাঠান এবং আমরা দ্রুত আপনার প্রিন্ট তৈরি করব। WhatsApp আমাদের সাথে যোগাযোগের সবচেয়ে দ্রুত উপায়।",
		},
		whatsapp: { en: "WhatsApp", bn: "WhatsApp" },
		phone: { en: "Phone", bn: "ফোন" },
		email: { en: "Email", bn: "ইমেইল" },
		location: { en: "Location", bn: "অবস্থান" },
		locationValue: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
		uploadTitle: { en: "Online Order System", bn: "অনলাইন অর্ডার সিস্টেম" },
		uploadDesc: {
			en: "Upload files or share Google Drive links to submit print jobs directly. Coming soon!",
			bn: "সরাসরি প্রিন্ট জব জমা দিতে ফাইল আপলোড করুন বা Google Drive লিঙ্ক শেয়ার করুন। শীঘ্রই আসছে!",
		},
		comingSoon: { en: "Coming Soon", bn: "শীঘ্রই আসছে" },
	},

	// Footer
	footer: {
		rights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
	},

	// ChatBot
	chatbot: {
		title: { en: "ATH Assistant", bn: "ATH সহকারী" },
		greeting: {
			en: "Hi! 👋 I'm ATH's assistant. Choose a question below or contact us on WhatsApp!",
			bn: "হ্যালো! 👋 আমি ATH-এর সহকারী। নিচে একটি প্রশ্ন বেছে নিন অথবা WhatsApp-এ যোগাযোগ করুন!",
		},
		continueWhatsApp: {
			en: "Continue on WhatsApp",
			bn: "WhatsApp-এ চালিয়ে যান",
		},
		questions: [
			{
				q: {
					en: "What sizes do you print?",
					bn: "আপনারা কোন সাইজে প্রিন্ট করেন?",
				},
				a: {
					en: "We print A4, A3, A2, A1, A0, and custom sizes. Check our pricing section for details!",
					bn: "আমরা A4, A3, A2, A1, A0 এবং কাস্টম সাইজে প্রিন্ট করি। বিস্তারিত জানতে আমাদের মূল্য তালিকা দেখুন!",
				},
			},
			{
				q: { en: "What file formats?", bn: "কোন ফাইল ফরম্যাট?" },
				a: {
					en: "We accept PDF, DWG, DXF, JPEG, PNG, and TIFF. PDF is recommended for best results.",
					bn: "আমরা PDF, DWG, DXF, JPEG, PNG এবং TIFF গ্রহণ করি। সেরা ফলাফলের জন্য PDF সুপারিশ করা হয়।",
				},
			},
			{
				q: { en: "How fast is delivery?", bn: "ডেলিভারি কত দ্রুত?" },
				a: {
					en: "Standard orders: 24 hours. Same-day printing available for urgent orders via WhatsApp.",
					bn: "স্ট্যান্ডার্ড অর্ডার: ২৪ ঘন্টা। জরুরি অর্ডারের জন্য WhatsApp-এ একই দিনে প্রিন্টিং পাওয়া যায়।",
				},
			},
			{
				q: { en: "Bulk discounts?", bn: "বাল্ক ডিসকাউন্ট?" },
				a: {
					en: "Yes! 50+ copies get reduced pricing. Contact us on WhatsApp for a custom quote.",
					bn: "হ্যাঁ! ৫০+ কপিতে কম মূল্য পাওয়া যায়। কাস্টম কোটের জন্য WhatsApp-এ যোগাযোগ করুন।",
				},
			},
			{
				q: { en: "How to send files?", bn: "ফাইল কিভাবে পাঠাবো?" },
				a: {
					en: "Send via WhatsApp, email, or share a Google Drive / Dropbox link.",
					bn: "WhatsApp, ইমেইল এর মাধ্যমে পাঠান, অথবা Google Drive / Dropbox লিঙ্ক শেয়ার করুন।",
				},
			},
		],
	},
} as const;

export type TranslationKey = typeof translations;
