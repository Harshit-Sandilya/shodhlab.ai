// TODO: Separate out cards into their own reusable component.
// TODO: Handle focus and active states for input fields and submit button.

import Link from 'next/link';

import { IconArrowUpRight, IconMailFilled } from '@tabler/icons-react';

import { submitContactForm } from './actions';

export default function Page() {
	return (
		<div className='w-full min-h-screen bg-black'>
			<div className='container flex flex-col justify-center w-3/4 gap-8 p-4 pt-24 mx-auto lg:w-2/3'>
				<h1 className='inline-block text-6xl leading-snug font-medium text-center text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-30% bg-clip-text text-balance'>
					How can we help?
				</h1>

				<h3 className='text-xl text-center text-gray-400 text-balance'>
					Get in touch with our sales and support teams for demos,
					onboarding support, or product questions.
				</h3>

				<div className='grid gap-4 my-16 lg:grid-cols-2'>
					<div className='flex flex-col gap-4'>
						{/* Cards */}
						<div className='flex flex-col gap-2 mb-6'>
							<p className='text-lg text-white'>
								Join the community
							</p>
							<p className='w-4/5 text-sm font-light text-gray-200'>
								More than 10,000 shodh.ai users share questions
								and best practices in our Discord community
							</p>
							<Link
								href='https://discord.gg/shodh'
								className='flex gap-2 mt-2 text-sm text-gray-400'
							>
								<IconArrowUpRight size={20} />
								<span>Join Discord</span>
							</Link>
						</div>

						<div className='flex flex-col gap-2 mt-6'>
							<p className='text-lg text-white'>
								Join the community
							</p>
							<p className='w-4/5 text-sm font-light text-gray-200'>
								More than 10,000 shodh.ai users share questions
								and best practices in our Discord community
							</p>
							<Link
								href='mailto:hello@shodh.ai'
								className='flex gap-2 mt-2 text-sm text-gray-400'
							>
								<IconMailFilled size={20} />
								<span>hello@shodh.ai</span>
							</Link>
						</div>
					</div>

					<div className='flex flex-col gap-4 border rounded-lg border-neutral-700 bg-neutral-900'>
						<p className='p-4 text-sm text-white border-b border-neutral-700'>
							Tell us how we can help
						</p>

						<form
							action=''
							className='flex flex-col px-4 text-sm font-light'
						>
							<label
								htmlFor='full_name'
								className='my-2 text-neutral-500'
							>
								Full name
							</label>
							<input
								type='text'
								name='full_name'
								id='full_name'
								placeholder='John Doe'
								className='p-2 mb-4 border rounded border-neutral-700 bg-neutral-800 text-neutral-300'
							/>

							<label
								htmlFor='email'
								className='my-2 text-neutral-500'
							>
								Work Email
							</label>
							<input
								type='text'
								name='email'
								id='email'
								placeholder='john.doe@example.com'
								className='p-2 mb-4 border rounded border-neutral-700 bg-neutral-800 text-neutral-300'
							/>

							<label
								htmlFor='message'
								className='my-2 text-neutral-500'
							>
								How can we help?
							</label>
							<textarea
								rows={4}
								name='message'
								id='message'
								placeholder='I am interested in shodh.ai for my team and I would like to learn more about...'
								className='p-2 mb-4 border rounded border-neutral-700 bg-neutral-800 text-neutral-300'
							/>

							<div className='flex items-center justify-between my-4'>
								<p className='text-xs text-neutral-500'>
									You can also email us at&nbsp;
									<span className='text-neutral-300'>
										sales@shodh.ai
									</span>
								</p>

								<button
									type='submit'
									className='px-4 py-2 text-xs border rounded-full border-neutral-700 text-neutral-300'
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
