'use client';
// TODO: Separate out cards into their own reusable component.
// TODO: Handle focus and active states for input fields and submit button.
// TODO: Display error messages and add schema validation to formik.
// TODO: Add captcha to prevent spam.

import { useFormik } from 'formik';
import Link from 'next/link';

import { IconArrowUpRight, IconMailFilled } from '@tabler/icons-react';

import { submitContactForm } from './actions';

import type { TContactFormItems } from 'lib/types';

export default function Page() {
	const formik = useFormik<TContactFormItems>({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		onSubmit: (values) => {
			submitContactForm(values as TContactFormItems);
		},
	});

	return (
		<div className='w-full min-h-screen bg-black'>
			<div className='container flex flex-col justify-center w-full gap-6 p-4 pt-24 mx-auto item-center lg:w-2/3'>
				<h1 className='inline-block text-4xl lg:text-6xl lg:leading-snug font-medium text-center text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-30% bg-clip-text text-balance'>
					How can we help?
				</h1>

				<h3 className='text-sm w-full lg:text-xl text-center text-gray-400 text-balance mx-auto lg:max-w-[45ch]'>
					Get in touch with our sales and support teams for demos,
					onboarding support, or product questions.
				</h3>

				<div className='grid gap-4 my-8 lg:my-16 lg:grid-cols-2'>
					<div className='flex flex-col gap-4'>
						{/* Cards */}
						<div className='flex flex-col gap-2 mb-4'>
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

						<div className='flex flex-col gap-2 mt-4'>
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

					<div className='flex flex-col gap-4 my-4 border rounded-lg lg:my-0 border-neutral-700 bg-neutral-900'>
						<p className='p-4 text-white border-b border-neutral-700'>
							Tell us how we can help
						</p>

						<form
							onSubmit={formik.handleSubmit}
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
								name='name'
								placeholder='John Doe'
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
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
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
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
								value={formik.values.message}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
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
									className='w-1/2 px-6 py-3 text-xs border rounded-full lg:w-auto border-neutral-700 text-neutral-300 hover:text-white hover:bg-gradient-to-b from-blue-500 to-blue-600'
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
