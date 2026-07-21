import frontend from './frontend';
import backend from './backend';
import database from './database';
import tools from './tools';

const skillCategories = [
	{
		title: 'Frontend',
		languages: frontend,
	},
	{
		title: 'Backend',
		languages: backend,
	},
	{
		title: 'Database',
		languages: database,
	},
	{
		title: 'Tools',
		languages: tools,
	},
];

export default skillCategories;
