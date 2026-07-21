import React from 'react';
import SkillsData from './SkillsData';


const SkillCategory = ({ title, languages }) => {
	return (
		<div className='flex flex-col h-full md:p-10 p-5 font-playfair font-semibold rounded-lg'>
			<div className='text-center text-3xl mb-2'>
				<h3>{title}</h3>
			</div>
			<SkillsData languages={languages} />
		</div>
	);
};

export default SkillCategory;
