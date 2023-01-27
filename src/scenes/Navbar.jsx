import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

import useMediaQuery from '../hooks/useMediaQuery';

const links = [
	{
		id: 1,
		link: 'home',
	},
	{
		id: 2,
		link: 'about',
	},
	{
		id: 3,
		link: 'portfolio',
	},
	{
		id: 4,
		link: 'skills',
	},
	{
		id: 5,
		link: 'contact',
	},
];
const Link = ({ page, selectedPage, setSelectedPage }) => {
	return (
		<AnchorLink
			className={`${
				selectedPage === page ? 'dark:text-mint-green text-light-blue' : ''
			} dark:hover:text-vivid-yellow hover:text-purple transition duration-500`}
			href={`#${page}`}
			onClick={() => setSelectedPage(page)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({
	isTopOfPage,
	darkMode,
	setDarkMode,
	isJp,
	setIsJp,
	selectedPage,
	setSelectedPage,
}) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false); //hamburger Menu
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
	const isChangedLang = isJp ? 'justify-end' : '';
	const navbarBackground = isTopOfPage
		? ''
		: 'dark:bg-gradient-night-sky bg-gradient-pink-orange';

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<div className='flex items-center justify-between md:gap-4 gap-2'>
					<h4 className='font-signature text-3xl font-bold'>Saho</h4>
					<BsFillMoonStarsFill
						onClick={() => setDarkMode(!darkMode)}
						className='cursor-pointer text-3x dark:text-light-blue text-yellow-500 hover:scale-110 transition duration-500'
					/>
					<div className='flex items-center'>
						<h2 className='font-patric md:text-lg dark:text-vivid-yellow'>
							EN
						</h2>
						<div
							className={`${isChangedLang} md:w-14 w-10 md:h-6 h-4 dark:bg-whitish bg-bluish-black opacity-60 flex items-center justify-start rounded-3xl p-1 cursor-pointer mr-2 ml-2`}
							onClick={() => setIsJp(!isJp)}
						>
							<motion.div
								className='md:w-6 md:h-6 w-4 h-4 rounded-[50%] dark:bg-bluish-black bg-white'
								transition={{ type: 'spring', duration: 1 }}
							/>
						</div>
						<h2 className='font-patric md:text-lg dark:text-vivid-yellow'>
							JP
						</h2>
					</div>
				</div>

				{/* DeskTop Nav ver. */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-patric text-xl font-semibold'>
						<ul className='flex justify-between gap-12'>
							{links.map(({ id, link }) => (
								<li key={id} className='capitalize hover:scale-105'>
									<Link
										page={link}
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				) : (
					<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
						<FaBars size={28} />{' '}
					</button>
				)}

				{/* Mobile Menu ver. */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div className='fixed right-0 bottom-0 h-full dark:bg-gradient-purple-pink-orange bg-gradient-pink-orange w-full text-white'>
						{/* Close Icon */}
						<div className='flex justify-end p-12'>
							<FaTimes
								size={28}
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							/>
						</div>

						{/* Menu Items */}
						<ul className='flex flex-col justify-center items-center gap-10 mx-auto text-3xl font-patric'>
							{links.map(({ id, link }) => (
								<li key={id} className='capitalize hover:scale-105'>
									<Link
										page={link}
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
