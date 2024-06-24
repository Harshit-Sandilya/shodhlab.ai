// TODO: Error Handling

import {
  type DocumentData,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { firestoreDb } from "lib/firebase";

type TReturnType = DocumentData[];

export const getJobsList = async () => {
  const jobPostsRef = collection(firestoreDb, "job_mappings");
  const q = query(jobPostsRef);

  const querySnapshot = await getDocs(q);

  const jobsList: TReturnType = [];

  querySnapshot.forEach((doc) => {
    jobsList.push(doc.data());
  });

  return jobsList;
};
