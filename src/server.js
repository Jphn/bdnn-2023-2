import Fastify from 'fastify'
import mongoose from 'mongoose'
import routes from './routes/index.js'

export const app = Fastify({ logger: true })

app.register(routes)

export default async function () {
	await mongoose.connect('mongodb://localhost:27017/bdnn')

	app.listen({ host: '0.0.0.0', port: 8000 }, () =>
		console.log('[main.ts] Server listening at http://localhost:8000')
	)
}
