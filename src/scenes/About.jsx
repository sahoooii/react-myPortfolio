import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';

const About = ({ isJp }) => {
	const style =
		'md:mt-10 mt-5 px-2 text-start tracking-wide text-base sm:text-xl md:text-lg leading-7 sm:leading-8 md:leading-9';

	const styleTaglineBlue = 'text-light-blue font-bold';
	const styleTaglineOrange = 'text-orange-500 font-bold';
	return (
		<section
			id='about'
			className='sm:pt-40 pt-10 pb-28 sm:text-start text-center md:h-full'
		>
			<div className='w-full'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div>
						<p className='font-playfair font-semibold text-4xl mb-6'>
							About &nbsp;<span className='text-vivid-pink'>Me</span>
						</p>
					</div>
					<div className='flex sm:justify-start justify-center'>
						<LineGradient width='sm:w-1/3 w-2/3 sm:text-start text-center' />
					</div>

					{isJp ? (
						<p className={`${style} font-jp`}>
							数年間、独学でプログラミングを学び、常に新しい技術を吸収しながらスキルを磨いてきました。フロントエンドでは
							React・Next.js・TypeScriptを中心に、バックエンドではNode.js
							を活用し、データベースと連携したAPI
							開発も手がけています。フルスタックの視点を活かしながら、特に使いやすいUIデザインにこだわり、ユーザーにとって快適な体験を提供できるよう心がけ、Webサービスの開発からデプロイまで取り組んでいます。
							<br />
							長年のカスタマーサービス経験を通じて培った
							<span className={`${styleTaglineBlue}`}>
								「相手の考えを汲み取り行動する力」
							</span>
							を活かし、ユーザー目線で使いやすく洗練されたサービスを作ることを大切にしています。
							<br />
							将来的には、
							<span className={`${styleTaglineOrange}`}>
								最適な出会いを提供するマッチングアプリの開発
							</span>
							や、
							<span className={`${styleTaglineOrange}`}>犬・猫のためのサービス</span>
							を通じて、
							<span className={`${styleTaglineBlue}`}>
								人と動物がより幸せに暮らせる仕組み
							</span>
							を作りたいと考えています。また、ハワイでの経験を活かし、
							<span className={`${styleTaglineBlue}`}>
								ローカル視点の観光情報を提供するサービス
							</span>
							にも挑戦したいです。
							<br />
							実際に自分が関心を持ち、価値を提供できる分野でのサービスを形にしたいと思っています。
							<br />
							どんなに難しい課題にも粘り強く取り組み、サービスを通じて人や動物の生活をより良くできるエンジニアを目指しています。
						</p>
					) : (
						<p className={`${style} font-opensans`}>
							I've worked in the service industry for over 15 years, including a
							part-time job. I worked most of my time in fashion. I've worked in
							Hawaii in a small boutique in the middle of Waikiki for six years.
							So I can speak regular conversations in English.
							<br />I started studying programming on my own in 2019. At that
							time, I had no idea where to start, Because I was not good at
							tech. I only had an old Windows laptop. It's the beginning of my
							journey to become an engineer.
							<br /> I'm skilled with JavaScript, Node.js, PHP, some Database
							and others. I'm trying to learn other programming languages step
							by step. I can also use several libraries and frameworks. Like
							Laravel, React, Tailwind CSS, MUI and others. I'm working on React
							project now. So I built that portfolio with React and Tailwind.
							Also I used other languages, so please see the below Portfolio
							section. I have strong communication skills, I'm an open-minded
							person, and I have an ALOHA spirit. I'm looking forward to working
							with you!
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
