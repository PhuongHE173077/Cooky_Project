import { StatusCodes } from 'http-status-codes'
import { resultAnswerByAI } from '~/providers/AIProvider'
import ApiError from '~/utils/ApiError'

const express = require('express')
const Router = express()

Router.post('/', async (req, res, next) => {
  try {

    const answer = await resultAnswerByAI(req.body.prompt, req.body.type)
    res.status(StatusCodes.OK).json(answer)
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }

})


export const AiRouter = Router
