import { StatusCodes } from "http-status-codes"
import { recipeService } from "~/services/recipeServices"

const getDetails = async (req, res, next) => {
  try {
    const id = req.params.id

    const result = await recipeService.getDetails(id)

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {

    const result = await recipeService.getAll()

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

export const recipeController = {
  getDetails,
  getAll
}