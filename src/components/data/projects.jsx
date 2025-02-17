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
			'I created a Memory Game using HTML, CSS, and JavaScript without any frameworks. The title is Where Is My Dog?—a game where you use your memory to find your dog! It features sound effects, a timer system, and a player lives counter, making it feel like a real game. I paid special attention to the design of the cards and the flipping animation. Enjoy the game!',
		describeJp:
			'フレームワークを使用せずに、HTML,CSS,JavaScriptだけで作ったメモリーゲーム。ゲーム名は"Where Is My Dog?" 名前の通り、記憶力を使ってあなたの犬を探すゲーム。サウンドやタイマー、Player Livesまで設定されているので、本当のゲームのように楽しめる。特にカードと、カードをめくるときのデザインにこだわった、レスポンシブ対応デザイン。Enjoy the Game!',
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
			'I used the OpenWeather API to fetch current weather data and a three-hourly forecast. Restructuring the data was challenging, but I overcame it. I designed a loading animation, background, and search functionality for city and country lookups. You can switch between Celsius and Fahrenheit, and I recently improved the design for a better user experience.',
		describeJp:
			'OpenWeather APIを使って作成したお天気アプリ。必要なデータだけを取得し、再構築してまとめていくのに苦労した。ローディング中のアニメーション、気温によって変わる背景カラー、好きな都市や国でのお天気検索機能、現在の天気や 3 時間毎の天気情報を取得でき、摂氏、華氏表示も簡単に変更できるように、より使いやすくした。',
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
			"I built Dogation, a hotel resort app with React, TypeScript, and Tailwind CSS. Since I'm learning TypeScript, I fully implemented it in this project. I designed the logo and UI, adding animations for a fun, engaging experience. The theme blends beach vacations and dogs, and I used Swiper.js for smooth sliders. Of course, it's fully responsive for seamless browsing!",
		describeJp:
			'ReactとTypeScriptとTailwind CSSを使って作った、オリジナルのホテルリゾートwebページ。TypeScriptを習得中なので、初導入。ロゴやデザインも完全にオリジナル、アニメーションも多用。テーマはビーチ、バケーション、犬。デザインと全体の色のバランスにこだわった。今回初めてスライダー作成にSwiperを使用。レスポンシブ対応デザイン。',
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
			'This is my first full-stack project, developed primarily with PHP without any frameworks. It is a Twitter-like social media application featuring a complete CRUD system and an admin panel. Originally built in 2019, I refactored it this year to enhance design and security while maintaining its core functionality, demonstrating my progress as a developer.',
		describeJp:
			"最初のオリジナルのフルスタックプロジェクト。ライブラリやフレームワークを使用しないで主にPHPで開発。Twitterのようなソーシャルメディアアプリです。CRUDシステムを搭載し、Adminシステムとページも作成。2019年に作成したものだが、2024年にリファクタリングをし、デザインと安全性をより良くした。自分のスキルがどれだけ向上しているかを証明したかったので、基本的にはすべて最初のプロジェクトと同じにしている。Let's Tweet something",
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
			'I built a Tinder-like dating app using Laravel, MySQL, Bootstrap, and more. Originally created two years ago, I recently refactored it and added an admin page. I also included more dummy data for better swiping based on user profiles. Users can register, set their dating status, and match with others to view their profiles. Yes, it’s a fully functional dating app!',
		describeJp:
			'TinderのようなDating App。Laravel, MySQL, Bootstrapを主に使用。2年ほど前に作成したが、2024年にAdminページを追加し、デザインも改善。ダミーデータもさらに追加し、プロフィールの設定に基づいて、swipeできる。自分のプロフィールを詳細に登録することができ、相手を探せる。もしマッチすれば相手のプロフィールも見ることがきる、まさにDating App。',
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
			'I built Athleisure Styles, an eCommerce platform using the MERN stack, Redux, and Material UI. Since I was new to MUI, it was a challenge at first, but I learned a lot through the process. The platform features a fully responsive design and a full-featured shopping cart system with PayPal and credit/debit payment integration, providing a seamless shopping experience.',
		describeJp:
			'このプロジェクトは、MERNスタックとReduxで構築されマテリアルUIを使用するeコマースプラットフォーム。MERNスタックプロジェクトの初めてのオリジナル作品。初めてマテリアルUIを使用したので、なかなか慣れずここが苦労した部分の一つでもあった。PayPalとクレジット/デビット支払いを備えたフル機能のショッピングサイト。',
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
			'I built a full-stack vacation rental app like Airbnb using Next.js and TypeScript. The UI is designed with shadcn/ui and Tailwind CSS. This is my first original Next.js full-stack project, and though it looks simple, it has all the essential features to find the perfect vacation rental. Check it out!',
		describeJp:
			'このプロジェクトは、Next.jsとTypeScriptを使用して構築された Airbnbのようなフルスタックのバケーションレンタルアプリ。主に shadcn/uiとTailwind CSSを使用してUIを設計。Next.jsを使用した初めてのフルスタックオリジナルプロジェクト。見た目はシンプルだが、完璧なバケーションレンタルを見つけるのに十分な機能を備えているので、please browse!',
		code: 'https://github.com/sahoooii/next-alohaEstate',
		demo: 'assets/gif/alohaEstate.gif',
		link: 'https://next-aloha-estate.vercel.app',
	},
];

export default projects;
