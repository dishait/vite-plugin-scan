import { Plugin, normalizePath } from 'vite'
import { createPluginName } from './shared/create'

interface Options {}

const useName = createPluginName(true)

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('scan')
	}
}

export default usePlugin
