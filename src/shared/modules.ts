import type {
	ModuleNode,
	ModuleGraph,
	WebSocketServer
} from 'vite'

export const reloadVirtualModule = (
	resolvedVirtualModuleId: string,
	moduleGraph: ModuleGraph,
	ws: WebSocketServer
) => {
	const module = moduleGraph.getModuleById(
		resolvedVirtualModuleId
	)
	if (module) {
		moduleGraph.invalidateModule(module)
		ws.send({
			type: 'full-reload'
		})
	}
}
