import frontend from 'assets/portfolio/frontend.png';
import backend from 'assets/portfolio/backend.png';
import fullStack from 'assets/portfolio/fullStack.png';
import memoryGame from 'assets/portfolio/memoryGame.jpg';
import weatherApp from 'assets/portfolio/weatherApp.jpg';
import dogation from 'assets/portfolio/dogation.jpg';
import chill from 'assets/portfolio/chill.jpg';
import tinder from 'assets/portfolio/tinder.jpg';
import athleisureStyles from 'assets/portfolio/athleisureStyles.jpg';
import alohaEstate from 'assets/portfolio/alohaestate.png';

const projects = [
	{
		id: 1,
		src: frontend,
	},
	{
		id: 2,
		title: 'Memory Game',
		subtitle: 'HTML × CSS × JavaScript',
		src: memoryGame,
		describeEn:
			'A Memory Game built with HTML, CSS, and JavaScript. "Where Is My Dog?" challenges players to find their dog using memory skills. Features sound effects, a timer, a lives system and flip animations for an engaging experience. Now, Enjoy the Game!',
		describeJp:
			"HTML・CSS・JavaScriptで作成した神経衰弱ゲーム。「Where Is My Dog?」は、記憶力を試しながら迷子の愛犬を探すゲーム。サウンドエフェクトやタイマー、リアルなカードめくりアニメーションを搭載し、魅力的なゲーム体験を提供。さぁ、Let's Find Them!",
		code: 'https://github.com/sahoooii/js-whereIsMyDog',
		demo: 'assets/gif/memoryGame.gif',
		link: 'https://js-whereismydog.onrender.com/',
	},
	{
		id: 3,
		title: 'Weather App',
		subtitle: 'React × API × Tailwind',
		src: weatherApp,
		describeEn:
			'A weather app using React and the OpenWeather API to display current conditions and a three-hourly forecast. Features a dynamic loading animation, city/country search, and unit toggle between Celsius and Fahrenheit.',
		describeJp:
			'ReactとOpenWeather APIを使用して現在の天気と3時間ごとの予報を表示する天気アプリ。動的なローディングアニメーションや、都市、国検索、摂氏と華氏の単位切り替えなどの機能を構築。気温の変化に応じて、背景色が自動で切り替わるデザインを実装。',
		code: 'https://github.com/sahoooii/react-weatherApp-3houley',
		demo: 'assets/gif/weatherApp.gif',
		link: 'https://react-weatherapp-3hourly.onrender.com',
	},
	{
		id: 4,
		title: 'Hotel Resort Service',
		subtitle: 'React × TypeScript × Tailwind',
		src: dogation,
		describeEn:
			'A hotel resort app built with React, TypeScript, and Tailwind CSS. Features Swiper.js sliders and animations for a smooth user experience. Designed to capture the essence of a luxury dog-friendly resort, blending beach vacations with a pet-friendly vibe.',
		describeJp:
			'React × TypeScriptで開発したホテル予約アプリ。アニメーションやSwiperスライダーを活用し、犬とビーチリゾートをテーマにデザイン。特に色のバランスや全体のデザインにこだわり、体験型ドックリゾートの世界観を演出。レスポンシブ対応デザイン。',
		code: 'https://github.com/sahoooii/ts-react-dogation',
		demo: 'assets/gif/dogation.gif',
		link: 'https://dogation.onrender.com',
	},
	{
		id: 5,
		src: backend,
	},
	{
		id: 6,
		title: 'Social Media App',
		subtitle: 'PHP × HTML × CSS × MySQL',
		src: chill,
		describeEn:
			'My first full-stack project, built with PHP from scratch. A Twitter-like social media app with CRUD and an admin panel. Originally created in 2019, I refactored it in 2024 to improve design and security while showcasing my growth as a developer.',
		describeJp:
			'最初のPHPフルスタックプロジェクト。ライブラリやフレームワークを使わず開発。Twitterのようなソーシャルメディアアプリ。CRUD機能やAdminページを搭載。2019年に作成し、2024年にリファクタリング。デザインとセキュリティを向上。成長を示すため、基本構造は維持。',
		code: 'https://github.com/sahoooii/php-chill',
		demo: 'assets/gif/chill.gif',
		link: '',
	},
	{
		id: 7,
		title: 'Dating App',
		subtitle: 'Laravel × Bootstrap × MySQL',
		src: tinder,
		describeEn:
			'A Tinder-like dating app built with Laravel, MySQL, and Bootstrap. Refactored in 2024 with an admin page and improved design. Added more dummy data for profile-based swiping. Users can register, set preferences, and match to view profiles.',
		describeJp:
			'Laravel, MySQL, Bootstrapで開発したTinder風のマッチングアプリ。2024年にリファクタリングし、Adminページを追加し、デザインも改善。ダミーデータを増やし、プロフィール設定に基づくスワイプ機能を強化。マッチすると相手のプロフィールを閲覧可能。',
		code: 'https://github.com/sahoooii/laravel_tinderApp',
		demo: 'assets/gif/tinder.gif',
		link: '',
	},
	{
		id: 8,
		src: fullStack,
	},

	{
		id: 9,
		title: 'E-Commerce',
		subtitle: 'MERN',
		src: athleisureStyles,
		describeEn:
			'Athleisure Styles is a MERN stack eCommerce platform with Redux and Material UI. Features a fully responsive design and a shopping cart with PayPal and card payments for a seamless experience.',
		describeJp:
			'MERNスタックとReduxで構築したeコマースプラットフォーム。デザインにはMaterial UIとTailwind CSSを使用。アイテムのCRUD機能やAdminシステムも構築。PayPalやクレジット/デビット決済に対応し、注文履歴管理などの機能も備えた、実用的なショッピングサイト。',
		code: 'https://github.com/sahoooii/MERN_AthleisureStyles',
		demo: 'assets/gif/athleisureStyles.gif',
		link: 'https://athleisurestyles.onrender.com/',
	},
	{
		id: 10,
		title: 'Vacation Rental App',
		subtitle: 'Next.js Full-Stack',
		src: alohaEstate,
		describeEn:
			'A full-stack vacation rental app built with Next.js and TypeScript. Designed with shadcn/ui and Tailwind CSS for a simple yet functional experience to find the perfect vacation rental. Check it out!',
		describeJp:
			'Next.jsとTypeScriptを使用して構築された Airbnbのようなフルスタックのバケーションレンタルアプリ。shadcn/uiとTailwind CSSを使用してUIを設計。シンプルでありながら機能的、完璧なバケーションレンタルを見つけるのに十分な機能を構築。please browse!',
		code: 'https://github.com/sahoooii/next-alohaEstate',
		demo: 'assets/gif/alohaEstate.gif',
		link: 'https://next-aloha-estate.vercel.app',
	},
];

export default projects;
