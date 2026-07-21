import React from 'react';
import { motion } from 'framer-motion';
import projects from 'components/data/projects';
import LineGradient from 'components/LineGradient';
import ProjectHeader from 'components/portfolio/ProjectHeader';
import ProjectCard from 'components/portfolio/ProjectCard';

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
							エンジニアリングポートフォリオHistory
							<br />
							FEからフルスタック、設計・アーキテクチャ・ユーザー体験を意識して開発したプロジェクト
						</p>
					</div>
				) : (
					<div>
						<p className={`${subTitleStyle} font-opensans`}>
							Featured Projects.
							<br />
							Projects focused on architecture, maintainability, and user
							experience.
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
					{projects.map((project) => (
						<motion.div
							key={project.title ?? project.category}
							variants={projectVariants}
							className='relative'
						>
							{project.type === 'header' ? (
								<ProjectHeader project={project} />
							) : (
								<ProjectCard
									project={project}
									isJp={isJp}
									describeStyle={describeStyle}
								/>
							)}
						</motion.div>
					))}{' '}
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
