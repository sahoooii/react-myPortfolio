import { useEffect, useState } from 'react';
// import useMediaQuery from './hooks/useMediaQuery';
import About from './scenes/About';
import LineGradient from './components/LineGradient';
import Navbar from './scenes/Navbar';
import Profile from './scenes/Profile';
import SocialLinks from './scenes/SocialLinks';
import Portfolio from './scenes/Portfolio';
import Skills from './scenes/Skills';
import ContactForm from './scenes/ContactForm';
import Footer from './scenes/Footer';

function App() {
	const [selectedPage, setSelectedPage] = useState('home');
	const [darkMode, setDarkMode] = useState(true);
	const [isJp, setIsJp] = useState(false); //to Japanese
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	// const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

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
			<div className='w-[80%] mx-auto md:h-full'>
				<Profile setSelectedPage={setSelectedPage} />
			</div>
			<SocialLinks />

			<LineGradient />
			<div className='w-[80%] mx-auto md:h-full'>
				<About isJp={isJp} />
			</div>

			<LineGradient />
			<div className='w-[80%] mx-auto'>
				<Portfolio isJp={isJp} />
			</div>

			<LineGradient />
			<div className='w-[85%] mx-auto md:h-full'>
				<Skills isJp={isJp} />
			</div>

			<LineGradient />
			<div className='w-[85%] mx-auto'>
				<ContactForm />
			</div>

			<Footer />
		</div>
	);
}

export default App;
