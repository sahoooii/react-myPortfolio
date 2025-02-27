import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const ProfileAnimation = () => {
	return (
		<div className='App'>
			<h1 className='xs:mt-20 xs:mb-8 mt-8 mb-4 text-lg text-center md:text-start font-solitreo h-12'>
				I'm{' '}
				<span className='xs:mt-10 xs:mb-8 mt-8 mb-4 text-xl text-center md:text-start text-light-blue font-solitreo'>
					<Typewriter
						words={[
							'a programmer with front-end and back-end skills 💻 ',
							'on my journey to becoming a full-stack developer 💨',
							'a very responsible person 🧐💨 ',
							'always pushing forward, step by step 🏃‍♀️',
						]}
						loop={5}
						cursor
						cursorStyle='_'
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</span>
			</h1>
		</div>
	);
};
export default ProfileAnimation;
