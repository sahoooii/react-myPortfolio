import github from 'assets/skills/tools/github.png';
import git from 'assets/skills/tools/git.png';
import vercel from 'assets/skills/tools/vercel.png';
import render from 'assets/skills/tools/render.png';
import { SiRender } from 'react-icons/si';
import postman from 'assets/skills/tools/postman.png';

const tools = [
	{
		src: git,
		name: 'Git',
		style: 'shadow-red-700',
	},
	{
		src: github,
		name: 'GitHub',
		style: 'shadow-slate-700',
	},
	{
		src: vercel,
		name: 'Vercel',
		style: 'shadow-slate-400',
	},
	{
		icon: SiRender,
		name: 'Render',
		style: 'shadow-slate-600',
	},
	{
		src: postman,
		name: 'Postman',
		style: 'shadow-orange-600',
	},
];

export default tools;
