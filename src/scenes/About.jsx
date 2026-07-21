import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';
import { AboutMeJp } from 'components/aboutMe/AboutMeJp';
import AboutMeEn from 'components/aboutMe/AboutMeEn';

const About = ({ isJp }) => {
	const style =
		'px-3 text-start tracking-wide text-xl text-left sm:leading-loose leading-relaxed';
	const styleTaglineBlue = 'text-light-blue font-bold';
	const styleTaglineOrange = 'text-orange-500 font-bold';

	return (
		<section
			id='about'
			className='sm:pt-40 pt-20 pb-28 sm:text-start text-center md:h-full'
		>
			<div className='w-full'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div>
						<p className='font-playfair font-semibold text-4xl mb-6'>
							About &nbsp;<span className='text-vivid-pink'>Me</span>
						</p>
					</div>
					<div className='flex sm:justify-start justify-center'>
						<LineGradient width='sm:w-1/3 w-2/3 sm:text-start text-center' />
					</div>

					{isJp ? (
						<div className={`${style} font-jp py-14`}>
							<AboutMeJp
								styleTaglineBlue={styleTaglineBlue}
								styleTaglineOrange={styleTaglineOrange}
							/>
						</div>
					) : (
						<div className={`${style} font-opensans py-14`}>
							<AboutMeEn
								styleTaglineBlue={styleTaglineBlue}
								styleTaglineOrange={styleTaglineOrange}
							/>
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
