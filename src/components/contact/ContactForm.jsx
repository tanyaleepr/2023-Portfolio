import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
	const form = useRef();
 
	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
		emailjs.sendForm('SERVICE_ID', 'EMPLATE_ID', form.current, 'PKEY')
			.then((result) => {
					// show the user a success message
			}, (error) => {
					// show the user an error
			});
	};
	
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
			<form ref={form} onSubmit={sendEmail}
			
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						name="user_name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						name="user_email"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							value="Send"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
}
export default EmailContactForm;
