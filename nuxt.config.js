export default {
	head: {
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
		],
	},
	css: [
		'./assets/main.css'
	],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxtjs/tailwindcss',
	],
	modules: [
		'@nuxtjs/axios',
	],
	axios: {},
	build: {},
	serverMiddleware: [
		'~/api/index.js'
	]
}