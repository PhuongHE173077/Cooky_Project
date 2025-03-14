import { StatusCodes } from "http-status-codes"
import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"
import ApiError from "~/utils/ApiError"

const Joi = require("joi")
const { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } = require("~/utils/validations")

const RECIPES_COLLECTION = 'Recipes'
const RECIPES_COLLECTION_SCHEMA = Joi.object({
  recipeName: Joi.string().required(),
  recipeDescription: Joi.string().required(),
  imagePrompt: Joi.string().required(),

  ingredients: Joi.array().items({
    ingredient: Joi.string().required(),
    icon: Joi.string().required(),
    quantity: Joi.string().required()
  }).required(),

  steps: Joi.array().required(),
  calories: Joi.number().required(),
  cookTime: Joi.number().required(),
  serveTo: Joi.number().required(),

  userId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),

  status: Joi.boolean().default(true),

  createdAt: Joi.date().default(Date.now()),
  updatedAt: Joi.date().default(null),

  _destroy: Joi.boolean().default(false)
})

const getDetails = async (id) => {
  try {
    //
    const result = await GET_DB().collection(RECIPES_COLLECTION).aggregate([
      {
        $match: {
          _id: new ObjectId(id)
        }
      }
    ]).toArray()

    return result[0] || {}
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const getAll = async () => {
  try {
    //
    const result = await GET_DB().collection(RECIPES_COLLECTION).find().toArray()

    return result
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const findById = async (id) => {
  try {
    return await GET_DB().collection(RECIPES_COLLECTION).findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const recipeModel = {
  RECIPES_COLLECTION,
  RECIPES_COLLECTION_SCHEMA,
  findById,
  getDetails,
  getAll
}