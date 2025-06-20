import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = ({ isJp, setSelectedPage }) => {
	const styleJp =
		'px-3 text-start tracking-wide text-xl text-left sm:leading-loose leading-relaxed font-jp';
	const styleEn =
		'px-3 text-start tracking-wide text-xl text-left sm:leading-loose leading-relaxed font-opensans';

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
					viewport={{ once: true, amount: 0.2 }}
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
						<div className='py-8 mt-5'>
							<p className={styleJp}>
								数年間、独学でプログラミングを学びながら、常に新しい技術を取り入れ、英語のドキュメントや海外のリソースも活用してスキルを磨いてきました。
								<br />
								<br />
								得意分野は、
								<span className={`${styleTaglineOrange}`}>
									フロントエンドを中心としたフルスタック開発
								</span>
								です。ポートフォリオには、
								<a
									href='https://mern-athleisure-styles.vercel.app/'
									target='_blank'
									rel='noreferrer'
									className='underline underline-offset-4 hover:opacity-70'
								>
									MERN Stack を用いた
									<span className={`${styleTaglineBlue}`}>
										ショッピングサイト
									</span>
								</a>
								や、
								<a
									href='https://next-aloha-estate.vercel.app/'
									target='_blank'
									rel='noreferrer'
									className='underline underline-offset-4 hover:opacity-70'
								>
									Next.js を活用して
									<span className={`${styleTaglineBlue}`}>
										Airbnb風のバケーションレンタルサイト
									</span>
								</a>
								を掲載しており、いずれも認証機能や決済機能を備えた、実際のユースケースを意識した、機能性とスケールを兼ね備えた構成となっています。
								<br />
								<br />
								開発において特に大切にしているのは、
								<span className={`${styleTaglineBlue}`}>
									「直感的な操作性」
								</span>
								と
								<span className={`${styleTaglineBlue}`}>
									「誰でもすぐに使いこなせるインターフェース」
								</span>
								です。配色・フォント・レスポンシブ対応・ロゴ設計など細部までこだわり、実際のサービスをリサーチし、繰り返し検証を重ねながら、ユーザー視点で細部まで設計して開発しています。
								<br />
								<br />
								長年のカスタマーサービスの経験を通じて培った、
								<span className={`${styleTaglineBlue}`}>
									「相手の気持ちを汲み取る力」
								</span>
								や
								<span className={`${styleTaglineBlue}`}>
									「状況に応じた対応力」
								</span>
								を、開発にも活かすよう努めています。また、 ハワイで働いた経験
								から、
								<span className={`font-bold`}>
									グローバルな視点とコミュニケーション力
								</span>
								も身につけており、
								<span className={`${styleTaglineBlue}`}>
									「誰のために、なぜ作るのか」
								</span>
								を常に意識した提案型の開発を心がけています。
								<br />
								<br />
							</p>
							<p className={`${styleJp} mb-4`}>
								将来的には、以下のようなサービス開発に挑戦したいと考えています：
							</p>
							<ul className={`${styleJp} list-disc pl-6 space-y-1.5 text-lg`}>
								<li className='underline underline-offset-4'>
									ユーザーの行動やニーズに特化した
									<span className={`${styleTaglineOrange}`}>
										マッチングアプリ
									</span>
								</li>
								<li className='underline underline-offset-4'>
									ハワイのローカル視点を活かした
									<span className={`${styleTaglineOrange}`}>
										観光ガイド総合プラットフォーム
									</span>
								</li>
								<li className='underline underline-offset-4'>
									犬と人がより幸せに暮らせる社会を支える、
									<span className={`${styleTaglineOrange}`}>
										ペット向けの総合サービス
									</span>
								</li>
							</ul>
							<br />
							<p className={`${styleJp}`}>
								ペット向けの総合サービスでは、愛犬との日々の中で感じた実体験を元に、「動物病院の検索」「犬の親戚探し」「飼い主同士のSNS機能」など、
								愛犬との暮らしをまるごとサポートする、実用的なサービスを目指しています。
								<span className={`${styleTaglineBlue}`}>
									“日々の暮らしに本当に役立つ機能”
								</span>
								を1つにまとめた、安心と幸せを届ける
								<span className={`${styleTaglineBlue}`}>
									「愛犬と飼い主のためのアプリ」
								</span>
								の実現を目指しています。
								<br />
								こうした構想に通じるテーマを取り入れたプロジェクトは、すでに
								<AnchorLink
									onClick={() => setSelectedPage('portfolio')}
									href='#portfolio'
									className={`${styleTaglineOrange} underline underline-offset-4`}
								>
									ポートフォリオ
								</AnchorLink>
								でも紹介しており、今後さらに広げていきたいと考えています。
								<br />
								<br />
								私の強みは、どんな困難にも粘り強く向き合えること、そして
								<span className={`${styleTaglineBlue}`}>
									「自分が作ったもので誰かを喜ばせたい」
								</span>
								という想いを行動に移せることです。
								人や動物の暮らしを技術で支え、
								<span className={`${styleTaglineBlue}`}>
									「あってよかった」と思ってもらえるようなサービス
								</span>
								を作り続けていきたいと考えています。
							</p>
						</div>
					) : (
						<p className={`${styleEn} py-8 mt-5`}>
							I have been learning programming for years, constantly exploring
							new technologies.
							<br />
							On the front end, I primarily work with React, Next.js, and
							TypeScript, while on the back end, I develop APIs and integrate
							databases using Node.js.
							<br />
							Approaching development from a
							<span className={`${styleTaglineBlue}`}>
								{' '}
								full-stack perspective,{' '}
							</span>
							I specialize in creating
							<span className={`${styleTaglineOrange}`}>
								{' '}
								user-friendly UI designs{' '}
							</span>
							that provide a seamless and enjoyable experience for all users. I
							take ownership of everything from development to deployment.
							<br />
							<br />
							With many years of customer service experience, I have learned to
							<span className={`${styleTaglineBlue}`}>
								{' '}
								"Understand People's Needs And Take Action".{' '}
							</span>
							I value this skill and apply it to my development, striving to
							create intuitive and well-designed services.
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
							<br />
							Having lived in Hawaii for a couple of years, I want to build a
							platform offering tourists
							<span className={`${styleTaglineBlue}`}>
								{' '}
								authentic, local insights into
							</span>
							<span className={`${styleTaglineOrange}`}> "Deep Hawaii." </span>
							I aim to build meaningful services by leveraging my experiences.
							<br />
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
