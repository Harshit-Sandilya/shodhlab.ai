import { JobCard } from 'components';

import { getJobsList } from './actions';

export default async function Page() {
	const jobsList = await getJobsList();

	return (
		<div className='w-full min-h-screen bg-black'>
			<div className='container flex flex-col justify-center w-3/4 gap-8 p-4 pt-24 mx-auto lg:w-2/3'>
				<h1 className='inline-block text-4xl leading-snug lg:text-6xl lg:leading-snug font-medium text-center text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-30% bg-clip-text text-balance'>
					Kickstart your career with us
				</h1>
			</div>

			<div className='container flex flex-col w-3/4 gap-4 mx-auto lg:w-2/3'>
				{jobsList.map((job) => (
					<JobCard job={job} />
				))}
			</div>
		</div>
	);
}
