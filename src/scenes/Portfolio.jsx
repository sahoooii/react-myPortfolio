import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import projects from '../components/data/projects';
import LineGradient from '../components/LineGradient';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.5 },
	},
};

const projectVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Portfolio = ({ isJp }) => {
	return (
		<section id='portfolio' className='sm:pt-40 pt-20 pb-40'>
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
					<p className='font-playfair font-semibold text-4xl mb-4'>
						<span className='text-vivid-pink'>Port</span>folio
					</p>
				</div>
				<div className='flex justify-center'>
					<LineGradient width='w-2/3 text-center' />
				</div>

				{isJp ? (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-jp'>
							いくつかの言語を使って作ったポートフォリオです。
							<br />
							Frontend and Backend.
						</p>
					</div>
				) : (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-opensans'>
							Here's my portfolio using multiple languages.
							<br />
							Frontend and Backend.
						</p>
					</div>
				)}
			</motion.div>

			{/* Portfolio */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-2'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={container}
				>
					{/* Row 1 */}
					<div className='flex justify-center items-center p-10 bg-gradient-purple-pink-orange max-w-[400px] max-h-[400px] text-whitish text-3xl font-playfair font-semibold'>
						Frontend
					</div>

					{isJp ? (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeJp, code, demo }) => (
									<motion.div
										variants={projectVariants}
										className='relative'
										key={id}
									>
										<div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 dark:bg-whitish dark:text-bluish-black bg-bluish-black text-whitish z-30 flex flex-col justify-center items-center text-center md:p-10 p-8'>
											<p className='md:text-3xl text-xl font-playfair font-semibold'>
												{title}
											</p>
											<p className='md:text-xl text-base font-playfair font-semibold md:mt-2'>
												{subtitle}
											</p>
											<p className='md:mt-3 mt-2 md:text-base text-[12px] font-jp'>
												{describeJp}
											</p>

											<div className='flex justify-center items-center gap-8 mt-3 md:mt-5'>
												<a
													href={code}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaGithub size={30} />
												</a>
												<a
													href={demo}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaPlayCircle size={30} />
												</a>
											</div>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					) : (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeEn, code, demo }) => (
									<motion.div
										variants={projectVariants}
										className='relative'
										key={id}
									>
										<div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 dark:bg-whitish dark:text-bluish-black bg-bluish-black text-whitish z-30 flex flex-col justify-center items-center text-center md:p-10 p-8 text-deep-blue'>
											<p className='md:text-3xl text-xl font-playfair font-semibold'>
												{title}
											</p>
											<p className='md:text-xl text-base font-playfair font-semibold md:mt-2'>
												{subtitle}
											</p>
											<p className='md:mt-3 mt-2 md:text-base text-[12px] font-opensans'>
												{describeEn}
											</p>
											<div className='flex justify-center items-center space-x-8 mt-3 md:mt-5'>
												<a
													href={code}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaGithub size={30} />
												</a>
												<a
													href={demo}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaPlayCircle size={30} />
												</a>
											</div>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					)}

					<div className='flex justify-center items-center p-10 bg-gradient-green-blue max-w-[400px] max-h-[400px] text-whitish text-3xl font-playfair font-semibold'>
						Backend
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
