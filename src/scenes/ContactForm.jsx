import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import LineGradient from '../components/LineGradient';

const ContactForm = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id='contact' className='sm:py-48 py-24'>
			{/* Heading */}
			<motion.div
				className='md:w-1/2 m-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
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
			<motion.div
				className='mt-20 border-2 border-slate-500 w-[85%] max-w-[750px] mx-auto p-10'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ delay: 0.4, duration: 1 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<h1 className='font-montserrat sm:text-4xl text-xl text-center sm:pt-10 pt-5 sm:pb-6 pb-2'>
					&bull; Keep in Touch &bull;
				</h1>
				<div className='border-b-2 border-slate-500 sm:w-[300px] w-[150px] mx-auto'></div>
				<div className='sm:mt-10 mt-5 flex items-center justify-center'>
					<img
						src='../assets/phone-icon.png'
						alt='phone-icon'
						className='sm:w-[80px] w-[60px] animate-heartbeat'
					/>
				</div>

				<form
					target='_blank'
					onSubmit={onSubmit}
					action='https://formsubmit.co/d8ba071863b209c206352f351fbccf9e'
					method='POST'
					className='mt-10'
				>
					<div className='md:grid-cols-2 grid gap-y-6'>
						<div className='border-b-2 border-slate-500 mx-auto md:w-[80%] sm:w-[90%] w-full'>
							<label htmlFor='name'></label>
							<input
								type='text'
								autoComplete='on'
								placeholder='My name is'
								name='name'
								className='dark:bg-bluish-black bg-whitish w-full p-2 outline-none font-opensans  placeholder:uppercase'
								{...register('name', {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className='text-red-600 mt-1'>
									{errors.name.type === 'required' && 'Please enter your name'}
									{errors.name.type === 'maxLength' &&
										'Max length is 100 char.'}
								</p>
							)}
						</div>
						<div className='border-b-2 border-slate-500 md:w-[80%] sm:w-[90%] w-full mx-auto'>
							<label htmlFor='phone'></label>
							<input
								type='text'
								placeholder='My number is'
								name='phone'
								autoComplete='on'
								className='dark:bg-bluish-black bg-whitish w-full p-2 outline-none font-opensans placeholder:uppercase'
								{...register('phone', {
									required: true,
									// pattern: /^0\d{9,10}$/,
									pattern:
										// /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
										/^^\(?([0-9]{3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/,
								})}
							/>
							{errors.phone && (
								<p className='text-red-600 mt-1'>
									{errors.phone.type === 'required' &&
										'Please enter your number'}
									{errors.phone.type === 'pattern' && 'Invalid phone number.'}
								</p>
							)}
						</div>
					</div>

					<div className='mt-6'>
						<div className='border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label htmlFor='email'></label>
							<input
								type='email'
								placeholder='My e-mail is'
								name='email'
								autoComplete='on'
								className='dark:bg-bluish-black bg-whitish w-full p-2 outline-none font-opensans placeholder:uppercase'
								{...register('email', {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className='text-red-600 mt-1'>
									{errors.email.type === 'required' &&
										'Please enter your email'}
									{errors.email.type === 'pattern' && 'Invalid email address.'}
								</p>
							)}
						</div>

						<div className='mt-6 border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label htmlFor='subject'></label>
							<select
								className='dark:bg-bluish-black bg-whitish p-2 outline-none w-full font-opensans'
								defaultValue={'DEFAULT'}
								name='subject'
								{...register('subject', {
									required: true,
								})}
								required
							>
								<option hidden value=''>
									SELECT FROM HERE
								</option>
								<option value='offer'>I'd like to offer you a job</option>
								<option value='question'>I'd like to ask a question</option>
								<option value='interview'>
									I'd like to have a casual interview with you
								</option>
							</select>
							{errors.subject && (
								<p className='text-red-600 mt-1'>
									{errors.subject.type === 'required' &&
										'This field is required.'}
								</p>
							)}
						</div>

						<div className='mt-6 border-b-2 border-slate-500 sm:w-[90%] w-full mx-auto'>
							<label htmlFor='message'></label>
							<textarea
								name='message'
								placeholder="I'd like to chat about..."
								className='dark:bg-bluish-black bg-whitish p-2 outline-none w-full font-opensans placeholder:uppercase'
								cols='50'
								rows='5'
								{...register('message', {
									required: true,
									maxLength: 5000,
								})}
							></textarea>
							{errors.message && (
								<p className='text-red-600 mt-1'>
									{errors.message.type === 'required' &&
										'Please leave some messages'}
									{errors.message.type === 'maxLength' &&
										'Max length is 5000 char.'}
								</p>
							)}
						</div>
					</div>

					<div className='m-12 rounded-sm md:w-[45%] w-full mx-auto bg-gradient-purple-pink-orange p-0.5 hover:translate-y-0.5 transition duration-500 group'>
						<input
							type='submit'
							value='SEND MESSAGE'
							className='dark:bg-bluish-black bg-whitish font-semibold group-hover:text-vivid-pink group-hover:translate-y-0.3 transition duration-500 w-full h-full flex items-center justify-center py-3 font-playfair cursor-pointer'
						/>
					</div>
				</form>
			</motion.div>
		</section>
	);
};

export default ContactForm;
