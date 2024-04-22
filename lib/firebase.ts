import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	appId: process.env.FIREBASE_APP_ID,
	apiKey: process.env.FIREBASE_API_KEY,
	projectId: process.env.FIREBASE_PROJECT_ID,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb = initializeFirestore(firebaseApp, {
	experimentalForceLongPolling: true,
});
const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, firestoreDb, firebaseStorage };
