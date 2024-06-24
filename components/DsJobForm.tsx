"use client";

import { useState } from "react";

import { submitJobApplication } from "app/jobs/ds-app/actions";
import { useFormik } from "formik";

export type TDsJobFormValues = {
  role: "ds-app";
  name: string;
  email: string;
  phone?: number;
  contribution: string;
  superpower: string;
  problem: string;
  ambitions: string;
  proficiency: string;
  linkedin: string;
  overtime: boolean;
};

const DsJobForm = () => {
  const formik = useFormik<TDsJobFormValues>({
    initialValues: {
      role: "ds-app",
      name: "",
      email: "",
      phone: undefined,
      contribution: "",
      superpower: "",
      problem: "",
      ambitions: "",
      proficiency: "",
      linkedin: "",
      overtime: false,
    },
    onSubmit: (values) => {
      if (isDisabled) return;

      setDisabled(true);
      submitJobApplication(values);
      setSubmitted(true);
    },
  });

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <div className="my-4 flex flex-col gap-4 rounded-lg border border-neutral-700 bg-neutral-900 lg:my-0">
      <p className="border-neutral-700 border-b p-4 text-white">
        Ready to work with us?
      </p>

      {submitted && (
        <p className="mb-4 text-balance text-center text-gray-400 text-sm lg:text-xl">
          Thanks for submitting your applicaiton. We will get back to you
          shortly!
        </p>
      )}

      {!submitted && (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col px-4 font-light text-sm"
        >
          <label htmlFor="name" className="my-2 text-neutral-500">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="email" className="my-2 text-neutral-500">
            E-mail Address
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="phone" className="my-2 text-neutral-500">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="contribution" className="my-2 text-neutral-500">
            What has been your major contribution in the last 3 years?
          </label>
          <textarea
            rows={4}
            name="contribution"
            value={formik.values.contribution}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="superpower" className="my-2 text-neutral-500">
            Apart from your job, what are the major "superpower" / experiences
            you bring to a team like ours? (We are primarily a deeptech AI
            startup, trying to build Language models of our own and we build
            products around it. I am looking at you as part of the product team)
          </label>
          <textarea
            rows={4}
            name="superpower"
            value={formik.values.superpower}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="problem" className="my-2 text-neutral-500">
            Can you give an example of a major problem that you faced and how
            you went about it?
          </label>
          <textarea
            rows={4}
            name="problem"
            value={formik.values.problem}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="ambitions" className="my-2 text-neutral-500">
            Where do you see your career going in future? What are your
            ambitions? How do you want to see yourself in the next 2-3 years?
          </label>
          <textarea
            rows={4}
            name="ambitions"
            value={formik.values.ambitions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="proficiency" className="my-2 text-neutral-500">
            From the attached job posting that we did. Can you also honestly
            point out the areas that you are proficient in?
          </label>
          <textarea
            rows={4}
            name="proficiency"
            value={formik.values.proficiency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <label htmlFor="linkedin" className="my-2 text-neutral-500">
            LinkedIn Profile URL
          </label>
          <input
            type="text"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-4 rounded border border-neutral-700 bg-neutral-800 p-2 text-neutral-300"
          />

          <div className="flex flex-row-reverse items-center justify-end gap-4">
            <label htmlFor="overtime" className="my-2 text-neutral-500">
              A lot of this job is working overtime, select this checkbox if
              you're up for it.
            </label>
            <input
              type="checkbox"
              name="overtime"
              onChange={formik.handleChange}
              className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-white checked:border-blue-600 checked:bg-blue-600"
            />
          </div>

          <div className="my-4 flex items-center justify-end">
            <button
              type="submit"
              className="w-1/2 rounded-full border border-neutral-700 from-blue-500 to-blue-600 px-6 py-3 text-neutral-300 text-xs lg:w-auto hover:bg-gradient-to-b hover:text-white"
              disabled={isDisabled}
            >
              Apply Now
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DsJobForm;
