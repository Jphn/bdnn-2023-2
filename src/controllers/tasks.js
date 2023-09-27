import { TaskModel } from '../models/Task.js'

/**
 *
 * @param {import('fastify').FastifyRequest} req
 * @param {import('fastify').FastifyReply} rep
 */
async function createOne(req, rep) {
	const { description } = req.body

	const newTask = new TaskModel({
		description,
		done: false,
	})

	await newTask.save()

	rep.status(200).send({ message: 'Task successfully created!' })
}

/**
 *
 * @param {import('fastify').FastifyRequest} req
 * @param {import('fastify').FastifyReply} rep
 */
async function getAll(req, rep) {
	const { done } = req.query

	const search = done ? { done: !!parseInt(done) } : {}

	const tasks = await TaskModel.find(search)

	rep.status(tasks.length === 0 ? 204 : 200).send(tasks)
}

/**
 *
 * @param {import('fastify').FastifyRequest} req
 * @param {import('fastify').FastifyReply} rep
 */
async function updateOne(req, rep) {
	const { id } = req.params

	const task = await TaskModel.findById(id)

	if (task === null)
		return rep.status(404).send({ message: 'Task ID not found.' })

	const { description } = req.body

	await task.updateOne({
		description,
	})

	return rep.status(200).send({ message: 'Task successfully updated.' })
}

/**
 *
 * @param {import('fastify').FastifyRequest} req
 * @param {import('fastify').FastifyReply} rep
 */
async function deleteOne(req, rep) {
	const { id } = req.params

	await TaskModel.findByIdAndDelete(id)

	rep.status(200).send({ message: 'Task successfully deleted!' })
}

/**
 *
 * @param {import('fastify').FastifyRequest} req
 * @param {import('fastify').FastifyReply} rep
 */
async function toggleOne(req, rep) {
	const { id } = req.params

	const task = await TaskModel.findById(id)

	if (task === null)
		return rep.status(404).send({ message: 'Task ID not found.' })

	await task.updateOne({
		done: !task.done,
	})

	return rep.status(202).send({ message: 'Task successfully toggled.' })
}

export { createOne, deleteOne, getAll, toggleOne, updateOne }
