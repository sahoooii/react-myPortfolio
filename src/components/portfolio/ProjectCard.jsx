import { FaGithub, FaPlayCircle, FaLink } from 'react-icons/fa';


const ProjectCard = ({ project, isJp, describeStyle }) => {
	const { title, subtitle, src, describeJp, describeEn, code, demo, link } =
		project;

	return (
		<>
			<div
				className='
          absolute
          h-full
          w-full
          opacity-0
          hover:opacity-80
          transition
          duration-500
          dark:bg-whitish
          dark:text-bluish-black
          bg-bluish-black
          text-whitish
          z-30
          flex
          flex-col
          justify-center
          items-center
          text-center
          md:p-10
          p-8
        '
			>
				<p className='md:text-3xl text-xl font-playfair font-semibold'>
					{title}
				</p>

				<p className='md:text-xl text-base font-playfair font-semibold md:mt-2'>
					{subtitle}
				</p>

				{isJp ? (
					<p className={`${describeStyle} font-jp`}>{describeJp}</p>
				) : (
					<p className={`${describeStyle} font-opensans`}>{describeEn}</p>
				)}

				<div className='flex justify-between gap-8 mt-3 md:mt-5'>
					<a
						href={code}
						target='_blank'
						rel='noreferrer'
						className='opacity-80 hover:scale-150'
					>
						<FaGithub size={28} />
					</a>

					{link && (
						<a
							href={link}
							target='_blank'
							rel='noreferrer'
							className='opacity-80 hover:scale-150'
						>
							<FaLink size={28} />
						</a>
					)}

					<a
						href={demo}
						target='_blank'
						rel='noreferrer'
						className='opacity-80 hover:scale-150'
					>
						<FaPlayCircle size={28} />
					</a>
				</div>
			</div>
			<img
				src={src}
				alt={title}
				className='w-[300px] h-[300px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] object-cover'
			/>
		</>
	);
};

export default ProjectCard
