import php from '../../assets/skills/php.png';
import laravel from '../../assets/skills/laravel.png';
import sql from '../../assets/skills/mysql.png';
import mongoDb from '../../assets/skills/mongoDb.png';
import github from '../../assets/skills/github.png';
import { LiaNode } from 'react-icons/lia';
import { SiExpress } from 'react-icons/si';

const backend = [
	{
		id: 1,
		src: php,
		name: 'php',
		style: 'shadow-purple',
	},
	{
		id: 2,
		src: laravel,
		name: 'Laravel',
		style: 'shadow-orange-600',
	},
	{
		id: 3,
		icon: LiaNode,
		name: 'Node.js',
		style: 'shadow-green-600 text-green-500',
	},
	{
		id: 4,
		src: sql,
		name: 'MySQL',
		style: 'shadow-blue-600',
	},
	{
		id: 5,
		src: mongoDb,
		name: 'MongoDB',
		style: 'shadow-green-700',
	},
	{
		id: 6,
		icon: SiExpress,
		name: 'Express',
		style: 'shadow-gray-600 text-gray-400',
	},
	{
		id: 7,
		src: github,
		name: 'GitHub',
		style: 'shadow-slate-700',
	},
];

export default backend;
