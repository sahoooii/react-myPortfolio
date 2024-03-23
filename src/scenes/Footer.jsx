import React from 'react';
import { links } from '../components/SocialMediaIcons';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<footer className='h-64 pt-10 dark:bg-gray-800 bg-orange-100'>
				<div className='w-5/6 mx-auto'>
					<ul className='flex justify-center items-center gap-7'>
						{links.map(({ id, icon, href, download }) => (
							<li
								key={id}
								className='flex dark:bg-gradient-night-sky rounded-full p-2 bg-gradient-day-sky duration-300 text-white hover:scale-150'
							>
								<a
									className='opacity-80'
									href={href}
									download={download}
									target='_blank'
									rel='noreferrer'
								>
									{icon}
								</a>
							</li>
						))}
					</ul>
					<div className='justify-center text-center mt-10'>
						<p className='font-playfair font-semibold text-2xl mb-4 dark:text-indigo-300 text-red-400'>
							Saho Nishio
						</p>
						<p className='font-playfair text-md'>
							&copy; {currentYear} S.N All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
