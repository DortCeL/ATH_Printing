import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const ProprietorCard = ({ image, alt, className = "" }) => {
	const proprietor = {
		name: "Md Anwar Hossain",
		title: "Proprietor",
		company: "AutoCAD Training Home (ATH)",
		phone: "+880 1711-123456",
		email: "ath_cad@yahooo.com",
		social: {
			facebook: "https://www.facebook.com/hajianwar.hossain.54",
		},
	};

	return (
		<div
			className={`flex flex-col sm:flex-row items-center sm:items-start gap-8 p-6 bg-card border border-border rounded-2xl shadow-sm ${className}`}
		>
			{/* Large rectangular image - keeps aspect ratio */}
			<div className='w-full sm:w-48 md:w-56 lg:w-64 shrink-0'>
				<img
					src={image}
					alt={alt}
					className='w-full h-auto object-cover rounded-lg'
					loading='lazy'
				/>
			</div>

			<div className='flex-1 text-center sm:text-left py-10'>
				<h3 className='text-3xl font-heading font-bold text-foreground'>
					{proprietor.name}
				</h3>
				<p className='text-accent font-medium text-md mb-3'>
					{proprietor.title}
				</p>
				<p className='text-gray-400 font-medium text-lg my-5'>
					{proprietor.company}
				</p>
				<div className='space-y-1 text-sm text-muted-foreground'>
					<div className='flex items-center justify-center sm:justify-start gap-2'>
						<Phone size={16} className='text-accent' />
						<span>{proprietor.phone}</span>
					</div>
					<div className='flex items-center justify-center sm:justify-start gap-2'>
						<Mail size={16} className='text-accent' />
						<span>{proprietor.email}</span>
					</div>
				</div>
				<div className='flex justify-center sm:justify-start gap-4 mt-4'>
					<a
						href={proprietor.social.facebook}
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-accent transition-colors'
					>
						<Facebook size={20} />
						<span>Facebook</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProprietorCard;
