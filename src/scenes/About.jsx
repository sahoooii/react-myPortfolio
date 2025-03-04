import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';

const About = ({ isJp }) => {
	const style =
		'md:mt-10 mt-5 px-2 py-8 text-start tracking-wide text-base sm:text-xl md:text-lg leading-7 sm:leading-8 md:leading-9';

	const styleTaglineBlue = 'text-light-blue font-bold';
	const styleTaglineOrange = 'text-orange-500 font-bold';
	return (
		<section
			id='about'
			className='sm:pt-40 pt-20 pb-28 sm:text-start text-center md:h-full'
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
							将来的には、最適な出会いを提供する
							<span className={`${styleTaglineOrange}`}>
								マッチングアプリの開発
							</span>
							や、
							<span className={`${styleTaglineOrange}`}>
								犬・猫のためのサービス
							</span>
							を通じて、
							<span className={`${styleTaglineBlue}`}>
								人と動物がより幸せに暮らせる仕組み
							</span>
							を作りたいと考えています。また、ハワイでの経験を活かし、
							<span className={`${styleTaglineBlue}`}>
								ローカル視点で役立つ情報を提供するサービス
							</span>
							にも挑戦したいです。
							<br />
							自分の経験を活かせる分野で、価値のあるサービスを生み出し、
							<span className={`${styleTaglineOrange}`}>
								どんなに難しい課題にも粘り強く取り組み、
							</span>
							サービスを通じて人や動物の暮らしを支え、より良い未来を作れるエンジニアを目指しています。
						</p>
					) : (
						<p className={`${style} font-opensans`}>
							I have been learning programming for years, continuously exploring
							new technologies. On the front end, I primarily work with React,
							Next.js, and TypeScript, while on the back end, I develop APIs and
							integrate databases using Node.js.
							<br />
							Approaching development from a full-stack perspective, I
							specialize in creating user-friendly UI designs that provide a
							seamless and enjoyable experience for all users. I take ownership
							of everything from development to deployment.
							<br />
							With many years of customer service experience, I have learned to
							<span className={`${styleTaglineBlue}`}>
								{' '}
								"Understand People's Needs And Take Action"{' '}
							</span>
							to support them. I value this skill and apply it to my
							development, striving to create intuitive and well-designed
							services.
							<br />
							Looking ahead, I have mapped out my career plan. I aspire to
							<span className={`${styleTaglineBlue}`}>
								{' '}
								develop a Dating App{' '}
							</span>
							that truly helps users find{' '}
							<span className={`${styleTaglineOrange}`}> "The One" </span>
							and
							<span className={`${styleTaglineBlue}`}>
								{' '}
								a service dedicated to improving the lives of{' '}
							</span>
							<span className={`${styleTaglineOrange}`}> Dogs and Cats. </span>
							Additionally, having lived in Hawaii for a couple of years, I want
							to create a platform that provides tourists with
							<span className={`${styleTaglineBlue}`}>
								{' '}
								authentic, local insights into
							</span>
							<span className={`${styleTaglineOrange}`}> "Deep Hawaii." </span>
							I aim to build meaningful services by leveraging my experiences.
							<br />
							<span className={`${styleTaglineOrange}`}>
								{' '}
								No matter how difficult the challenge, I stay committed to my
								goals with passion and perseverance.{' '}
							</span>
							Through these services, I hope to contribute to a better future by
							supporting both people and animals.
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
