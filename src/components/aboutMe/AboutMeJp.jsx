import React from 'react';

export const AboutMeJp = ({ styleTaglineOrange, styleTaglineBlue }) => {
	return (
		<>
			<p>
				私は、
				<span className={`${styleTaglineOrange}`}>ユーザー体験を起点に </span>
				、フロントエンドからプロダクト全体を考えるエンジニアです。
				<br />
				<br />
				<span className={`${styleTaglineOrange}`}>
					「使う人が迷わず操作できるか」「この機能はどのような体験につながるのか」{' '}
				</span>
				といった視点を大切にし、設計や技術選定、実装まで一貫して考えながら開発に取り組んでいます。
				<br />
				<br />
				個人開発では、実装して終わりではなく、{' '}
				<span className={`${styleTaglineOrange}`}>
					リファクタリングを重ねながらプロダクトを育てること{' '}
				</span>
				を大切にしてきました。新しい技術や考え方を積極的に取り入れ、
				<span className={`${styleTaglineBlue}`}>
					英語のドキュメントや海外の技術リソース
				</span>
				も日常的に活用しています。
				<br />
				開発では、実装に取り掛かる前に要件やユーザー体験を整理し、
				<span className={`${styleTaglineOrange}`}>設計方針を考えること </span>
				を大切にしています。
				<span className={`${styleTaglineBlue}`}>リアルタイム通信 </span>
				の実装では、
				<span className={`${styleTaglineBlue}`}>
					イベント設計や責務分離、状態管理、将来の拡張性{' '}
				</span>
				を検討しながら設計を進める経験を重ね、 「どう実装するか」だけでなく、
				<span className={`${styleTaglineOrange}`}>
					「なぜこの設計を選ぶのか」「どのようなトレードオフがあるのか」{' '}
				</span>
				を意識して判断するようになりました。
				<br />
				<br />
				設計を検討する際には、AIをコード生成だけでなく、
				<span className={`${styleTaglineBlue}`}>
					設計レビューや壁打ちのパートナー{' '}
				</span>
				として活用しています。要件整理や設計方針について議論を重ねながら考えを深め、最終的な設計判断は自分自身で行うことを大切にしています。
				<br />
				<br />
				長年のカスタマーサービスとハワイでの就労経験を通じて培った
				<span className={`${styleTaglineOrange}`}>
					「誰のために、なぜ作るのか」{' '}
				</span>
				を考える姿勢は、現在の開発にも活かされています。この経験は現在の開発においても、ユーザー体験を起点に考える土台になっています。
				<br />
				<br />
				技術そのものではなく、その技術を通じて{' '}
				<span className={`${styleTaglineOrange}`}>
					どのような体験や価値を届けられるか{' '}
				</span>
				を大切にし、
				<span className={`${styleTaglineBlue}`}>設計意図や判断理由</span>
				を言語化しながら、チームでより良いプロダクトづくりに貢献できるエンジニアを目指しています。
			</p>
		</>
	);
};
