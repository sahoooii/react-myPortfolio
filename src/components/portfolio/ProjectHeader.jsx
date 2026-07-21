import React from 'react'

const ProjectHeader = ({project}) => {
	return (
		<img
			src={project.src}
			alt={project.category}
			className='w-[300px] h-[300px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] object-cover'
		/>
	);
}

export default ProjectHeader
