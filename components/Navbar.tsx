// TODO: Hamburger menu for smaller screens.

import Image from 'next/image';
import Link from 'next/link';

const HamburgerIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			className='w-8 h-8'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h164 12h16M4 18h16'
			/>
		</svg>
	);
};

const Navbar = () => {
	return (
		<div className='fixed top-0 z-50 w-full p-4 bg-black border-b border-gray-900 shadow-sm bg-opacity-60 bg-clip-padding backdrop-blur max-h-20'>
			<div className='container flex items-center justify-between mx-auto text-sm'>
				<div className='flex items-center gap-10'>
					<Link href='/'>
						<Image
							src='/logo-name.png'
							alt='shodhLab Text Logo'
							width={150}
							height={48}
						/>
					</Link>

					<nav className='items-center hidden gap-8 lg:flex'>
						<Link
							href='/blog'
							className='text-gray-300 hover:text-white'
						>
							Blog
						</Link>
						<Link
							href='/jobs'
							className='text-gray-300 hover:text-white'
						>
							Careers
						</Link>
						<Link
							href='/models'
							className='text-gray-300 hover:text-white'
						>
							Models
						</Link>
					</nav>
				</div>

				<Link
					href='/contact'
					className='px-6 lg:px-8 py-[9px] lg:py-3 text-sm lg:text-base text-white transition duration-200 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 focus:ring-2 focus:ring-blue-400 hover:shadow-xl'
				>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
