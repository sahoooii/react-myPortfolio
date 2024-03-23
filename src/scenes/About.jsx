import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const About = ({ isJp }) => {
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
						<p className='md:mt-10 mt-5 px-2 text-start tracking-wide md:text-xl text-lg md:leading-9 leading-7 font-jp'>
							私は、アルバイトの時期も含めると、カスタマーサービス、接客業での約15年ほど経験があります。大学院の専攻がファッションマネージメントだったこともあり、ファッションの分野を中心に働いてきました。学校を卒業後、ハワイに渡り、ワイキキの真ん中にある小さなアパレルショップで6年ほど働いていました。そこでは、接客はもちろんのこと、Visual
							Marketingや在庫管理、SNSを使ったマーケティングなど任されていました。
							<br />
							プログラミングに最初に触れたのは、2019年頃になります。学生時代使っていた古いWindowsのPC片手に、何から始めたらいいかも分からないようなところから独学でスタートしました。
							<br />
							JavaScript, Node.js, PHP, MySQL, Mongo DBなどのデータベース。
							その他のスキルを使うことができます。エンジニアになるため、他の言語も日々勉強しております。Laravel,
							React, Tailwind CSS, MUI
							などのライブラリやフレームワークも使うことができます。今は特にReactとTailWindを中心に勉強しているので、このポートフォリオはそれらを使って作成しました。他の言語を使って作成したものもあるのでポートフォリオセクションをぜひご覧ください。
							<br />
							私の強みは高いコミュニケーションスキルと、誰に対しても柔軟な考え方、そしてハワイで培った「アロハスピリット」です。みなさんと一緒に働ける日を楽しみにしています!
						</p>
					) : (
						<p className='md:mt-10 mt-5 px-2 text-start tracking-wide md:text-xl text-lg md:leading-9 leading-7 font-opensans'>
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
