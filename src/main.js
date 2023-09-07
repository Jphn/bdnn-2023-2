import server from './server.js'

try {
	await server()
} catch (error) {
	console.log(error)
}
