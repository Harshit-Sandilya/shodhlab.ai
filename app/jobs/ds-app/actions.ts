"use server";

import type { TDsJobFormValues } from "components/DsJobForm";
import { Timestamp, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { firestoreDb } from "lib/firebase";

export const submitJobApplication = async ({
  role,
  name,
  email,
  phone,
  contribution,
  superpower,
  problem,
  ambitions,
  proficiency,
  linkedin,
  overtime,
}: TDsJobFormValues) => {
  try {
    const ref = collection(firestoreDb, "ds_applications");
    await addDoc(ref, {
      role,
      name,
      email,
      phone,
      contribution,
      superpower,
      problem,
      ambitions,
      proficiency,
      linkedin,
      overtime,
      submittedAt: Timestamp.now().toDate(),
    });
  } catch (err) {
    console.error(
      `Failed to add form submission to Firebase. Error details: ${err}`,
    );
  }
};
