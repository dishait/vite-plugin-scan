import type { Plugin } from 'vite'
import {
	createPluginName,
	createVirtualModuleID
} from './shared/create'

interface Options {}

const useName = createPluginName(true)

const usePlugin = (options?: Partial<Options>): Plugin => {
	const { virtualModuleId, resolvedVirtualModuleId } =
		createVirtualModuleID('scan')

	return {
		name: useName('scan'),
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId
			}
		},
		load(id) {
			if (id === resolvedVirtualModuleId) {
				return 'export let msg = "hello"'
			}
		}
	}
}

export default usePlugin
