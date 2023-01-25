import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typical from 'react-typical';

import useMediaQuery from '../hooks/useMediaQuery';

const Profile = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id='home'
			className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
		>
			{/* Image section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-20 md:mt-10'>
				{isAboveMediumScreens ? (
					<div className='relative z-0 ml-20'>
						<img
							className='rounded-2xl hover:filter hover:saturate-200 transition duration-500 z-10 md:w-full max-w-[400px] md:max-w-[600px] shadow-md dark:shadow-white shadow-opaque-black animate-wiggle'
							src='../assets/profile_img.jpg'
							alt='Profile_picture'
						/>
					</div>
				) : (
					<img
						className='rounded-t-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						src='../assets/profile_img.jpg'
						alt='Profile_picture'
					/>
				)}
			</div>
			{/* Main section */}
			<div className='z-30 basis-2/5 mt-12 md:mt-32'>
				{/* Heading */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='md:text-7xl text-6xl font-signature z-10 text-center md:text-start'>
						Saho{' '}
						<span className='xs:relative dark:xs:text-opaque-black dark:text-vivid-pink text-mint-green xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[110px] before:z-[-1]'>
							{' '}
							Nishio
						</span>
					</p>
					<p className='mt-16 mb-7 text-sm text-center md:text-start font-solitreo'>
						I'm &nbsp;
						<Typical
							className='mt-10 mb-7 text-lg text-center md:text-start text-light-blue font-solitreo'
							loop={5}
							wrapper='b'
							steps={[
								'doing Frontend 💻',
								2000,
								'doing Backend 🖥',
								2000,
								'a fashionista 🕺🕶',
								2000,
								'a open minded 🍻',
								2000,
							]}
						/>
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Profile;
