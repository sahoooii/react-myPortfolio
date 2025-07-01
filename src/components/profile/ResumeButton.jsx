import React from 'react';
import { BiDownload } from 'react-icons/bi';

const ResumeButton = ({ isJp }) => {
	const resumeJPLink = process.env.REACT_APP_GOOGLE_DRIVE_LINK_JP;
	const resumeENLink = process.env.REACT_APP_GOOGLE_DRIVE_LINK_EN;
	
	const resumeLink = isJp ? resumeJPLink : resumeENLink;

	if (!resumeLink) {
		console.error('Resume link is missing in environment variables!');
		return null;
	}
	return (
		<a
			href={isJp ? resumeJPLink : resumeENLink}
			rel='noreferrer'
			target='_blank'
			className='rounded-r-sm bg-gradient-purple-pink-orange py-0.5 pr-0.5'
		>
			<div className='dark:bg-bluish-black bg-whitish font-semibold hover:text-vivid-pink transition duration-500 w-full h-full flex items-center justify-center xs:px-8 px-6 font-playfair group'>
				{isJp ? 'Resume/JP' : 'Resume/EN'}
				<span className='group-hover:translate-y-1 duration-300'>
					<BiDownload size={25} className='ml-1' />
				</span>
			</div>
		</a>
	);
};

export default ResumeButton;
