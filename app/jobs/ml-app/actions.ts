'use server';

import { addDoc, collection, getDocs, query, Timestamp, where } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import matter from 'gray-matter';
import { firebaseStorage, firestoreDb } from 'lib/firebase';
import { remark } from 'remark';
import html from 'remark-html';

import type { TJobFormValues } from 'lib/types';
type TReturnType = {
	status: 'ok' | 'error' | 'document_not_found';
	data: {
		title: string;
		contentHtml: string;
	} | null;
};

export const submitJobApplication = async ({
	role,
	name,
	description,
	projects,
	linkedin,
	university,
	course
}: TJobFormValues) => {
	try {
		const ref = collection(firestoreDb, 'job_applications');
		await addDoc(ref, {
			role,
			name,
			description,
			projects,
			linkedin,
			university,
			course,
			submittedAt: Timestamp.now().toDate(),
		});
	} catch (err) {
		console.error(
			`Failed to add form submission to Firebase. Error details: ${err}`
		);
	}
};

export const getJobData = async (slug: string): Promise<TReturnType> => {
	const jobPostsRef = collection(firestoreDb, 'job_mappings');
	const q = query(jobPostsRef, where('slug', '==', slug));

	const querySnapshot = await getDocs(q);

	const jobInfo = querySnapshot.docs[0]?.data();

	if (jobInfo) {
		try {
			const url = await getDownloadURL(
				ref(firebaseStorage, jobInfo.file)
			);

			if (!url) {
				return {
					status: 'document_not_found',
					data: null,
				};
			}

			const res = await fetch(url);

			if (!res.ok) throw new Error('Failed to fetch Job Description');

			const fileContent = await res.text();

			const matterResult = matter(fileContent);
			const processedContent = remark()
				.use(html)
				.process(matterResult.content);

			return {
				status: 'ok',
				data: {
					title: jobInfo.title as string,
					contentHtml: (await processedContent).toString(),
				},
			};
		} catch (err) {
			console.error(
				`Error while fetching Job Info. Error details: ${err}`
			);

			return {
				status: 'error',
				data: null,
			};
		}
	}

	return {
		status: 'error',
		data: null,
	};
};
