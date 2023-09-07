import Fastify from 'fastify'
import mongoose from 'mongoose'

export const app = Fastify({ logger: true })

export default async function () {
	await mongoose.connect('mongodb://localhost:27017/bdnn')

	app.listen({ host: '0.0.0.0', port: 8000 }, () =>
		console.log('[main.ts] Server listening at http://localhost:8000')
	)
}
