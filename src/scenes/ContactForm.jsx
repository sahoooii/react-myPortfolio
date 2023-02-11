import React from 'react';
import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';

const ContactForm = () => {
	return (
		<section id='contact' className='py-48'>
			{/* Heading */}
			<motion.div
				className='md:w-1/2 m-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl mb-6'>
						Contact &nbsp;<span className='text-vivid-pink'>Me</span>
					</p>
					<div className='flex justify-center my-5'>
						<LineGradient width='w-2/3 text-center' />
					</div>
				</div>
			</motion.div>

			{/* form */}
			<div className='border-2 border-slate-500 md:w-[750px] sm:w-[600px] w-[300px] mx-auto p-10'>
				<h1 className='font-montserrat sm:text-4xl text-2xl text-center sm:pb-6 pb-2'>
					&bull; Keep in Touch &bull;
				</h1>
				<div className='border-b-2 border-slate-500 w-[80px] mx-auto'></div>
				<div className='mt-4 flex items-center justify-center'>
					<img
						src='../assets/phone-icon.png'
						alt='phone-icon'
						className='sm:w-[80px] w-[60px] hover:scale-75 duration-300'
					/>
				</div>

				<form
					action='#'
					method='post'
					className='mt-10
				'
				>
					<div className='md:grid md:grid-cols-2 md:gap-x-10 grid gap-y-6'>
						<div className='border-b-2 border-slate-500 md:w-full w-2/3 mx-auto'>
							<label for='name'></label>
							<input
								type='text'
								placeholder='My name is'
								name='name'
								id='name_input'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none'
								required
							/>
						</div>
						<div className='border-b-2 border-slate-500 md:w-full w-2/3 mx-auto'>
							<label for='name'></label>
							<input
								type='number'
								placeholder='My number is'
								name='telephone'
								id='telephone_input'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none'
								required
							/>
						</div>
					</div>

					<div className='mt-6'>
						<div className='border-b-2 border-slate-500 md:w-full w-2/3 mx-auto'>
							<label for='email'></label>
							<input
								type='email'
								placeholder='My e-mail is'
								name='email'
								id='email_input'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none'
								required
							/>
						</div>

						<div className=''>
							<label for='subject'></label>
							<select
								className='dark:bg-bluish-black bg-whitish p-2 outline-none'
								placeholder='Subject line'
								name='subject'
								id='subject_input'
								required
							>
								<option disabled hidden selected>
									Subject line
								</option>
								<option>I'd like to offer you a job</option>
								<option>I'd like to ask a question</option>
								<option>I'd like to have a casual interview with you.</option>
							</select>
						</div>
						<div class='message'>
							<label for='message'></label>
							<textarea
								name='message'
								placeholder="I'd like to chat about"
								id='message_input'
								cols='30'
								rows='5'
								required
							></textarea>
						</div>
					</div>

					<div class='submit'>
						<input type='submit' value='Send Message' id='form_button' />
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
