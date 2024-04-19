// TODO: Create type for "html" parameter in "sendEmail".

import { createTransport } from 'nodemailer';

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: process.env.NODEMAILER_EMAIL,
		pass: process.env.NODEMAILER_PASSWORD,
	},
});

export const sendEmail = async (to: string, subject: string, html: any) => {
	const mailOptions = {
		from: process.env.NODEMAILER_EMAIL ?? 'no-reply@shodh.ai',
		to,
		subject,
		html,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
	} catch (err) {
		console.error(`Failed to send the email. Error details: ${err}`);
	}
};
