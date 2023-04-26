import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';

import LineGradient from '../components/LineGradient';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};

const projectVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Portfolio = ({ isJp }) => {
	const projects = [
		{
			id: 1,
			title: 'Memory Game',
			subtitle: 'HTML × CSS × JavaScript',
			src: '../assets/portfolio/memoryGame.jpg',
			describeEn:
				"Create a Memory Game using only JavaScript. The title is Where Is My Dog?. It's literally to find your dog! Add sound effects and timer systems, and the player lives. You can enjoy it like a real game. I particularly about the design looks like real cards and flips. And fully responsive. Enjoy the Game!",
			describeJp:
				'JavaScriptだけで作ったメモリーゲーム。ゲーム名は"Where Is My Dog?" 名前の通り、あなたの犬を探すゲーム。サウンドやタイマー、Player Livesまで設定されているので、本当のゲームのように楽しめる。特にカードと、カードをめくるときのデザインにこだわった、レスポンシブ対応デザイン。それではEnjoy the Game!',
			code: 'https://github.com/sahoooii/js-whereIsMyDog',
			demo: '../assets/gif/memoryGame.gif',
		},
		{
			id: 2,
			title: 'Weather App',
			subtitle: 'React × API × Tailwind',
			src: '../assets/portfolio/weatherApp.jpg',
			describeEn:
				'Using Weather API, Get current weather data and three hourly forecast data from OpenWeather API. I struggled that get data and restructure it into what I just needed. Also, Search for the city or country wherever you want. You can set the Celsius and Fahrenheit easily.',
			describeJp:
				'OpenWeather APIを使って作成したお天気アプリ。好きな都市や国で検索して、現在の天気や3時間毎の天気情報を取得できる。必要なデータだけを取得し、再構築して配列にまとめていくのに苦労した。摂氏、華氏表示も簡単に変更できる。',
			code: 'https://github.com/sahoooii/react-weatherApp-3houley',
			demo: '../assets/gif/weatherApp.gif',
		},
		{
			id: 3,
			title: 'Hotel Resort App',
			subtitle: 'React × TypeScript × Tailwind',
			src: '../assets/portfolio/dogation.jpg',
			describeEn:
				"Create an original Hotel Resort App. The name is Dogation. Use React TypeScript and Tailwind. I've been working on learning TypeScript, so I used it. I created the logo and design and used a bunch of animation. The theme is Beach Vacations and Dogs. Also, I tried to use Swiper for sliders. And of course fully responsive!",
			describeJp: 'ReactとTypeScriptとTailwind CSSを使って作った、オリジナルのホテルリゾートアプリ。TypeScriptを習得中なので、初導入。ロゴやデザインも完全にオリジナル、アニメーションも多用。テーマはビーチ、バケーション、犬。デザインと全体の色のバランスにこだわった。今回初めてスライダー作成にSwiperを使用。レスポンシブ対応デザイン。',
			code: 'https://github.com/sahoooii/ts-react-dogation',
			demo: '../assets/gif/dogation.gif',
		},
		{
			id: 4,
			title: 'Social Media App',
			subtitle: 'PHP × CSS × MySQL',
			src: '../assets/portfolio/chill.jpg',
			describeEn:
				"It's my first original Backend piece, not using any libraries and frameworks. I use MySQL for a database. I know that the design is not good. I created it, the very first beginning. But fully responsive! You can use it like Twitter. Create your account and post something. What you thought or your favorite picture!",
			describeJp:
				'初めて作ったオリジナルのバックエンドSNSアプリ。ライブラリやフレームワークを使わず、生のPHPを使い構築。データベースはMySQLを使用。初期の頃に作ったのでデザインは決して良くないが、レスポンシブにも対応。アカウントを作って、Twitterみたいに適当に何かつぶやいたり、好きな写真をポストしてみよう!',
			code: '',
			demo: '../assets/gif/chill.gif',
		},
		{
			id: 5,
			title: 'Dating App',
			subtitle: 'Laravel × Bootstrap × MySQL',
			src: '../assets/portfolio/tinder.jpg',
			describeEn:
				"Created like Tinder App. Used Laravel and MySQL. It's my first piece using the framework and adding some dummy data so you can swipe it like Tinder. You can set your situation in your relationship, like something casual or serious relationships. Also, If you match someone, you can see the profile. Yes, literally Tinder!",
			describeJp:
				'Tinderのようなマッチングアプリ。Laravelを使って作った初めてのアプリ。ダミーデータを追加したり、どんな人を探しているかなど設定して、swipeできるようにした。相手とマッチしたらその人のプロフィールが見られるようになったり、まさにTinder!',
			code: 'https://github.com/sahoooii/laravel_tinderApp',
			demo: '../assets/gif/tinder.gif',
		},
		{
			id: 6,
			title: 'Some Backend',
			subtitle: 'JavaScript × Node.js',
			src: '../assets/project-6.jpeg',
			describeEn: 'Created backend site. later.',
			describeJp: 'nodeを使ってのちに作る。',
			code: '',
			demo: '',
		},
	];

	return (
		<section id='portfolio' className='sm:pt-40 pt-20 pb-40'>
			{/* Heading */}
			<motion.div
				className='md:w-1/2 m-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl mb-4'>
						<span className='text-vivid-pink'>Port</span>folio
					</p>
				</div>
				<div className='flex justify-center'>
					<LineGradient width='w-2/3 text-center' />
				</div>

				{isJp ? (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-jp'>
							いくつかの言語を使って作ったポートフォリオです。
							<br />
							Frontend and Backend.
						</p>
					</div>
				) : (
					<div>
						<p className='mt-10 mb-14 tracking-wide md:text-lg leading-7 font-opensans'>
							Here's my portfolio using multiple languages.
							<br />
							Frontend and Backend.
						</p>
					</div>
				)}
			</motion.div>

			{/* Portfolio */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-2'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={container}
				>
					{/* Row 1 */}
					<div className='flex justify-center items-center p-10 bg-gradient-purple-pink-orange max-w-[400px] max-h-[400px] text-whitish text-3xl font-playfair font-semibold'>
						Frontend
					</div>

					{isJp ? (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeJp, code, demo }) => (
									<motion.div
										variants={projectVariants}
										className='relative'
										key={id}
									>
										<div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 dark:bg-whitish dark:text-bluish-black bg-bluish-black text-whitish z-30 flex flex-col justify-center items-center text-center md:p-10 p-8'>
											<p className='md:text-3xl text-xl font-playfair font-semibold'>
												{title}
											</p>
											<p className='md:text-xl text-md font-playfair font-semibold md:mt-2'>
												{subtitle}
											</p>
											<p className='md:mt-3 mt-2 md:text-md text-sm font-jp'>
												{describeJp}
											</p>

											<div className='flex justify-center items-center gap-8 mt-3 md:mt-5'>
												<a
													href={code}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaGithub size={30} />
												</a>
												<a
													href={demo}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaPlayCircle size={30} />
												</a>
											</div>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					) : (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeEn, code, demo }) => (
									<motion.div
										variants={projectVariants}
										className='relative'
										key={id}
									>
										<div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 dark:bg-whitish dark:text-bluish-black bg-bluish-black text-whitish z-30 flex flex-col justify-center items-center text-center md:p-10 p-8 text-deep-blue'>
											<p className='md:text-3xl text-xl font-playfair font-semibold'>
												{title}
											</p>
											<p className='md:text-xl text-md font-playfair font-semibold md:mt-2'>
												{subtitle}
											</p>
											<p className='md:mt-3 mt-2 md:text-md text-sm font-opensans'>
												{describeEn}
											</p>
											<div className='flex justify-center items-center space-x-8 mt-3 md:mt-5'>
												<a
													href={code}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaGithub size={30} />
												</a>
												<a
													href={demo}
													className='opacity-80 hover:scale-150'
													target='_blank'
													rel='noreferrer'
												>
													<FaPlayCircle size={30} />
												</a>
											</div>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					)}

					<div className='flex justify-center items-center p-10 bg-gradient-green-blue max-w-[400px] max-h-[400px] text-whitish text-3xl font-playfair font-semibold'>
						Backend
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
