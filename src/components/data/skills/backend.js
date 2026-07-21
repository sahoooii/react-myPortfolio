import php from 'assets/skills/backend/php.png';
import laravel from 'assets/skills/backend/laravel.png';
import mongoose from 'assets/skills/backend/mongoose.png';
import { LiaNode } from 'react-icons/lia';
import { SiExpress } from 'react-icons/si';

const backend = [
	{
		icon: LiaNode,
		name: 'Node.js',
		style: 'shadow-green-600 text-green-500',
	},
	{
		icon: SiExpress,
		name: 'Express',
		style: 'shadow-gray-600 text-gray-400',
	},
	{
		// mongoose
		src: mongoose,
		name: 'mongoose',
		style: 'shadow-red-700',
	},
	{
		src: php,
		name: 'php',
		style: 'shadow-purple',
	},
	{
		src: laravel,
		name: 'Laravel',
		style: 'shadow-orange-600',
	},
];

export default backend;
