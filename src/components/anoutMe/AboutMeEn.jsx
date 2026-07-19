import React from 'react';

const AboutMeEn = ({ styleTaglineOrange, styleTaglineBlue }) => {
	return (
		<>
			{' '}
			<p>
				I am a <span className={styleTaglineBlue}>frontend-focused </span>
				software engineer who approaches product development from the
				perspective of{' '}
				<span className={styleTaglineOrange}>user experience.</span>
				<br />
				<br />
				Rather than thinking only about{' '}
				<span className={styleTaglineOrange}>how to implement a feature</span>,
				I start by asking{' '}
				<span className={styleTaglineOrange}>
					how users will interact with it{' '}
				</span>
				and what kind of experience it should create. That perspective guides my
				decisions across architecture, technical design, and implementation.
				<br />
				<br />
				Through building multiple full-stack personal projects, I've learned
				that{' '}
				<span className={styleTaglineOrange}>
					shipping a feature is only the beginning
				</span>
				. I continuously refine my applications through{' '}
				<span className={styleTaglineBlue}>refactoring</span>, embracing new
				technologies and ideas while regularly learning from{' '}
				<span className={styleTaglineBlue}>English documentation</span> and{' '}
				<span className={styleTaglineBlue}>
					international technical resources.
				</span>{' '}
				<br />
				<br />
				Over the past year, my approach to development has evolved
				significantly. Before writing code, I spend time organizing
				requirements, defining{' '}
				<span className={styleTaglineOrange}>design principles</span>, and
				thinking through the user experience. While implementing{' '}
				<span className={styleTaglineBlue}>real-time features</span>, I've
				gained hands-on experience{' '}
				<span className={styleTaglineBlue}>designing event flows</span>,
				separating responsibilities, managing{' '}
				<span className={styleTaglineBlue}>application state</span>, and
				considering long-term{' '}
				<span className={styleTaglineBlue}>maintainability</span> and{' '}
				<span className={styleTaglineBlue}>scalability</span>. Today, I focus
				not only on how to build a solution, but also on{' '}
				<span className={styleTaglineOrange}>
					why a particular design is the right choice
				</span>{' '}
				and what <span className={styleTaglineOrange}>trade-offs</span> it
				involves.
				<br />
				<br />
				AI has also become an important part of my development workflow—not as a
				code generator, but as a{' '}
				<span className={styleTaglineOrange}>
					design review and brainstorming partner
				</span>
				. I use it to challenge ideas, explore trade-offs, and refine
				architectural decisions, while keeping the final technical judgment my
				own.
				<br />
				<br />
				My background in customer service and management in Hawaii continues to
				shape the way I build software. Working with people from diverse
				backgrounds taught me to think first about{' '}
				<span className={styleTaglineOrange}>
					who I'm building for and why it matters
				</span>
				. That mindset naturally carries over into the way I approach product
				development today.
				<br />
				<br />
				Technology itself isn't my end goal. I'm motivated by creating products
				that deliver{' '}
				<span className={styleTaglineOrange}>
					meaningful experiences and lasting value
				</span>
				. I strive to contribute not only through implementation, but also by
				clearly communicating{' '}
				<span className={styleTaglineBlue}>design decisions</span>, explaining{' '}
				<span className={styleTaglineBlue}>technical trade-offs</span>, and
				collaborating with others to build better products.
			</p>
		</>
	);
};

export default AboutMeEn;
