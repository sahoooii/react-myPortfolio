const projects = [
	{
		id: 1,
		title: 'Memory Game',
		subtitle: 'HTML × CSS × JavaScript',
		src: '../../assets/portfolio/memoryGame.jpg',
		describeEn:
			"Create a Memory Game using only JavaScript. The title is Where Is My Dog?. It's literally to find your dog! Add sound effects and timer systems, and the player lives. You can enjoy it like a real game. I particularly about the design looks like real cards and flips. And fully responsive. Enjoy the Game!",
		describeJp:
			'JavaScriptだけで作ったメモリーゲーム。ゲーム名は"Where Is My Dog ?" 名前の通り、あなたの犬を探すゲーム。サウンドやタイマー、Player Livesまで設定されているので、本当のゲームのように楽しめる。特にカードと、カードをめくるときのデザインにこだわった、レスポンシブ対応デザイン。それではEnjoy the Game!',
		code: 'https://github.com/sahoooii/js-whereIsMyDog',
		demo: '../../assets/gif/memoryGame.gif',
		link: '',
	},
	{
		id: 2,
		title: 'Weather App',
		subtitle: 'React × API × Tailwind',
		src: '../../assets/portfolio/weatherApp.jpg',
		describeEn:
			'Using OpenWeather API, Get current weather data and three hourly forecast data. I struggled that get data and restructure it into what I just needed. Also, created an amazing loading animation and background, the Search functionality of city or country, see a three hourly forecast. You can set the Celsius and Fahrenheit easily. Updated to be more user-friendly.',
		describeJp:
			'OpenWeather API を使って作成したお天気アプリ。必要なデータだけを取得し、再構築してまとめていくのに苦労した。ローディング中のアニメーション、気温によって変わる背景カラー、好きな都市や国でのお天気検索機能、現在の天気や 3 時間毎の天気情報を取得でき、 摂氏、華氏表示も簡単に変更できるように、より使いやすくした。',
		code: 'https://github.com/sahoooii/react-weatherApp-3houley',
		demo: '../../assets/gif/weatherApp.gif',
		link: 'https://react-weatherapp-3hourly.onrender.com',
	},
	{
		id: 3,
		title: 'Hotel Resort Service',
		subtitle: 'React × TypeScript × Tailwind',
		src: '../../assets/portfolio/dogation.jpg',
		describeEn:
			"Create an original Hotel Resort App. The name is Dogation. Use React TypeScript and Tailwind. I've been working on learning TypeScript, so I used it. I created the logo and design and used a bunch of animation. The theme is Beach Vacations and Dogs. Also, I tried to use Swiper for sliders. And of course fully responsive!",
		describeJp:
			'ReactとTypeScriptとTailwind CSSを使って作った、オリジナルのホテルリゾートwebページ。TypeScriptを習得中なので、初導入。ロゴやデザインも完全にオリジナル、アニメーションも多用。テーマはビーチ、バケーション、犬。デザインと全体の色のバランスにこだわった。今回初めてスライダー作成にSwiperを使用。レスポンシブ対応デザイン。',
		code: 'https://github.com/sahoooii/ts-react-dogation',
		demo: '../../assets/gif/dogation.gif',
		link: 'https://dogation.onrender.com',
	},
	{
		id: 4,
		title: 'Social Media App',
		subtitle: 'PHP × CSS × MySQL',
		src: '../../assets/portfolio/chill.jpg',
		describeEn:
			"It's my first original Backend piece, not using any libraries and frameworks. I use MySQL for a database. I know that the design is not good. I created it, the very first beginning. But fully responsive! You can use it like Twitter. Create your account and post something. What you thought or your favorite picture!",
		describeJp:
			'初めて作ったオリジナルのバックエンドSNSアプリ。ライブラリやフレームワークを使わず、生のPHPを使い構築。データベースはMySQLを使用。初期の頃に作ったのでデザインは決して良くないが、レスポンシブにも対応。アカウントを作って、Twitterみたいに適当に何かつぶやいたり、好きな写真をポストできる。',
		code: '',
		demo: '../../assets/gif/chill.gif',
		link: '',
	},
	{
		id: 5,
		title: 'Dating App',
		subtitle: 'Laravel × Bootstrap × MySQL',
		src: '../../assets/portfolio/tinder.jpg',
		describeEn:
			"Created like Tinder App. Used Laravel and MySQL. It's my first piece using the framework and adding some dummy data so you can swipe it like Tinder. You can set your situation in your relationship, like something casual or serious relationships. Also, If you match someone, you can see the profile. Yes, literally Tinder!",
		describeJp:
			'Tinderのようなマッチングアプリ。Laravelを使って作った初めてのアプリ。ダミーデータを追加したり、どんな人を探しているかなど設定して、swipeできるようにした。相手とマッチしたらその人のプロフィールが見られるようになったり、まさにTinderのようなDatingアプリ。',
		code: 'https://github.com/sahoooii/laravel_tinderApp',
		demo: '../../assets/gif/tinder.gif',
		link: '',
	},
	{
		id: 6,
		title: 'E-Commerce',
		subtitle: 'MERN',
		src: '../../assets/portfolio/athleisureStyles.jpg',
		describeEn:
			'This project is an eCommerce platform built with the MERN stack and Redux and using Material UI. I made the name Athleisure Styles. At first time, I was not used to using MUI, so this was one of the struggling parts. Fully responsive web design. It is a full-featured shopping cart with PayPal and credit/debit payments.',
		describeJp:
			'このプロジェクトは、MERNスタックとReduxで構築されマテリアルUIを使用するeコマースプラットフォーム。Athleisure Stylesは、MERNスタックプロジェクトの初めてのオリジナル作品。初めてマテリアルUIを使用したので、なかなか慣れずここが苦労した部分の一つでもあった。PayPalとクレジット/デビット支払いを備えたフル機能のショッピングサイト。',
		code: 'https://github.com/sahoooii/MERN_AthleisureStyles',
		demo: '../../assets/gif/athleisureStyles.gif',
		link: 'https://athleisurestyles.onrender.com/',
	},
];

export default projects;
