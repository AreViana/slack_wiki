import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Slack Wiki",
	description: "Aprende sobre el mundo del slackline!",
	base: '/slack_wiki/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/assets/feed-your-ideas.png',
		nav: [
			{ text: 'Inicio', link: '/' },
			{ text: 'Conocenos', link: '/nosotras' }
		],
		sidebar: [
			{ text: 'Quienes somos', link: '/nosotras' },
			{
				text: 'Wiki',
				items: [
					{ text: 'Glosario', link: '/glosario' },
					{ text: 'Recursos', link: '/recursos' }
				]
			}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/areviana/slack_wiki' },
		],
		footer: {
			message: 'Hecho con amor 💚 en Latinoamerica.',
			copyright: 'Copyright © 2026-present Slacklife Latam. <br> <a href="https://www.flaticon.com/free-stickers/creativity" title="creativity stickers">Creativity stickers created by Stickers - Flaticon</a>'
		},
		notFound: {
			link: '/',
			code: '404',
			title: 'Ups! Aqui no hay nada.',
			linkText: 'Inicio',
			quote: 'Contáctanos si gustarias encontrar algo más en nuestro sitio 💜'
		},
		outline: {
			label: 'Temas'
		}
	}
})
