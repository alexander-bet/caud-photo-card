import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('caudena/photo-card', {
	title: __('Caudena Photo Card', 'caudena'),
	description: __('This is the photo card block for Caudena theme', 'caudena'),
	category: 'widgets',
	icon: 'format-image',
	supports: {
		html: false,
	},
	attributes: {
		photo: {
			type: 'string',
			default: '',
		},
		position: {
			type: 'string',
			default: '',
		},
		backgroundColor: {
			type: 'string',
			default: '#ffffff',
		},
		socialLinks: {
			type: 'object',
			default: {
				X: '',
				LinkedIn: '',
				Facebook: '',
				Instagram: '',
				Reddit: '',
				HackerNews: '',
			},
		},
		content: {
			type: 'string',
			default: '',
		},
	},
	edit: Edit,
	save,
});