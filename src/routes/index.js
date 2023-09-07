import {
	createOne,
	deleteOne,
	getAll,
	updateOne,
} from '../controllers/tasks.js'

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

	app.post('/tasks', createOne)
		.get('/tasks', getAll)
		.put('/tasks/:id', updateOne)
		.delete('/tasks/:id', deleteOne)

	done()
}
