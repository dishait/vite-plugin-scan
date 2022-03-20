import { defineConfig } from 'vite'
import Scan from 'vite-plugin-scan'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	plugins: [
		Vue(),
		Scan({
			objectMode: true, // 对象模式
			source: 'modules/**/*' // 源目标
		}),
		Inspect()
	]
})
