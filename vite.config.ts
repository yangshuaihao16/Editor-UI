import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import DefineOptions from 'unplugin-vue-define-options/vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [Vue({ include: [/\.vue$/, /\.md$/] }), Markdown(), DefineOptions(), eslintPlugin()],
	server: {
		port: 9999,
		host: '0.0.0.0',
	},
});
