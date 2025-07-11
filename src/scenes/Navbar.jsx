import React from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import MobileMenu from 'components/nav/MobileMenu';
import navLinks from 'components/data/navLinks';
import Link from 'components/nav/Link';

const Navbar = ({
	isTopOfPage,
	darkMode,
	setDarkMode,
	isJp,
	setIsJp,
	selectedPage,
	setSelectedPage,
}) => {
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
	const isChangedLang = isJp ? 'justify-end' : '';

	const navbarBackground = isTopOfPage
		? ''
		: 'dark:bg-gradient-night-sky bg-gradient-pink-orange';

	const selectEN = isJp
		? 'dark:text-white'
		: 'dark:text-light-blue text-vivid-pink font-bold scale-125';

	const selectJP = isJp
		? 'dark:text-light-blue text-vivid-pink font-bold scale-125'
		: 'dark:text-white';

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<div className='flex items-center justify-between md:gap-4 gap-3'>
					<AnchorLink
						onClick={() => setSelectedPage('home')}
						href='#home'
					>
						<h4 className='font-signature text-3xl font-bold'>Saho</h4>
					</AnchorLink>
					{/* Dark or Day Mode */}
					<BsFillMoonStarsFill
						onClick={() => setDarkMode(!darkMode)}
						className='cursor-pointer text-xl text-light-blue dark:text-vivid-yellow hover:scale-125 transition duration-500'
					/>

					{/* Language select  */}
					<div className='flex items-center'>
						<h2 className={`${selectEN} font-patric text-2xl`}>EN</h2>
						<div
							className={`${isChangedLang} md:w-14 w-12 md:h-6 h-6 dark:bg-whitish bg-bluish-black opacity-60 flex items-center justify-start rounded-3xl p-1 cursor-pointer mr-2 ml-2`}
							onClick={() => setIsJp(!isJp)}
						>
							<motion.div
								className='md:w-6 md:h-6 w-5 h-5 rounded-[50%] dark:bg-bluish-black bg-white'
								transition={{ type: 'spring', duration: 1 }}
							/>
						</div>
						<h2 className={`${selectJP} font-patric text-2xl`}>JP</h2>
					</div>
				</div>

				{/* DeskTop ver. Nav */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-signature text-xl font-semibold'>
						<ul className='flex justify-between gap-12 sm:gap-8'>
							{navLinks.map(({ id, link }) => (
								<li
									key={`${id}-${link}`}
									className='capitalize hover:scale-125 tracking-wide sm:text-[22px] md:text-[24px]'
								>
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
					<>
						<MobileMenu
							links={navLinks}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
