export const schedule = (invoke: Function, delay = 500) => {
	let timeout: NodeJS.Timeout
	return (...rest: any[]) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			invoke(rest)
		}, delay)
	}
}
