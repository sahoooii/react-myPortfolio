import { motion } from 'framer-motion';

const SkillsData = ({ languages, container, item }) => {
	return (
		<motion.ul
			className='items-center justify-center grid grid-cols-3 md:gap-x-4 gap-x-3 md:gap-y-6 gap-y-8 text-center py-4'
			variants={container}
			initial='hidden'
			viewport={{ once: true, amount: 0.5 }}
			whileInView='visible'
		>
			{languages.map((lang) => {
				const { id, src, name, style } = lang;
				return (
					<motion.li
						key={`${id}-${name}`}
						className={`shadow-md md:p-4 p-3 rounded-lg ${style} ${item}`}
						variants={item}
					>
						{lang.icon ? (
							<lang.icon className={`text-6xl mx-auto w-14 hover:rotate-45 duration-50 ${style}`} />
						) : (
							<img
								src={src}
								alt={name}
								className='mx-auto w-14 hover:rotate-45 duration-50'
							/>
						)}
						<p className='text-xs md:text-sm text-center font-semibold dark:text-whitish font-opensans'>
							{name}
						</p>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default SkillsData;
