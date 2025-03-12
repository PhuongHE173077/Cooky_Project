import { StatusCodes } from "http-status-codes"
import { cartService } from "~/services/cartService"

const getCartByUserId = async (req, res, next) => {
  try {
    const userId = req.jwtDecoded._id
    console.log("🚀 ~ getCartByUserId ~ userId:", userId)

    const result = await cartService.getCartByUserId(userId)

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

const updateCart = async (req, res, next) => {
  try {
    const userId = req.jwtDecoded._id

    const dataUpdate = req.body

    const result = await cartService.updateCart(userId, dataUpdate)

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}


export const cartController = {
  getCartByUserId,
  updateCart
}