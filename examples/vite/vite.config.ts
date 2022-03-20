import { defineConfig } from 'vite'
import Scan from 'vite-plugin-scan'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	plugins: [
		Vue(),
		Scan({
			source: 'modules/**/*'
		}),
		Inspect()
	]
})
