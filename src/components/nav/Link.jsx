import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ page, selectedPage, setSelectedPage }) => {
	return (
		<AnchorLink
			className={`${
				selectedPage === page ? 'dark:text-mint-green text-light-blue' : ''
			} hover:opacity-60 transition duration-500`}
			href={`#${page}`}
			onClick={() => setSelectedPage(page)}
		>
			{page}
		</AnchorLink>
	);
};

export default Link;
