import { StatusCodes } from "http-status-codes"
import { GenerateRecipeImage } from "~/providers/AIguruProvider"
import { resultAnswerByAI } from "~/providers/AIProvider"
import ApiError from "~/utils/ApiError"

const createRecipeAI = async (req, res, next) => {
  try {
    const answer = await resultAnswerByAI(req.body.prompt, req.body.type)
    res.status(StatusCodes.OK).json(answer)
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }

}

const createImageAI = async (req, res, next) => {
  try {
    const result = await GenerateRecipeImage(req.body.imagePrompt)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }

}

export const AiController = {
  createRecipeAI,
  createImageAI,
}