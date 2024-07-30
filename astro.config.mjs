import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Static Ninja Support',
			sidebar: [
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
			],
		}),
	],
});
