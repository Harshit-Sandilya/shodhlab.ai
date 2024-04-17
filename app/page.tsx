import { Navbar } from '@/components';

export default function Page() {
	return (
		<div className='w-full min-h-screen bg-black'>
			<Navbar />

			<div className='container flex flex-col items-center w-3/4 gap-8 p-4 mx-auto lg:w-2/3'>
				<h1 className='inline-block text-5xl leading-snug font-medium text-center text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-50% bg-clip-text text-balance mt-32'>
					Crafting AI-Driven Solutions <br />
					for Tomorrow
				</h1>

				<h3 className='text-center text-gray-400 text-balance'>
					India's First Deep-Learning Laboratory Dedicated to AI
					security, shaping a secure and innovative future. Join us to
					build AI-driven solutions across Medicine, Governance,
					Robotics, Biotech, Chip development, energy, material
					science.
				</h3>
			</div>
		</div>
	);
}
