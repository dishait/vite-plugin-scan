import fg from 'fast-glob'
import type { Plugin } from 'vite'
import { schedule } from './shared/base'
import {
	createPluginName,
	createVirtualModuleID
} from './shared/create'
import { reloadVirtualModule } from './shared/modules'

interface Options {
	glob?: boolean
	source: string | string[]
}

const useName = createPluginName(true)

const usePlugin = (options: Options): Plugin => {
	const { source, glob = true } = options

	const { virtualModuleId, resolvedVirtualModuleId } =
		createVirtualModuleID('scan')

	return {
		name: useName('scan'),
		config(c) {
			if (!glob) return
			if (!c.server) c.server = {}
			if (!c.server.watch) c.server.watch = {}
			c.server.watch.disableGlobbing = false
		},
		configureServer({ watcher, ws, moduleGraph }) {
			watcher.add(source)

			const reloadVirtualModuleWithSchedule = schedule(
				() => {
					reloadVirtualModule(
						resolvedVirtualModuleId,
						moduleGraph,
						ws
					)
				}
			)
			watcher.on('add', () => {
				reloadVirtualModuleWithSchedule()
			})

			watcher.on('unlink', () => {
				reloadVirtualModuleWithSchedule()
			})
		},
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
