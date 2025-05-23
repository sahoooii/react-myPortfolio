import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle, FaLink } from 'react-icons/fa';
import projects from 'components/data/projects';
import LineGradient from 'components/LineGradient';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const projectVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Portfolio = ({ isJp }) => {
	const subTitleStyle =
		'mt-10 mb-14 tracking-wide text-lg sm:text-xl leading-7';
		
	const describeStyle = 'md:mt-3 mt-2 md:text-lg text-sm leading-relaxed';
	return (
		<section id='portfolio' className='sm:pt-40 pt-20 pb-40'>
			{/* Heading */}
			<motion.div
				className='md:w-1/2 m-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8 }}
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
						<p className={`${subTitleStyle} font-jp`}>
							様々な言語を使用して作成
							<br />
							Frontend, Backend, and Full-Stack
						</p>
					</div>
				) : (
					<div>
						<p className={`${subTitleStyle} font-opensans`}>
							Projects built with multiple technologies. <br />
							Frontend, Backend, and Full-Stack
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
					{projects.map(
						({
							id,
							title,
							subtitle,
							src,
							describeJp,
							describeEn,
							code,
							demo,
							link,
						}) => (
							<motion.div
								variants={projectVariants}
								className='relative'
								key={`${id}-${title}`}
							>
								<div
									className={`absolute h-full w-full opacity-0 dark:bg-whitish dark:text-bluish-black bg-bluish-black text-whitish z-30 flex flex-col justify-center items-center text-center md:p-10 p-8 ${
										id === 1 || id === 5 || id === 8 ? (
											<></>
										) : (
											'hover:opacity-80 transition duration-500'
										)
									} `}
								>
									<p className='md:text-3xl text-xl font-playfair font-semibold'>
										{title}
									</p>
									<p className='md:text-xl text-base font-playfair font-semibold md:mt-2'>
										{subtitle}
									</p>

									{isJp ? (
										<p className={`${describeStyle} font-jp`}>{describeJp}</p>
									) : (
										<p className={`${describeStyle} font-opensans`}>
											{describeEn}
										</p>
									)}

									{/* Links */}
									<div className='flex justify-between gap-8 mt-3 md:mt-5'>
										<a
											href={code}
											className='opacity-80 hover:scale-150'
											target='_blank'
											rel='noreferrer'
										>
											<FaGithub size={28} />
										</a>
										{link === '' ? (
											<div></div>
										) : (
											<a
												href={link}
												className='opacity-80 hover:scale-150'
												target='_blank'
												rel='noreferrer'
											>
												<FaLink size={28} />
											</a>
										)}
										<a
											href={demo}
											className='opacity-80 hover:scale-150'
											target='_blank'
											rel='noreferrer'
										>
											<FaPlayCircle size={28} />
										</a>
									</div>
								</div>
								<img
									src={src}
									alt={title}
									className='w-[300px] h-[300px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] object-cover'
								/>
							</motion.div>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
