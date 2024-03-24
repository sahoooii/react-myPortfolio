import React from 'react';
import Typical from 'react-typical';

const ProfileAnimation = () => {
	return (
		<>
			<p className='xs:mt-20 xs:mb-8 mt-8 mb-4 text-lg text-center md:text-start font-solitreo'>
				I'm &nbsp;
				<Typical
					className='xs:mt-10 xs:mb-8 mt-8 mb-4 text-xl text-center md:text-start text-light-blue font-solitreo'
					loop={3}
					wrapper='b'
					steps={[
						'working on the Frontend 💻 ',
						3000,
						'working on the Backend 🖥 ',
						3000,
						'a very responsible person 🧐💨 ',
						3000,
						'an open-minded 🍻 ',
						3000,
					]}
				/>
			</p>
		</>
	);
};

export default ProfileAnimation;
