import React from 'react';
import { motion } from 'framer-motion';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import sass from '../assets/sass.png';
import vue from '../assets/vuejs.png';
import react from '../assets/react.png';
import php from '../assets/php.png';
import laravel from '../assets/laravel.png';
import sql from '../assets/mysql.png';
import github from '../assets/github.png';
import LineGradient from '../components/LineGradient';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Skills = ({ isJp }) => {
	return (
		<section id='skills' className='pt-40 pb-40'>
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
						My &nbsp;<span className='text-vivid-pink'>Skills</span>
					</p>
				</div>
				<div className='flex justify-center'>
					<LineGradient width='w-2/3 text-center' />
				</div>

				{isJp ? (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-jp'>
							使える言語、ライブラリ、フレームワーク。
						</p>
					</div>
				) : (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-opensans'>
							These Languages Libraries and Frameworks are what I could use.
						</p>
					</div>
				)}
			</motion.div>

			{/* skills */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-2 gap-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='md:p-10 p-5 md:w-[400px] md:h-[400px] w-[300px] bg-gradient-purple-pink-orange font-playfair font-semibold mt-10 rounded-lg'>
						<div className='text-center text-3xl mb-2'>
							<h3>Frontend</h3>
						</div>

						<motion.div
							className='container'
							variants={container}
							initial='hidden'
							animate='visible'
						>
							<div className='items-center justify-center grid grid-cols-3 md:gap-x-4 gap-x-3 md:gap-y-6 gap-y-8 text-center py-4'>
								<div className='shadow-md hover:scale-105 duration-500 md:py-4 py-3 rounded-lg shadow-orange-600'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
								<div className='shadow-md hover:scale-105 duration-500 md:py-4 py-3 rounded-lg shadow-orange-500'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
								<div className='shadow-md hover:scale-105 duration-500 md:py-4 py-3 rounded-lg shadow-orange-500'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
								<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
								<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
								<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
									<img
										src='../assets/html.png'
										alt='html'
										className='mx-auto w-14'
									/>
									<p className='text-xs font-opensans'>HTML</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Backend */}
					<div className=' p-10 md:w-[400px] md:h-[400px] w-[300px] bg-gradient-green-blue font-playfair font-semibold mt-10 rounded-lg'>
						<div className='text-center text-3xl mb-2'>
							<h3>Backend</h3>
						</div>
						<div className='items-center justify-center grid grid-cols-2 gap-x-4 gap-y-6 text-center py-4'>
							<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
								<img
									src='../assets/html.png'
									alt='html'
									className='mx-auto w-14'
								/>
								<p className='text-xs font-opensans'>HTML</p>
							</div>
							<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
								<img
									src='../assets/html.png'
									alt='html'
									className='mx-auto w-14'
								/>
								<p className='text-xs font-opensans'>HTML</p>
							</div>
							<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
								<img
									src='../assets/html.png'
									alt='html'
									className='mx-auto w-14'
								/>
								<p className='text-xs font-opensans'>HTML</p>
							</div>
							<div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500'>
								<img
									src='../assets/html.png'
									alt='html'
									className='mx-auto w-14'
								/>
								<p className='text-xs font-opensans'>HTML</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
