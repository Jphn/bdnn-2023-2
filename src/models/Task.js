import { Schema, model } from 'mongoose'

const TaskSchema = new Schema(
	{
		description: { type: String, required: true },
		done: { type: Boolean, required: true },
	},
	{ timestamps: true }
)

export const TaskModel = model('Task', TaskSchema)
