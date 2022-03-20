import fg from 'fast-glob'
import type { Plugin } from 'vite'
import {
	createPluginName,
	createVirtualModuleID
} from './shared/create'

interface Options {
	source: string | string[]
}

const useName = createPluginName(true)

const usePlugin = (options: Options): Plugin => {
	const { source } = options

	const { virtualModuleId, resolvedVirtualModuleId } =
		createVirtualModuleID('scan')

	return {
		name: useName('scan'),
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId
			}
		},
		async load(id) {
			if (id === resolvedVirtualModuleId) {
				const files = await fg(source)
				const str = JSON.stringify(files)
				return `export const files = ${str}`
			}
		}
	}
}

export default usePlugin
