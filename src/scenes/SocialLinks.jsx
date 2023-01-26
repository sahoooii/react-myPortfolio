import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/sahoooii',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: 'https://linkedin.com',
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: 'mailto:saho.chu@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: '/sample.jpg',
			style: 'rounded-br-md',
			download: true,
		},
	];

	// motion divつける
	return (
		<div className='hidden md:flex flex-col top-[70%] left-0 fixed'>
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={`${style} flex justify-between items-center w-40 h-14 px-4 dark:bg-gradient-night-sky bg-gradient-day-sky ml-[-90px] hover:ml-[-5px] hover:rounded-md duration-300 text-white`}
					>
						<a
							className='flex justify-between items-center w-full px-2'
							href={href}
							download={download}
							target='_blank'
							rel='noreferrer'
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
