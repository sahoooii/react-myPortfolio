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
							'building products that people love to use 💡❤️',
							'obsessed with clean code and clean UX 🧼🖥️',
							'a developer who leads with empathy and logic 🤝🧠',
							'always learning — and always delivering ⚙️✅',
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
