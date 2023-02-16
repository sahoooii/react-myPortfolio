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

				<form action='#' method='post' className='mt-10'>
					<div className='md:grid md:grid-cols-2 grid gap-y-6'>
						<div className='border-b-2 border-slate-500 mx-auto md:w-[80%] sm:w-[90%] w-full'>
							<label for='name'></label>
							<input
								type='text'
								placeholder='My name is'
								name='name'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none font-opensans  placeholder:uppercase'
								required
							/>
						</div>
						<div className='border-b-2 border-slate-500 md:w-[80%] sm:w-[90%] w-full mx-auto'>
							<label for='name'></label>
							<input
								type='text'
								placeholder='My number is'
								name='telephone'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none font-opensans placeholder:uppercase'
								required
							/>
						</div>
					</div>

					<div className='mt-6'>
						<div className='border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label for='email'></label>
							<input
								type='email'
								placeholder='My e-mail is'
								name='email'
								className='dark:bg-bluish-black bg-whitish p-2 outline-none font-opensans placeholder:uppercase'
								required
							/>
						</div>

						<div className='mt-6 border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label for='subject'></label>
							<select
								className='dark:bg-bluish-black bg-whitish p-2 outline-none w-[95%] text-slate-400 font-opensans placeholder:capitalize'
								placeholder='Subject line'
								name='subject'
								required
							>
								<option disabled hidden selected>
									SUBJECT LINE
								</option>
								<option>I'd like to offer you a job</option>
								<option>I'd like to ask a question</option>
								<option>I'd like to have a casual interview with you.</option>
							</select>
						</div>

						<div className='mt-6 border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label for='message'></label>
							<textarea
								name='message'
								placeholder="I'd like to chat about"
								className='dark:bg-bluish-black bg-whitish p-2 outline-none w-full font-opensans placeholder:uppercase'
								cols='30'
								rows='5'
								required
							></textarea>
						</div>
					</div>

					<div className='m-12 rounded-sm md:w-[45%] w-full mx-auto bg-gradient-purple-pink-orange p-0.5'>
						<input
							type='submit'
							value='SEND MESSAGE'
							className='dark:bg-bluish-black bg-whitish font-semibold hover:text-vivid-pink transition duration-500 w-full h-full flex items-center justify-center py-3 font-playfair group cursor-pointer'
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
