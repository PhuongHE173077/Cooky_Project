import { StatusCodes } from "http-status-codes"
import Joi from "joi"
import ApiError from "~/utils/ApiError"


const createNew = async (req, res, next) => {
  const schema = Joi.object({
    recipeName: Joi.string().required(),
    recipeDescription: Joi.string().required(),
    ingredients: Joi.array().items({
      ingredient: Joi.string().required(),
      icon: Joi.string().required(),
      quantity: Joi.string().required()
    }).required(),
    steps: Joi.array().required(),
    calories: Joi.number().required(),
    cookTime: Joi.number().required(),
    serveTo: Joi.number().required(),
    imagePrompt: Joi.string().required()
  })

  try {
    await schema.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }
}


export const recipeValidation = {
  createNew
}
