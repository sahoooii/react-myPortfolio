import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';
import SkillCategory from 'components/skills/SkillCategory';
import skillCategories from 'components/data/skills/skillCategories';

const Skills = ({ isJp }) => {
	const subTitleStyle =
		'mt-10 md:mb-14 mb-7 tracking-wide text-lg sm:text-xl leading-7';

	return (
		<section id='skills' className='sm:pt-40 pt-20 pb-40'>
			{/* Heading */}
			<motion.div
				className='md:w-1/2 m-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
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
						<p className={`${subTitleStyle} font-jp`}>
							現在の開発で使用している主要な技術とツール
						</p>
					</div>
				) : (
					<div>
						<p className={`${subTitleStyle} font-opensans`}>
							Core technologies and tools behind my development workflow.
						</p>
					</div>
				)}
			</motion.div>

			<div className='flex justify-center'>
				<motion.div
					className='grid md:grid-cols-2 gap-10 items-stretch'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					{/* Skills categories */}
					{skillCategories.map((category) => (
						<SkillCategory
							key={category.title}
							title={category.title}
							languages={category.languages}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
