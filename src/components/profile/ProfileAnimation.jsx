import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const ProfileAnimation = () => {
	return (
		<div className='App'>
			<h1 className='xs:mt-20 mt-8 mb-10 text-lg text-center md:text-start font-solitreo h-12'>
				I'm{' '}
				<span className='text-xl text-center md:text-start text-light-blue font-solitreo'>
					<Typewriter
						words={[
							'a programmer skilled in front-end and back-end development 💻💪 ',
							'on my journey to mastering full-stack development 🎓💨',
							'a highly responsible and reliable person 🧐💨 ',
							'constantly pushing forward, step by step 🏃‍♀️📚 ',
						]}
						loop={5}
						cursor
						cursorStyle='_'
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={700}
					/>
				</span>
			</h1>
		</div>
	);
};
export default ProfileAnimation;
