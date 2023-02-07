import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import LineGradient from '../components/LineGradient';


const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
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
			title: 'Shopping site',
			subtitle: 'JavaScript × Bootstrap',
			src: '../assets/project-1.jpeg',
			describeEn: 'Create shopping site. Create later',
			describeJp: 'ショッピングサイト。あとで作る',
			code: 'https://github.com/sahoooii',
		},
		{
			id: 2,
			title: 'Weather App',
			subtitle: 'React × Tailwind',
			src: '../assets/weatherApp.jpg',
			describeEn:
				'Using Weather API, Get current weather data and three hourly forecast data from OpenWeather API. I struggled that get data and restructure it into what I just needed. Also, Search for the city or country wherever you want. You can set the Celsius and Fahrenheit easily.',
			describeJp:
				'OpenWeather APIを使って作成したお天気アプリ。好きな都市や国で検索して、現在の天気や3時間毎の天気情報を取得できる。必要なデータだけを取得し、再構築して配列にまとめていくのに苦労した。摂氏、華氏表示も簡単に変更できる。',
			code: 'https://github.com/sahoooii/react-weatherApp-responsive',
		},
		{
			id: 3,
			title: 'Some frontend',
			subtitle: 'React × TypeScript',
			src: '../assets/project-3.jpeg',
			describeEn: 'some web site. Create later',
			describeJp: 'あとで作る',
			code: 'https://github.com/sahoooii',
		},
		{
			id: 4,
			title: 'Social Media App',
			subtitle: 'PHP × CSS × MySQL',
			src: '../assets/chill.jpg',
			describeEn:
				"It's my first original Backend piece, not using any libraries and frameworks. I use MySQL for a database. I know that the design is not good. I created it, the very first beginning. But fully responsive! You can use it like Twitter. Create your account and post something. What you thought or your favorite picture!",
			describeJp:
				'初めて作ったオリジナルのバックエンドSNSアプリ。ライブラリやフレームワークを使わず、生のPHPを使い構築。データベースはMySQLを使用。初期の頃に作ったのでデザインは決して良くないが、レスポンシブにも対応。アカウントを作って、Twitterみたいに適当に何かつぶやいたり、好きな写真をポストしてみよう!',
			code: 'https://github.com/sahoooii',
		},
		{
			id: 5,
			title: 'Dating App',
			subtitle: 'Laravel × Bootstrap × MySQL',
			src: '../assets/tinder.jpg',
			describeEn:
				"Created like Tinder App. Used Laravel and MySQL. It's my first piece using the framework and adding some dummy data so you can swipe it like Tinder. You can set your situation in your relationship, like something casual or serious relationships. Also, If you match someone, you can see the profile. Yes, literally Tinder!",
			describeJp:
				'Tinderのようなマッチングアプリ。Laravelを使って作った初めてのアプリ。ダミーデータを追加したり、どんな人を探しているかなど設定して、swipeできるようにした。相手とマッチしたらその人のプロフィールが見られるようになったり、まさにTinder!',
			code: 'https://github.com/sahoooii/laravel_tinderApp',
		},
		{
			id: 6,
			title: 'Some Backend',
			subtitle: 'JavaScript × Node.js',
			src: '../assets/project-6.jpeg',
			describeEn: 'Created backend site. later.',
			describeJp: 'nodeを使ってのちに作る。',
			code: 'https://github.com/sahoooii',
		},
	];

	return (
		<section id='portfolio' className='pt-40 pb-40'>
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
					<div className='flex justify-center items-center p-10 bg-gradient-purple-pink-orange max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold'>
						Frontend
					</div>

					{isJp ? (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeJp, code }) => (
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
											<p className='md:mt-3 mt-1 font-jp'>{describeJp}</p>
											<a
												href={code}
												className='opacity-80 md:mt-4 mt-2 hover:scale-150'
												target='_blank'
												rel='noreferrer'
											>
												<FaGithub size={30} />
											</a>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					) : (
						<>
							{projects.map(
								({ id, title, subtitle, src, describeEn, code }) => (
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
											<p className='md:mt-3 mt-1 md:text-lg text-sm font-opensans'>
												{describeEn}
											</p>
											<a
												href={code}
												className='opacity-80 md:mt-4 mt-2 hover:scale-150'
												target='_blank'
												rel='noreferrer'
											>
												<FaGithub size={30} />
											</a>
										</div>
										<img src={src} alt={title} />
									</motion.div>
								)
							)}
						</>
					)}

					<div className='flex justify-center items-center p-10 bg-gradient-green-blue max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold'>
						Backend
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
