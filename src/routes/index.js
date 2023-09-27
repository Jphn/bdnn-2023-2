import {
	createOne,
	deleteOne,
	getAll,
	toggleOne,
	updateOne,
} from '../controllers/task.controller.js'

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export default async function (app, options, done) {
	app.get('/', (req, rep) =>
		rep.send({
			author: 'João Pedro Holanda Neves',
			github: 'github.com/Jphn',
			version: '1.0.0',
		})
	)

	app.post('/task', createOne)
		.get('/task', getAll)
		.put('/task/:id', updateOne)
		.delete('/task/:id', deleteOne)
		.put('/task/:id/toggle', toggleOne)

	done()
}
