import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='w-full px-4 py-16 bg-black border-t border-gray-900 shadow-sm'>
			<div className='container flex flex-col-reverse justify-between gap-16 mx-auto lg:flex-row'>
				<div className='flex flex-col items-center gap-4 lg:items-start'>
					<Link href='/'>
						<Image
							src='/logo.jpg'
							alt='shodhLab Text Logo'
							width={150}
							height={48}
						/>
					</Link>

					<p className='text-sm text-center text-white lg:text-left'>
						<span>Crafting AI-Driven</span>
						<br />
						<span>Solutions for Tomorrow</span>
					</p>

					<p className='lg:mt-16 text-neutral-700'>
						&copy; {new Date().getFullYear()} Shodh.AI. All Rights
						Reserved.
					</p>
				</div>
				<nav className='flex justify-around gap-4 text-white lg:justify-start lg:flex-col text-medium'>
					<Link href='/'>Home</Link>
					<Link href='/jobs'>Careers</Link>
					<Link href='/contact'>Contact</Link>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
