// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'TrucklineMP',
				pl: 'TrucklineMP',
			},
			defaultLocale: 'en',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			logo: {
				src: './src/assets/truckline_large_no_shadow.svg',
				alt: 'TrucklineMP',
				replacesTitle: true,
			},
			favicon: '/truckline_no_shadow.svg',
			customCss: [
				'@fontsource-variable/geist',
				'@fontsource-variable/geist-mono',
				'./src/styles/marathon.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						pl: 'Zacznij tutaj',
					},
					items: [
						{
							slug: 'guides/getting-started',
							label: 'Introduction',
							translations: {
								pl: 'Wprowadzenie',
							},
						},
					],
				},
				{
					label: 'Community',
					translations: {
						pl: 'Społeczność',
					},
					items: [
						{
							slug: 'guides/rules',
							label: 'Server Rules',
							translations: {
								pl: 'Zasady serwera',
							},
						},
						{
							slug: 'guides/faq',
							label: 'FAQ',
							translations: {
								pl: 'FAQ',
							},
						},
					],
				},
				{
					label: 'Platform',
					translations: {
						pl: 'Platforma',
					},
					items: [
						{
							slug: 'guides/features',
							label: 'Features',
							translations: {
								pl: 'Funkcje',
							},
						},
						{
							slug: 'guides/contributing',
							label: 'Contributing',
							translations: {
								pl: 'Współtworzenie',
							},
						},
					],
				},
			],
		}),
	],
});
