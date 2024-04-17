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
		<div className='fixed top-0 w-full bg-black border-b border-gray-900 shadow-sm bg-opacity-60 bg-clip-padding backdrop-blur max-h-24'>
			<div className='container flex items-center justify-between px-4 mx-auto text-sm'>
				<div className='flex items-center gap-10 py-4'>
					<Link href='/'>
						<Image
							src='/logo-name.png'
							alt='shodhLab Text Logo'
							width={192}
							height={108}
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
							href='/careers'
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
					className='px-4 py-2 text-white transition duration-200 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 focus:ring-2 focus:ring-blue-400 hover:shadow-xl'
				>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
