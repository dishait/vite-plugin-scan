import type {
	ModuleNode,
	ModuleGraph,
	WebSocketServer
} from 'vite'

export const reloadVirtualModule = (
	id: string,
	moduleGraph: ModuleGraph,
	ws: WebSocketServer,
	path = '*'
) => {
	const module = moduleGraph.getModuleById(
		'/@id/__x00__' + id
	)
	if (module) {
		moduleGraph.invalidateModule(module)
		if (ws) {
			ws.send({
				path,
				type: 'full-reload'
			})
		}
	}
}
