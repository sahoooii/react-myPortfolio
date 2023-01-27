import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import Profile from './scenes/Profile';
import SocialLinks from './scenes/SocialLinks';

function App() {
	const [selectedPage, setSelectedPage] = useState('home');
	const [darkMode, setDarkMode] = useState(true);
	const [isJp, setIsJp] = useState(false); //to Japanese
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={`${darkMode ? 'dark' : ''} app bg-bluish-black`}>
			<Navbar
				isTopOfPage={isTopOfPage}
				darkMode={darkMode}
				isJp={isJp}
				setIsJp={setIsJp}
				setDarkMode={setDarkMode}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className='w-5/6 mx-auto md:h-full'>
				<Profile setSelectedPage={setSelectedPage} />
			</div>
			<SocialLinks />
		</div>
	);
}

export default App;
