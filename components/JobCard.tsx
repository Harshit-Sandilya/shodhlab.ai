import { DocumentData } from 'firebase/firestore';
import Link from 'next/link';
import { FC } from 'react';

const JobCard: FC<DocumentData> = ({ job: { title, location, slug } }) => {
	return (
		<div className='flex flex-col justify-between w-full gap-4 p-4 text-white bg-white lg:p-8 lg:items-center lg:flex-row bg-opacity-20 rounded-xl'>
			<div className='flex flex-col gap-4'>
				<span className='text-lg font-medium lg:text-2xl'>{title}</span>
				<span className='text-xs opacity-75 lg:text-base'>
					Location: {location}
				</span>
			</div>

			<Link
				href={`jobs/${slug}`}
				className='blocpx-6 lg:px-8 py-[9px] lg:py-3 text-sm lg:text-base text-white transition duration-200 rounded-full border border-white hover:shadow-xl text-center hover:bg-white hover:text-black'
			>
				Apply Now
			</Link>
		</div>
	);
};

export default JobCard;
