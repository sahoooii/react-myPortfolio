import React from 'react';
import { motion } from 'framer-motion';
import { links } from 'components/SocialMediaIcons';
import useMediaQuery from 'hooks/useMediaQuery';

const SocialLinks = () => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<>
			{isAboveMediumScreens ? (
				<div className='hidden md:flex flex-col top-[70%] left-0 absolute'>
					<ul>
						{links.map(({ id, name, icon, href, style, download }) => (
							<motion.div
								key={`${id}-${name}`}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.6, duration: 1 }}
								variants={{
									hidden: { opacity: 0, x: -10 },
									visible: { opacity: 1, x: 0 },
								}}
							>
								<li
									className={`${style} flex justify-between items-center w-40 h-14 px-2 dark:bg-gradient-night-sky bg-gradient-day-sky ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-white`}
								>
									<a
										className='flex justify-between items-center w-full px-2'
										href={href}
										download={download}
										target='_blank'
										rel='noreferrer'
									>
										{name} {icon}
									</a>
								</li>
							</motion.div>
						))}
					</ul>
				</div>
			) : (
				<div className='flex justify-center mb-20'>
					<ul className='flex gap-7'>
						{links.map(({ id, name, icon, href }) => (
							<motion.div
								className='flex justify-center'
								key={`${id}-${name}`}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.6, duration: 1 }}
								variants={{
									hidden: { opacity: 0, x: -10 },
									visible: { opacity: 1, x: 0 },
								}}
							>
								<li className='flex dark:bg-gradient-night-sky rounded-full p-2 bg-gradient-day-sky duration-300 text-white hover:scale-150'>
									<a
										className='opacity-80'
										href={href}
										target='_blank'
										rel='noreferrer'
									>
										{icon}
									</a>
								</li>
							</motion.div>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default SocialLinks;
