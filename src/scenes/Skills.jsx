import React from 'react';
import { motion } from 'framer-motion';
import frontend from 'components/data/frontend';
import backend from 'components/data/backend';
import LineGradient from 'components/LineGradient';
import SkillsData from 'components/skills/SkillsData';

const container = {
	hidden: {},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: -500, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

const Skills = ({ isJp }) => {
	return (
		<section id='skills' className='sm:pt-40 pt-20 pb-40'>
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
						<p className='mt-10 md:mb-14 mb-7 tracking-wide md:text-lg leading-7 font-jp'>
							使える言語、ライブラリ、フレームワーク。
						</p>
					</div>
				) : (
					<div>
						<p className='mt-10 md:mb-14 mb-7 tracking-wide md:text-lg leading-7 font-opensans'>
							These Languages Libraries and Frameworks are what I could use.
						</p>
					</div>
				)}
			</motion.div>

			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-2 gap-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					{/* frontend */}
					<div className='md:p-10 p-5 md:w-[450px] md:h-[500px] w-[300px] font-playfair font-semibold mt-10 rounded-lg'>
						<div className='text-center text-3xl mb-2'>
							<h3>Frontend</h3>
						</div>
						<SkillsData
							languages={frontend}
							container={container}
							item={item}
						/>
					</div>

					{/* Backend */}
					<div className='md:p-10 p-5 md:w-[450px] md:h-[500px] w-[300px] font-playfair font-semibold mt-10 rounded-lg'>
						<div className='text-center text-3xl mb-2'>
							<h3>Backend</h3>
						</div>
						<SkillsData languages={backend} container={container} item={item} />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
