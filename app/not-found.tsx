import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex items-center w-screen h-screen bg-black'>
			<div className='container flex flex-col items-center justify-center px-5 mx-auto text-white md:flex-row'>
				<div className='flex flex-col items-center max-w-md'>
					<div className='my-4 text-5xl font-bold text-center'>
						404
					</div>
					<p className='my-4 text-2xl font-light leading-normal text-center md:text-3xl'>
						Sorry we couldn't find this page.
					</p>
					<p className='mb-8 text-center opacity-75'>
						But dont worry, you can find plenty of other things on
						our homepage.
					</p>

					<Link
						href='/'
						className='px-6 lg:px-8 py-[9px] lg:py-3 text-sm lg:text-base text-white transition duration-200 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 focus:ring-2 focus:ring-blue-400 hover:shadow-xl'
					>
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
