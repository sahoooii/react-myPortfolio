import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const links = [
	{
		id: 1,
		name: 'GitHub',
		icon: (
			<>
				<FaGithub size={30} />
			</>
		),
		href: 'https://github.com/sahoooii',
		style: 'rounded-tr-md',
	},
	{
		id: 2,
		name: 'LinkedIn',
		icon: (
			<>
				<FaLinkedin size={30} />
			</>
		),
		href: 'https://linkedin.com',
	},
	{
		id: 3,
		name: 'Mail',
		icon: (
			<>
				<HiOutlineMail size={30} />
			</>
		),
		href: 'mailto:saho.chu@gmail.com',
	},
];
