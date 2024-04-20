'use server';
// TODO: Update message content for email.
// TODO: Return error or success status.

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from 'lib/firebase';

import type { TContactFormItems } from 'lib/types';

export const submitContactForm = async ({
	name,
	email,
	message,
}: TContactFormItems) => {
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
