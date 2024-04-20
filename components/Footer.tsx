import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='w-full px-4 py-16 bg-black border-t border-gray-900 shadow-sm'>
			<div className='container flex justify-between mx-auto'>
				<div className='flex flex-col gap-4'>
					<Link href='/'>
						<Image
							src='/logo-name.png'
							alt='shodhLab Text Logo'
							width={150}
							height={48}
						/>
					</Link>

					<p className='text-sm text-white'>
						<span>Crafting AI-Driven</span>
						<br />
						<span>Solutions for Tomorrow</span>
					</p>

					<p className='mt-16 text-neutral-700'>
						&copy; {new Date().getFullYear()} Shodh.AI. All Rights
						Reserved.
					</p>
				</div>
				<nav className='flex flex-col gap-4 text-white text-medium'>
					<Link href='/'>Home</Link>
					<Link href='/jobs'>Careers</Link>
					<Link href='/contact'>Contact</Link>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
