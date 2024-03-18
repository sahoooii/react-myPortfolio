import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from './Link';

const MobileMenu = ({ links, selectedPage, setSelectedPage }) => {
	//hamburger Menu
	const [isMenuToggled, setIsMenuToggled] = useState(false);

	const variants = {
		open: {
			clipPath: 'circle(1370px at  48px -15px)',
			transition: {
				type: 'spring',
				stiffness: 25,
				duration: 0.5,
			},
			zIndex: 10,
		},
		closed: {
			clipPath: 'circle(10px at 48px -15px)',
			transition: {
				delay: 0.3,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	};

	const linksVariants = {
		open: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: 100,
			opacity: 0,
		},
	};

	return (
		<>
			<div className='flex items-center w-full justify-end'>
				<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
					<FaBars size={24} />
				</button>
			</div>
			{/* overlay */}
			{isMenuToggled ? (
				<div
					className='fixed opacity-20 w-full h-full left-0 top-0 overflow-auto bg-slate-400'
					onClick={() => setIsMenuToggled(!isMenuToggled)}
				/>
			) : (
				<div className='hidden' />
			)}
			{/* SideBar */}
			<motion.div
				className='flex flex-col items-center justify-center'
				animate={isMenuToggled ? 'open' : 'closed'}
			>
				{/* bg */}
				<motion.div
					className='fixed top-0 right-0 bottom-0 dark:bg-gradient-night-sky bg-gradient-pink-orange text-white w-2/3'
					variants={variants}
					onClick={() => setIsMenuToggled(!isMenuToggled)}
				>
					<div className='relative w-full h-full'>
						<div className='absolute w-full h-full flex overflow-auto flex-col justify-center items-center'>
							{/* Menu Links */}
							{/* MenuList = ul */}
							<ul className='absolute flex flex-col justify-center items-center gap-10 mx-auto text-3xl font-signature'>
								<motion.div
									className='absolute flex flex-col justify-center items-center gap-10 mx-auto'
									variants={linksVariants}
								>
									{links.map(({ id, link }) => (
										<motion.div
											key={id}
											variants={itemVariants}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.7 }}
											initial='hidden'
											whileInView='visible'
										>
											<motion.li
												// key={id}
												className='capitalize hover:scale-105'
												// variants={linksVariants}
												// whileHover={{ scale: 1.1 }}
												// whileTap={{ scale: 0.7 }}
												// initial='hidden'
												// whileInView='visible'
											>
												<Link
													page={link}
													selectedPage={selectedPage}
													setSelectedPage={setSelectedPage}
													// variants={itemVariants}
													// whileHover={{ scale: 1.1 }}
													// whileTap={{ scale: 0.7 }}
													// initial='hidden'
													// whileInView='visible'
												>
													{link}
												</Link>
											</motion.li>
										</motion.div>
									))}
								</motion.div>
							</ul>
						</div>

						<div className='absolute left-1/2 bottom-14'>
							<FaTimes
								size={24}
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default MobileMenu;
