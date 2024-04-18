'use server';

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from 'lib/firebase';

export type TConactFormItems = {
	name: string;
	email: string;
	message: string;
};

export const submitContactForm = async ({
	name,
	email,
	message,
}: TConactFormItems) => {
	try {
		const ref = collection(firestoreDb, 'contact_form_submissions');
		await addDoc(ref, {
			name,
			email,
			message,
			submittedAt: Timestamp.now().toDate(),
		});
	} catch (err) {
		console.error(
			`Failed to add form submission to Firebase. Error details: ${err}`
		);
	}
};
