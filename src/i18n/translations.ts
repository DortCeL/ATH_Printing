export type Lang = "en" | "bn";

export const translations = {
	// Navbar
	nav: {
		overview: { en: "Overview", bn: "পরিচিতি" },
		services: { en: "Services", bn: "সেবাসমূহ" },
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
	},

	// Hero
	hero: {
		badge: {
			en: "Professional Printing Services",
			bn: "পেশাদার প্রিন্টিং সেবা",
		},
		heading1: { en: "AutoCAD ", bn: "অটোক্যাড " },
		heading2: { en: "Training Home", bn: "ট্রেনিং হোম" },
		heading3: { en: "ATH", bn: "এ টি এইচ" },
		description: {
			en: "Maps, architectural plans, engineering drawings - printed with precision, speed, and unmatched quality. Trusted by professionals across industries.",
			bn: "ম্যাপকপি, স্থাপত্য নকশা, ইঞ্জিনিয়ারিং ড্রয়িং - নির্ভুলতা, গতি এবং অতুলনীয় মানের সাথে প্রিন্ট করা হয়। সকল শিল্পের পেশাদারদের বিশ্বস্ত।",
		},
		viewPricing: { en: "View Pricing", bn: "মূল্য দেখুন" },
	},

	// Services
	services: {
		badge: { en: "What We Do", bn: "আমরা যা করি" },
		heading: {
			en: "Every Print Job. One Trusted Partner.",
			bn: "সব ধরনের প্রিন্ট। এক বিশ্বস্ত প্রতিষ্ঠান।",
		},
		subtitle: {
			en: "From a single A4 photocopy to 60,000 large-format maps, ATH has delivered it all since 1994.",
			bn: "একটি A4 ফটোকপি থেকে ৬০,০০০ বড় ফরম্যাটের মানচিত্র, ১৯৯৪ সাল থেকে ATH সবই সরবরাহ করেছে।",
		},
		items: [
			{
				title: {
					en: "Map Copy & Blueprint Printing",
					bn: "ম্যাপ কপি ও ব্লুপ্রিন্ট প্রিন্টিং",
				},
				description: {
					en: "Mouza maps, cadastral sheets, tracing and ammonia blueprints — our specialty since 1996.",
					bn: "মৌজা ম্যাপ, ভূমি নকশা, ট্রেসিং ও অ্যামোনিয়া ব্লুপ্রিন্ট — ১৯৯৬ সাল থেকে আমাদের বিশেষত্ব।",
				},
			},
			{
				title: {
					en: "Large Format Printing & Scanning (A0–A4)",
					bn: "বড় ফরম্যাট প্রিন্টিং ও স্ক্যানিং (A0–A4)",
				},
				description: {
					en: 'Up to 42" wide plotters for architectural plans and engineering drawings, plus precision scanning.',
					bn: 'স্থাপত্য নকশা ও ইঞ্জিনিয়ারিং ড্রয়িংয়ের জন্য ৪২" পর্যন্ত প্লটার, সাথে নির্ভুল স্ক্যানিং।',
				},
			},
			{
				title: {
					en: "Photocopy & Document Printing",
					bn: "ফটোকপি ও ডকুমেন্ট প্রিন্টিং",
				},
				description: {
					en: "High-volume photocopying and document runs — up to 20,000 A4 copies every single day.",
					bn: "উচ্চ-পরিমাণ ফটোকপি ও ডকুমেন্ট প্রিন্ট — প্রতিদিন ২০,০০০ A4 কপি পর্যন্ত।",
				},
			},
			{
				title: {
					en: "Color & Black / White Printing",
					bn: "রঙিন ও সাদা-কালো প্রিন্টিং",
				},
				description: {
					en: "Vivid, colour-accurate output on 100 GSM and offset paper, or crisp economical B/W.",
					bn: "১০০ GSM ও অফসেট কাগজে উজ্জ্বল, নির্ভুল রঙিন আউটপুট, অথবা পরিষ্কার সাশ্রয়ী সাদা-কালো।",
				},
			},
			{
				title: { en: "Binding & Lamination", bn: "বাইন্ডিং ও লেমিনেশন" },
				description: {
					en: 'Finish your project properly — professional binding and lamination up to 36" wide.',
					bn: 'আপনার কাজ সম্পূর্ণ করুন — ৩৬" পর্যন্ত পেশাদার বাইন্ডিং ও লেমিনেশন।',
				},
			},
		],
		cta: { en: "Send Your Files on WhatsApp", bn: "WhatsApp-এ ফাইল পাঠান" },
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
	},

	// Major Works
	works: {
		badge: { en: "Proven Track Record", bn: "Proven Track Record" },
		heading: {
			en: "Major Works That Speak for Themselves",
			bn: "Major Works That Speak for Themselves",
		},
		subtitle: {
			en: "National-scale projects delivered for government and private sector leaders.",
			bn: "National-scale projects delivered for government and private sector leaders.",
		},
		copies: { en: "copies", bn: "copies" },
		banner: {
			en: "copies delivered in flagship national projects",
			bn: "copies delivered in flagship national projects",
		},
		items: [
			{
				quantity: "60,000",
				title: {
					en: "Mouza Maps of Entire Bangladesh",
					bn: "Mouza Maps of Entire Bangladesh",
				},
				client: {
					en: "Bangladesh Bureau of Statistics",
					bn: "Bangladesh Bureau of Statistics",
				},
				year: { en: "2005", bn: "2005" },
				note: { en: "100 GSM white paper", bn: "100 GSM white paper" },
			},
			{
				quantity: "60,000",
				title: {
					en: "Tracing & Ammonia Printing — Detailed Area Plan (DAP)",
					bn: "Tracing & Ammonia Printing — Detailed Area Plan (DAP)",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "Design Development Company (DDC)",
				},
				year: { en: "2011", bn: "2011" },
				note: {
					en: "Large-format blueprint output",
					bn: "Large-format blueprint output",
				},
			},
			{
				quantity: "38,000",
				title: {
					en: "Color Prints — Airport 3rd Terminal Project",
					bn: "Color Prints — Airport 3rd Terminal Project",
				},
				client: {
					en: "Airport 3rd Terminal Project",
					bn: "Airport 3rd Terminal Project",
				},
				year: { en: "2025", bn: "2025" },
				note: {
					en: '23"×36" 100 GSM white paper',
					bn: '23"×36" 100 GSM white paper',
				},
			},
			{
				quantity: "38,000",
				title: {
					en: "Color Map of Khulna Division",
					bn: "Color Map of Khulna Division",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "Design Development Company (DDC)",
				},
				year: { en: "2025", bn: "2025" },
				note: {
					en: '30"×40" 100 GSM offset paper',
					bn: '30"×40" 100 GSM offset paper',
				},
			},
			{
				quantity: "15,000",
				title: {
					en: "Tracing & Ammonia Printing — DAP",
					bn: "Tracing & Ammonia Printing — DAP",
				},
				client: {
					en: "Design Development Company (DDC)",
					bn: "Design Development Company (DDC)",
				},
				year: { en: "2022–23", bn: "2022–23" },
				note: {
					en: "Detailed Area Plan implementation",
					bn: "Detailed Area Plan implementation",
				},
			},
		],
	},

	// Machinery
	machinery: {
		badge: { en: "Our Machinery", bn: "Our Machinery" },
		heading: {
			en: "An Arsenal of Industrial Printing Power",
			bn: "An Arsenal of Industrial Printing Power",
		},
		subtitle: {
			en: "One of the largest fleets of large-format plotters in Bangladesh — backed by air-conditioned rooms and standby power for zero downtime.",
			bn: "One of the largest fleets of large-format plotters in Bangladesh — backed by air-conditioned rooms and standby power for zero downtime.",
		},
		machines: [
			{
				name: { en: "Large Format Plotters", bn: "Large Format Plotters" },
				count: 15,
				detail: { en: '24" · 36" · 42" widths', bn: '24" · 36" · 42" widths' },
			},
			{
				name: { en: '36" Map Copiers', bn: '36" Map Copiers' },
				count: 6,
				detail: {
					en: "High-volume map duplication",
					bn: "High-volume map duplication",
				},
			},
			{
				name: { en: "Ammonia Printers", bn: "Ammonia Printers" },
				count: 4,
				detail: {
					en: "Classic blueprint output",
					bn: "Classic blueprint output",
				},
			},
			{
				name: { en: "A3 Printers", bn: "A3 Printers" },
				count: 10,
				detail: {
					en: "Everyday document printing",
					bn: "Everyday document printing",
				},
			},
			{
				name: { en: "A3 Photocopiers", bn: "A3 Photocopiers" },
				count: 6,
				detail: {
					en: "4 color + 2 black & white",
					bn: "4 color + 2 black & white",
				},
			},
			{
				name: { en: "Lamination Machines", bn: "Lamination Machines" },
				count: 3,
				detail: { en: 'Up to 36" width', bn: 'Up to 36" width' },
			},
		],
		extras: {
			computers: { en: "Computers", bn: "Computers" },
			generators: { en: "Standby Generators", bn: "Standby Generators" },
		},
		imageAlt: {
			en: "Large format plotter printing a detailed map",
			bn: "Large format plotter printing a detailed map",
		},
		capacityHeading: {
			en: "Daily Printing Capacity",
			bn: "Daily Printing Capacity",
		},
		capacityUnit: { en: "copies / day", bn: "copies / day" },
		capacity: [
			{ size: "A4", value: "20,000" },
			{ size: "A3 Color", value: "10,000" },
			{ size: "A2", value: "6,000" },
			{ size: "A1", value: "4,000" },
			{ size: "E0", value: "3,000" },
			{ size: "A0", value: "2,000" },
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
