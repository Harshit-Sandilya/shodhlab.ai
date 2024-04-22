import { JobForm } from 'components';

import { getJobData } from './actions';
import styles from './jobs.module.css';

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const { status, data } = await getJobData('system-intern');

	return (
		<div className='w-full min-h-screen py-8 bg-black'>
			{status === 'ok' && data && (
				<div className='container flex flex-col justify-center w-3/4 gap-8 p-4 pt-24 mx-auto lg:w-2/3'>
					<h1 className='inline-block text-4xl leading-snug lg:text-6xl lg:leading-snug font-medium text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-30% bg-clip-text text-balance'>
						{data.title}
					</h1>

					<div
						dangerouslySetInnerHTML={{
							__html: data.contentHtml,
						}}
						id='markdown-content'
						className={styles.markdown}
					/>
					<JobForm role={data.title} />
				</div>
			)}
			{status !== 'ok' && (
				<div className='container flex flex-col justify-center w-3/4 gap-8 p-4 pt-24 mx-auto lg:w-2/3'>
					<h1 className='inline-block text-4xl leading-snug lg:text-6xl lg:leading-snug font-medium text-transparent bg-gradient-to-br from-white to-[rgba(255, 255, 255, 0.38)] from-30% bg-clip-text text-balance'>
						Error!
					</h1>
				</div>
			)}
		</div>
	);
}
