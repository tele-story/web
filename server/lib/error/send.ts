import { Response } from 'express'
import HttpError from './http'

const sendError = (res: Response, error: unknown, defaultStatus = 500) => {
	res
		.status(error instanceof HttpError ? error.status : defaultStatus)
		.send(error instanceof Error ? error.message : error)
}

export default sendError
