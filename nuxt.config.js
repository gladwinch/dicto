import colors from 'vuetify/es5/util/colors'

export default {
	head: {
		titleTemplate: '%s - dicto',
		title: 'dicto',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	css: [],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		'@nuxtjs/axios',
	],
	axios: {},
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			light: {
				primary: '#0046FE'
			}
		}
	},
	build: {},
	serverMiddleware: [
		'~/api/index.js'
	]
}
