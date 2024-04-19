import { collection, getDocs, query, where } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import matter from 'gray-matter';
import { firebaseStorage, firestoreDb } from 'lib/firebase';
import { remark } from 'remark';
import html from 'remark-html';

type TReturnType = {
	status: 'ok' | 'error' | 'document_not_found';
	data: {
		title: string;
		contentHtml: string;
	} | null;
};

export const getJobData = async (slug: string): Promise<TReturnType> => {
	const jobPostsRef = collection(firestoreDb, 'job_mappings');
	const q = query(jobPostsRef, where('slug', '==', slug));

	const querySnapshot = await getDocs(q);

	let jobInfo = querySnapshot.docs[0]?.data();

	if (jobInfo) {
		console.log(jobInfo.file);
		return getDownloadURL(ref(firebaseStorage, jobInfo.file))
			.then(async (url) => {
				console.log(url);
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
			})
			.catch((err) => {
				console.error(`${err}`);

				return {
					status: 'error',
					data: null,
				};
			});
	}

	return {
		status: 'document_not_found',
		data: null,
	};
};
