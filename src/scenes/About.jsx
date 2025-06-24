import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from 'components/LineGradient';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = ({ isJp, setSelectedPage }) => {
	const style =
		'px-3 text-start tracking-wide text-xl text-left sm:leading-loose leading-relaxed';
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
						<div className={`${style} font-jp py-14`}>
							<p>
								数年間、独学でプログラミングを学びながら、常に新しい技術を取り入れつつ、英語のドキュメントや海外リソースも積極的に活用し、実践的なスキルを磨いてきました。
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
									className='underline underline-offset-4 hover:text-blue-400'
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
									className='underline underline-offset-4 hover:text-blue-400'
								>
									Next.jsで構築した
									<span className={`${styleTaglineBlue}`}>
										Airbnb風のバケーションレンタルサイト
									</span>
								</a>
								を掲載しており、いずれも
								<span className={`${styleTaglineBlue}`}>
									認証機能や決済機能
								</span>
								を備え、実際のユースケースを意識した、
								<span className={`${styleTaglineBlue}`}>
									機能性と拡張性の高い構成
								</span>
								を実現しています。
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
								です。
								<span className={`${styleTaglineOrange}`}>
									配色・フォント・レスポンシブ対応・ロゴ設計
								</span>
								など細部までこだわり、実際のサービスをリサーチ・分析しながら、ユーザー視点で細部まで設計・改善を重ねています。
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
								を、開発にも積極的に活かしています。また、ハワイでの就労経験から、
								<span className={`${styleTaglineOrange}`}>
									グローバルな視点とコミュニケーション力
								</span>
								も身につけており、
								<span className={`${styleTaglineBlue}`}>
									「誰のために、なぜ作るのか」
								</span>
								を常に意識し、ユーザーに寄り添った開発を心がけています。
								<br />
								<br />
							</p>
							<p className='mb-4'>
								将来的には、以下のようなサービス開発に挑戦したいと考えています：
							</p>
							<ul className='list-disc pl-6 space-y-1.5 text-lg'>
								<li className='underline underline-offset-4 text-start'>
									ユーザーの行動やニーズに特化した
									<span className={`${styleTaglineOrange}`}>
										マッチングアプリ
									</span>
								</li>
								<li className='underline underline-offset-4 text-start'>
									ハワイのローカル視点を活かした
									<span className={`${styleTaglineOrange}`}>
										観光ガイド総合プラットフォーム
									</span>
								</li>
								<li className='underline underline-offset-4 text-start'>
									犬と人がより幸せに暮らせる社会を支える、
									<span className={`${styleTaglineOrange}`}>
										ペット向けの総合サービス
									</span>
								</li>
							</ul>
							<br />
							<p>
								ペット向けの総合サービスでは、愛犬との日々の中で感じた実体験を元に、
								<span className={`${styleTaglineOrange}`}>
									「動物病院の検索」「犬の親戚探し」「飼い主同士のSNS機能」
								</span>
								など、
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
						<div className={`${style} font-opensans py-14`}>
							<p>
								<span className={styleTaglineOrange}>
									Passionate about web development
								</span>
								, with several years of
								<span className={styleTaglineBlue}>
									{' '}
									self-taught experience
								</span>{' '}
								and a strong commitment to keeping up with the
								<span className={styleTaglineBlue}> latest technologies</span>.
								Leveraging
								<span className={styleTaglineBlue}>
									{' '}
									English documentation
								</span>{' '}
								and
								<span className={styleTaglineBlue}> global resources</span> has
								played a key role in developing
								<span className={styleTaglineOrange}>
									{' '}
									practical, real-world skills
								</span>
								.
								<br />
								<br />
								Specializing in
								<span className={`${styleTaglineOrange}`}>
									{' '}
									full-stack development with a focus on front-end
								</span>
								. The portfolio section showcases
								<a
									href='https://mern-athleisure-styles.vercel.app/'
									target='_blank'
									rel='noreferrer'
									className='underline underline-offset-4 hover:text-blue-400'
								>
									{' '}
									a MERN stack
									<span className={`${styleTaglineBlue}`}>
										{' '}
										e-commerce platform
									</span>
								</a>{' '}
								and
								<a
									href='https://next-aloha-estate.vercel.app/'
									target='_blank'
									rel='noreferrer'
									className='underline underline-offset-4 hover:text-blue-400'
								>
									{' '}
									a full-stack{' '}
									<span className={`${styleTaglineBlue}`}>
										vacation rental application
									</span>{' '}
									built with Next.js.
								</a>{' '}
								Both feature
								<span className={`${styleTaglineBlue}`}>
									{' '}
									user authentication
								</span>{' '}
								and
								<span className={`${styleTaglineBlue}`}>
									{' '}
									payment integration
								</span>
								, designed to reflect real-world use cases with
								<span className={`${styleTaglineBlue}`}>
									{' '}
									functionality
								</span>{' '}
								and
								<span className={`${styleTaglineBlue}`}> scalability</span> in
								mind.
								<br />
								<br />I prioritize
								<span className={`${styleTaglineBlue}`}> intuitive UX </span>
								and
								<span className={`${styleTaglineBlue}`}>
									{' '}
									user-friendly interfaces
								</span>
								. Each element—from
								<span className={`${styleTaglineOrange}`}>
									{' '}
									color scheme to layout
								</span>{' '}
								—is carefully crafted from the user's perspective, and
								continuously refined based on real-world service research and
								analysis.
								<br />
								<br />
								My experience in customer service taught me the importance of
								<span className={`${styleTaglineBlue}`}>
									{' '}
									empathy and adaptability
								</span>{' '}
								—both of which now shape my approach to building user-centered
								services. Working in Hawaii also nurtured
								<span className={`${styleTaglineOrange}`}>
									{' '}
									a global perspective
								</span>{' '}
								and
								<span className={`${styleTaglineOrange}`}>
									{' '}
									strong communication skills
								</span>
								.
								<br />I always ask,
								<span className={`${styleTaglineBlue}`}>
									{' '}
									“Who is this for, and why does it matter?”
								</span>{' '}
								—keeping the user’s needs at the heart of every project.
							</p>
							<br />
							<br />
							<p className='mb-4'>Future goals include building:</p>
							<ul className='list-disc pl-6 space-y-1.5'>
								<li className='underline underline-offset-4 text-start'>
									<span className={`${styleTaglineOrange}`}>A dating app</span>{' '}
									tailored to user behavior and needs
								</li>
								<li className='underline underline-offset-4 text-start'>
									<span className={`${styleTaglineOrange}`}>
										A travel guide platform
									</span>{' '}
									that highlights local perspectives in Hawaii
								</li>
								<li className='underline underline-offset-4 text-start'>
									<span className={`${styleTaglineOrange}`}>
										A comprehensive pet platform
									</span>{' '}
									to support the lives of dogs and their owners
								</li>
							</ul>
							<br />
							<p>
								Inspired by real-life experiences with my dog, the pet platform
								idea includes features such as
								<span className={`${styleTaglineOrange}`}>
									{' '}
									a local vet search
								</span>
								,
								<span className={`${styleTaglineOrange}`}>
									{' '}
									family tree matching for dogs
								</span>
								, and{' '}
								<span className={`${styleTaglineOrange}`}>
									a social network for pet owners
								</span>
								.
								<br />
								The goal is to offer
								<span className={`${styleTaglineBlue}`}>
									{' '}
									practical, everyday tools in a single app
								</span>{' '}
								that brings{' '}
								<span className={`${styleTaglineBlue}`}>
									peace of mind and joy
								</span>{' '}
								to both dogs and their humans.
								<br />
								<AnchorLink
									onClick={() => setSelectedPage('portfolio')}
									href='#portfolio'
									className={`${styleTaglineOrange} underline underline-offset-4`}
								>
									The portfolio section
								</AnchorLink>{' '}
								already features projects inspired by these ideas, and I plan to
								further expand on them.
								<br />
								<br />
								Determination in the face of challenges and the
								<span className={`${styleTaglineBlue}`}>
									{' '}
									desire to build something truly meaningful
								</span>{' '}
								—these are the forces that drive me. I aim to create services
								that genuinely enrich the lives of people and pets—something
								that makes them feel,
								<span className={`${styleTaglineBlue}`}>
									{' '}
									“I’m really glad this exists.”
								</span>
							</p>
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
