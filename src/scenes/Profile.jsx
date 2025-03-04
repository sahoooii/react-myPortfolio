import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import useMediaQuery from 'hooks/useMediaQuery';
import ProfileAnimation from 'components/profile/ProfileAnimation';
import ResumeButton from 'components/profile/ResumeButton';

const Profile = ({ setSelectedPage, isJp }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id='home'
			className='md:flex md:justify-between md:items-center md:h-full gap-14 py-14 sm:mb-20'
		>
			{/* Image section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-24'>
				{isAboveMediumScreens ? (
					<div className='relative z-0 ml-20'>
						<img
							className='rounded-2xl mb-6 hover:filter hover:saturate-200 transition duration-500 z-10 md:w-full max-w-[400px] md:max-w-[600px] shadow-md dark:shadow-white shadow-opaque-black animate-wiggle'
							src='../assets/profile/profile_img.jpg'
							alt='Profile_picture'
						/>
					</div>
				) : (
					<img
						className='rounded-t-[400px] mb-4 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						src='../assets/profile/profile_img.jpg'
						alt='Profile_picture'
					/>
				)}
			</div>
			{/* Main section */}
			<div className='z-30 basis-2/5 md:mt-[-40px] mt-14'>
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
						<span className='xs:relative dark:xs:text-opaque-black dark:text-vivid-pink text-mint-green xs:font-semibold z-20 sm:before:content-brush xs:before:content-brush_xs before:absolute md:before:-left-[25px] xs:before:-left-[35px] sm:before:-top-[110px] xs:before:-top-[100px] before:z-[-1]'>
							{' '}
							Nishio
						</span>
					</p>
					{/* Animation */}
					<ProfileAnimation />
				</motion.div>

				{/* Contact Button */}
				<motion.div
					className='flex mt-5 mb-4 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<AnchorLink
						className='bg-gradient-rainbow py-3 xs:px-7 px-4 text-opaque-black rounded-sm font-semibold hover:bg-light-blue hover:text-white transition duration-500 font-playfair group'
						onClick={() => setSelectedPage('contact')}
						href='#contact'
					>
						<div className='flex items-center justify-center'>
							Contact Me
							<span className='group-hover:rotate-90 duration-300'>
								<MdOutlineKeyboardArrowRight size={25} className='ml-1' />
							</span>
						</div>
					</AnchorLink>
					<ResumeButton isJp={isJp} />
				</motion.div>
			</div>
		</section>
	);
};

export default Profile;
