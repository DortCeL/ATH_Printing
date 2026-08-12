export type Lang = "en" | "bn";

export const translations = {
	// Navbar
	nav: {
		overview: { en: "Overview", bn: "পরিচিতি" },
		services: { en: "Services", bn: "সার্ভিস" },
		works: { en: "Major Works", bn: "উল্লেখযোগ্য কাজ" },
		machinery: { en: "Machinery", bn: "যন্ত্রপাতি" },
		pricing: { en: "Pricing", bn: "মূল্য তালিকা" },
		technology: { en: "Technology", bn: "প্রযুক্তি" },
		testimonials: { en: "Testimonials", bn: "প্রশংসাপত্র" },
		faq: { en: "FAQ", bn: "প্রশ্নোত্তর" },
		locations: { en: "Locations", bn: "শাখাসমূহ" },
		contact: { en: "Contact", bn: "যোগাযোগ" },
		orderWhatsApp: {
			en: "Contact via WhatsApp",
			bn: "WhatsApp-এ যোগাযোগ করুন",
		},
		langHint: {
			en: "Switch language",
			bn: "ভাষা বদলান",
		},
	},

	// Hero
	hero: {
		companyName: {
			en: "AutoCAD Training Home",
			bn: "অটোক্যাড ট্রেনিং হোম",
		},
		companyAbbr: { en: "ATH", bn: "এ টি এইচ" },
		description: {
			en: "Maps, architectural plans, and engineering drawings — printed with precision, speed, and unmatched quality. Trusted by professionals across industries since 1994.",
			bn: "ম্যাপকপি, স্থাপত্য নকশা এবং ইঞ্জিনিয়ারিং ড্রয়িং — নির্ভুলতা, গতি ও অতুলনীয় মানে প্রিন্ট। ১৯৯৪ সাল থেকে সকল শিল্পের পেশাদারদের বিশ্বস্ত অংশীদার।",
		},
		/** CEO / proprietor numbers — add more here anytime */
		proprietor_phone_numbers: ["01711825803", "01971825803"],
	},

	// Services
	services: {
		badge: { en: "Services", bn: "সেবাসমূহ" },
		heading: {
			en: "What We Print",
			bn: "আমরা যা প্রিন্ট করি",
		},
		aside: {
			en: "A0 to A4 · Maps to finish",
			bn: "A0 থেকে A4 · ম্যাপ থেকে ফিনিশ",
		},
		featuredLabel: { en: "Flagship", bn: "মূল সেবা" },
		items: [
			{
				title: {
					en: "Map Copy & Blueprint",
					bn: "ম্যাপ কপি ও ব্লুপ্রিন্ট",
				},
				tag: {
					en: "Mouza maps · Cadastral · Tracing · Ammonia",
					bn: "মৌজা ম্যাপ · ভূমি নকশা · ট্রেসিং · অ্যামোনিয়া",
				},
				featured: true,
			},
			{
				title: {
					en: "Large Format",
					bn: "বড় ফরম্যাট",
				},
				tag: {
					en: "Plot & scan A0–A4 · up to 42″",
					bn: "প্লট ও স্ক্যান A0–A4 · ৪২″ পর্যন্ত",
				},
			},
			{
				title: {
					en: "Photocopy",
					bn: "ফটোকপি",
				},
				tag: {
					en: "High volume · 20,000 A4 / day",
					bn: "উচ্চ পরিমাণ · দৈনিক ২০,০০০ A4",
				},
			},
			{
				title: {
					en: "Color & B/W",
					bn: "রঙিন ও সাদা-কালো",
				},
				tag: {
					en: "100 GSM · Offset · Crisp output",
					bn: "১০০ GSM · অফসেট · স্পষ্ট আউটপুট",
				},
			},
			{
				title: {
					en: "Binding & Lamination",
					bn: "বাইন্ডিং ও লেমিনেশন",
				},
				tag: {
					en: "Pro finish · up to 36″ wide",
					bn: "প্রো ফিনিশ · ৩৬″ পর্যন্ত",
				},
			},
		],
	},

	// Overview
	overview: {
		badge: { en: "Company Overview", bn: "আমাদের পরিচয়" },
		heading: {
			en: "Three Decades of Printing Excellence",
			bn: "তিন দশকের প্রিন্টিং দক্ষতা",
		},
		para1: {
			en: "Established in 1994 at Farmgate, Dhaka, AutoCAD Training Home (ATH) began as a professional AutoCAD training institute. In 1996, we expanded into large-format tracing, blueprint and ammonia printing — and never looked back.",
			bn: "১৯৯৪ সালে ঢাকার ফার্মগেটে AutoCAD Training Home (ATH) যাত্রা শুরু করে পেশাদার AutoCAD প্রশিক্ষণ কেন্দ্র হিসেবে। ১৯৯৬ সালে আমরা বড় ফরম্যাটের ট্রেসিং, নীলনক্সা আর অ্যামোনিয়া প্রিন্টিং-এ পা রাখি — আর সেদিন থেকে পিছনে ফিরে তাকাতে হয়নি।",
		},
		para2: {
			en: "Today, ATH is the trusted printing partner of leading architectural firms, engineering consultancies, developers, and government organizations across Bangladesh — a true one-stop solution for professional printing.",
			bn: "বর্তমানে ATH বাংলাদেশের শীর্ষস্থানীয় আর্কিটেকচার ফার্ম, ইঞ্জিনিয়ারিং কনসালটেন্সি, ডেভেলপার আর সরকারি প্রতিষ্ঠানের বিশ্বস্ত মুদ্রণ সঙ্গী — যা পেশাদার মুদ্রণের জন্য একটি সম্পূর্ণ সমাধান।",
		},
		points: [
			{
				en: "Fully air-conditioned printing rooms",
				bn: "এসি সহ প্রিন্টিং রুম",
			},
			{
				en: "3 standby generators — zero downtime",
				bn: "৩টি স্ট্যান্ডবাই জেনারেটর — কাজ থামে না",
			},
			{
				en: "15 skilled technical professionals",
				bn: "১৫ জন দক্ষ অপারেটর",
			},
			{
				en: "Trusted by government & private institutions",
				bn: "সরকারি ও বেসরকারি প্রতিষ্ঠানের আস্থাভাজন",
			},
		],
		stats: {
			years: { en: "Years of Experience", bn: "অভিজ্ঞতার বছর" },
			dailyCapacity: {
				en: "Daily Print Capacity",
				bn: "দৈনিক প্রিন্ট সক্ষমতা",
			},
			team: { en: "Skilled Personnel", bn: "দক্ষ কর্মী" },
			branches: { en: "Branches in Dhaka", bn: "ঢাকায় শাখা" },
		},
		imageAlt: {
			en: "ATH printing facility with large-format plotters",
			bn: "এটিএইচ-এর বড় ফরম্যাটের প্লটার সম্বলিত প্রিন্টিং সুবিধা",
		},
		proprietor: {
			name: { en: "Md Anwar Hossain", bn: "মোঃ আনোয়ার হোসেন" },
			title: { en: "Proprietor", bn: "প্রোপ্রাইটর" },
			company: {
				en: "AutoCAD Training Home (ATH)",
				bn: "অটোক্যাড ট্রেনিং হোম (ATH)",
			},
			facebook: { en: "Facebook", bn: "ফেসবুক" },
		},
	},

	// Major Works
	works: {
		badge: { en: "Proven Track Record", bn: "প্রমাণিত সাফল্য" },
		heading: {
			en: "Major Works That Speak for Themselves",
			bn: "আমাদের উল্লেখযোগ্য প্রজেক্ট",
		},
		subtitle: {
			en: "National-scale projects delivered for government and private sector leaders.",
			bn: "সরকারি ও বেসরকারি খাতের নেতৃস্থানীয় প্রতিষ্ঠানের জন্য জাতীয় পর্যায়ের প্রকল্প সম্পন্ন।",
		},
		clientLabel: { en: "Client", bn: "ক্লায়েন্ট" },
		copies: { en: "copies", bn: "কপি" },
		bannerTotal: { en: "211,000+", bn: "২১১,০০০+" },
		banner: {
			en: "copies delivered in flagship national projects",
			bn: "কপি জাতীয় পর্যায়ের প্রধান প্রকল্পে সরবরাহ করা হয়েছে",
		},
		items: [
			{
				quantity: { en: "60,000", bn: "৬০,০০০" },
				title: {
					en: "Mouza maps — entire Bangladesh",
					bn: "সমগ্র বাংলাদেশের মৌজা ম্যাপ",
				},
				client: {
					en: "Bangladesh Bureau of Statistics",
					bn: "বাংলাদেশ পরিসংখ্যান ব্যুরো",
				},
				year: { en: "2005", bn: "২০০৫" },
				note: { en: "100 GSM white paper", bn: "১০০ GSM সাদা কাগজ" },
			},
			{
				quantity: { en: "60,000", bn: "৬০,০০০" },
				title: {
					en: "DAP tracing & ammonia printing",
					bn: "DAP ট্রেসিং ও অ্যামোনিয়া প্রিন্টিং",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "ডিজাইন ডেভেলপমেন্ট কোম্পানি (DDC)",
				},
				year: { en: "2011", bn: "২০১১" },
				note: {
					en: "Large-format blueprint output",
					bn: "বড় ফরম্যাট ব্লুপ্রিন্ট আউটপুট",
				},
			},
			{
				quantity: { en: "38,000", bn: "৩৮,০০০" },
				title: {
					en: "Color prints — Airport 3rd Terminal",
					bn: "রঙিন প্রিন্ট — এয়ারপোর্ট ৩য় টার্মিনাল",
				},
				client: {
					en: "Airport 3rd Terminal Project",
					bn: "এয়ারপোর্ট ৩য় টার্মিনাল প্রকল্প",
				},
				year: { en: "2025", bn: "২০২৫" },
				note: {
					en: '23"×36" 100 GSM white paper',
					bn: '২৩"×৩৬" ১০০ GSM সাদা কাগজ',
				},
			},
			{
				quantity: { en: "38,000", bn: "৩৮,০০০" },
				title: {
					en: "Color map — Khulna Division",
					bn: "কালার ম্যাপ — খুলনা বিভাগ",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "ডিজাইন ডেভেলপমেন্ট কোম্পানি (DDC)",
				},
				year: { en: "2025", bn: "২০২৫" },
				note: {
					en: '30"×40" 100 GSM offset paper',
					bn: '৩০"×৪০" ১০০ GSM অফসেট কাগজ',
				},
			},
			{
				quantity: { en: "15,000", bn: "১৫,০০০" },
				title: {
					en: "DAP tracing & ammonia printing",
					bn: "DAP ট্রেসিং ও অ্যামোনিয়া প্রিন্টিং",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "ডিজাইন ডেভেলপমেন্ট কোম্পানি (DDC)",
				},
				year: { en: "2022–23", bn: "২০২২–২৩" },
				note: {
					en: "Detailed Area Plan implementation",
					bn: "ডিটেইলড এরিয়া প্ল্যান বাস্তবায়ন",
				},
			},
		],
	},

	// Machinery
	machinery: {
		badge: { en: "Machinery", bn: "যন্ত্রপাতি" },
		heading: {
			en: "Our Fleet",
			bn: "আমাদের যন্ত্রপাতি",
		},
		aside: {
			en: "Zero downtime · AC rooms · Standby power",
			bn: "জিরো ডাউনটাইম · এসি রুম · স্ট্যান্ডবাই পাওয়ার",
		},
		machines: [
			{
				name: { en: "Large Format Plotters", bn: "বড় ফরম্যাট প্লটার" },
				count: "15",
				tag: { en: '24″ · 36″ · 42″', bn: '২৪″ · ৩৬″ · ৪২″' },
				featured: true,
			},
			{
				name: { en: 'Map Copiers', bn: "ম্যাপ কপিয়ার" },
				count: "6",
				tag: { en: '36″ high-volume', bn: "৩৬″ উচ্চ পরিমাণ" },
			},
			{
				name: { en: "Ammonia Printers", bn: "অ্যামোনিয়া প্রিন্টার" },
				count: "4",
				tag: { en: "Classic blueprints", bn: "ক্লাসিক ব্লুপ্রিন্ট" },
			},
			{
				name: { en: "A3 Printers", bn: "A3 প্রিন্টার" },
				count: "10",
				tag: { en: "Document runs", bn: "ডকুমেন্ট প্রিন্ট" },
			},
			{
				name: { en: "A3 Photocopiers", bn: "A3 ফটোকপিয়ার" },
				count: "6",
				tag: { en: "4 color · 2 B/W", bn: "৪ রঙিন · ২ সাদা-কালো" },
			},
			{
				name: { en: "Laminators", bn: "লেমিনেটর" },
				count: "3",
				tag: { en: 'Up to 36″', bn: "৩৬″ পর্যন্ত" },
			},
		],
		extras: [
			{ count: "8", label: { en: "Computers", bn: "কম্পিউটার" } },
			{ count: "3", label: { en: "Generators", bn: "জেনারেটর" } },
		],
		table: {
			equipment: { en: "Equipment", bn: "যন্ত্রপাতি" },
			qty: { en: "Qty", bn: "সংখ্যা" },
			spec: { en: "Spec", bn: "বিবরণ" },
		},
		capacityHeading: {
			en: "Daily Capacity",
			bn: "দৈনিক সক্ষমতা",
		},
		capacityUnit: { en: "/ day", bn: "/ দিন" },
		capacity: [
			{ size: "A4", value: "20K" },
			{ size: "A3", value: "10K" },
			{ size: "A2", value: "6K" },
			{ size: "A1", value: "4K" },
			{ size: "E0", value: "3K" },
			{ size: "A0", value: "2K" },
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
		hours: { en: "Sat–Thu: 9:00 AM – 9:00 PM", bn: "শনি–বৃহঃ: সকাল ৯টা – রাত ৯টা" },
		closed: { en: "Friday closed", bn: "শুক্রবার বন্ধ" },
		getDirections: { en: "Get Directions", bn: "দিকনির্দেশনা নিন" },
		call: { en: "Call", bn: "কল করুন" },
		manager: { en: "Branch Manager", bn: "শাখা ব্যবস্থাপক" },
		shops: [
			{
				name: { en: "Farmgate", bn: "ফার্মগেট" },
				address: {
					en: "79 Green Road, Greenview Super Market (Ground floor), South of Ananda Cinema Hall, beside UCC Book House, Dhaka-1215",
					bn: "৭৯ গ্রীন রোড, গ্রীনভিউ সুপার মার্কেট (নীচ তলা), আনন্দ সিনেমা হলের দক্ষিণে, UCC Book House এর পাশে, ঢাকা-১২১৫",
				},
				phone: "01971-825803",
				phoneTel: "+8801971825803",
				whatsapp: "8801971825803",
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
				phone: "01711-825803",
				phoneTel: "+8801711825803",
				whatsapp: "8801711825803",
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
				phone: "01785-600774",
				phoneTel: "+8801785600774",
				whatsapp: "8801785600774",
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
		heading: { en: "Three Branches. One Team.", bn: "তিনটি শাখা। এক দল।" },
		subtitle: {
			en: "Reach the branch nearest you — call the manager directly, message on WhatsApp, or drop in during open hours.",
			bn: "আপনার কাছের শাখায় যোগাযোগ করুন — ব্যবস্থাপককে সরাসরি কল করুন, WhatsApp-এ মেসেজ দিন, অথবা খোলার সময়ে আসুন।",
		},
		hoursLabel: { en: "Open hours", bn: "খোলার সময়" },
		phoneLabel: { en: "Manager phone", bn: "ব্যবস্থাপকের ফোন" },
		addressLabel: { en: "Address", bn: "ঠিকানা" },
		whatsapp: { en: "WhatsApp", bn: "WhatsApp" },
		callBranch: { en: "Call branch", bn: "শাখায় কল করুন" },
		directions: { en: "Directions", bn: "দিকনির্দেশনা" },
		email: { en: "Email", bn: "ইমেইল" },
		emailValue: { en: "info@athprinting.com", bn: "info@athprinting.com" },
		centralWhatsApp: {
			en: "Prefer a general inquiry?",
			bn: "সাধারণ জিজ্ঞাসা?",
		},
		centralWhatsAppCta: {
			en: "Message ATH on WhatsApp",
			bn: "ATH-কে WhatsApp-এ মেসেজ করুন",
		},
	},

	// Footer
	footer: {
		tagline: {
			en: "Professional large-format printing since 1994. Maps, plans, and engineering drawings — done right.",
			bn: "১৯৯৪ সাল থেকে পেশাদার বড় ফরম্যাট প্রিন্টিং। ম্যাপ, নকশা ও ইঞ্জিনিয়ারিং ড্রয়িং — সঠিকভাবে।",
		},
		explore: { en: "Explore", bn: "ঘুরে দেখুন" },
		branches: { en: "Branches", bn: "শাখাসমূহ" },
		reachUs: { en: "Reach Us", bn: "যোগাযোগ" },
		hours: { en: "Hours", bn: "সময়সূচি" },
		hoursValue: {
			en: "Sat–Thu · 9:00 AM – 9:00 PM",
			bn: "শনি–বৃহঃ · সকাল ৯টা – রাত ৯টা",
		},
		closed: { en: "Friday closed", bn: "শুক্রবার বন্ধ" },
		ceoPhones: { en: "CEO / Proprietor", bn: "প্রোপ্রাইটর" },
		whatsappCta: { en: "Chat on WhatsApp", bn: "WhatsApp-এ চ্যাট করুন" },
		rights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
		branchesLine: {
			en: "Farmgate · Mirpur-10 · Mohakhali",
			bn: "ফার্মগেট · মিরপুর-১০ · মহাখালী",
		},
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
