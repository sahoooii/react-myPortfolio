import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dimensions from './Dimensions';
import Link from './Link';

const MobileMenu = ({ links, selectedPage, setSelectedPage }) => {
	//For hamburger Menu
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	// After load a page, show hamburger icon
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const containerRef = useRef(null);
	const { height } = Dimensions(containerRef);

	const sidebarVariants = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
				duration: 0.5,
			},
		}),
		closed: {
			clipPath: 'circle(10px at 300px -15px)',
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	};

	const linksVariants = {
		open: {
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return (
		<>
			<div className='flex items-center w-full justify-end'>
				<button
					onClick={() => setIsMenuToggled(!isMenuToggled)}
					className={`dark:bg-indigo-500 bg-red-300 p-2.5 rounded-full transition-opacity duration-500 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<FaBars size={24} className='dark:text-white text-white' />
				</button>
			</div>
			{/* overlay Bg */}
			<div
				className={`${
					isMenuToggled &&
					`fixed opacity-20 w-full h-full left-0 top-0 overflow-auto bg-slate-400`
				}`}
				onClick={() => setIsMenuToggled(!isMenuToggled)}
			/>
			{/* SideBar */}
			<motion.div
				className='flex flex-col items-center justify-center'
				custom={height}
				ref={containerRef}
				animate={isMenuToggled ? 'open' : 'closed'}
			>
				{/* bg */}
				<motion.div
					className='fixed top-0 right-0 bottom-0 dark:bg-indigo-500 bg-red-300 text-white w-2/3 z-10'
					variants={sidebarVariants}
					initial='closed'
					animate={isMenuToggled ? 'open' : 'closed'}
					onClick={() => setIsMenuToggled(!isMenuToggled)}
				>
					<div className='relative w-full h-full'>
						<div className='absolute w-full h-full flex overflow-auto flex-col justify-center items-center'>
							{/* Menu Links */}
							<motion.ul
								className='absolute flex flex-col justify-center items-center gap-10 mx-auto text-3xl font-signature'
								variants={linksVariants}
							>
								{links.map(({ id, link }) => (
									<motion.li
										key={`${id}-${link}`}
										className='capitalize hover:scale-125 tracking-wide'
										variants={itemVariants}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.7 }}
									>
										<Link
											page={link}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										>
											{link}
										</Link>
									</motion.li>
								))}
							</motion.ul>
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
