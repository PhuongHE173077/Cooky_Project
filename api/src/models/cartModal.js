import { StatusCodes } from "http-status-codes"
import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"
import ApiError from "~/utils/ApiError"
import { TYPE_UPDATE_CART, TYPE_UPDATE_QUANTITY_CART } from "~/utils/constants"
const Joi = require("joi")
const { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } = require("~/utils/validations")

const CART_COLLECTION = 'Carts'
const CART_COLLECTION_SCHEMA = Joi.object({
  userId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
  shoppingCart: Joi.array().items(
    Joi.object({
      productId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
      quantity: Joi.number().min(1).required()
    })).optional()
})

const getDetails = async (id) => {
  try {
    //
    const result = await GET_DB().collection(CART_COLLECTION).aggregate([
      {
        $match: {
          userId: new ObjectId(id)
        }
      }
    ]).toArray()

    return result[0] || {}
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const updateCart = async (userId, dataUpdate) => {
  try {
    //
    let option = null

    const cart = await getDetails(userId)

    if (cart.shoppingCart.find(item => item.productId === dataUpdate.data.productId)) {
      return await updateQuantity(userId, { type: TYPE_UPDATE_QUANTITY_CART.INCREASE_QUANTITY_CART, itemId: dataUpdate.data.productId })
    } else {
      if (dataUpdate.optionCart === TYPE_UPDATE_CART.ADD_ITEM_CART) {
        option = { $push: { shoppingCart: dataUpdate.data } }
      }
      else {
        option = { $pull: { shoppingCart: dataUpdate.data } }
      }
      const result = await GET_DB().collection(CART_COLLECTION).findOneAndUpdate(
        { userId: new ObjectId(userId) },
        option,
        { returnDocument: 'after' }
      )
      return result.value
    }
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const updateQuantity = async (userId, dataUpdate) => {
  try {
    //
    const cart = await getDetails(userId)


    if (dataUpdate.type === TYPE_UPDATE_CART.DELETE_ITEM_CART) {
      cart.shoppingCart = cart.shoppingCart.filter(item => item.productId !== dataUpdate.itemId)
    } else {
      const shoppingCart = cart.shoppingCart.find(item => item.productId === dataUpdate.itemId)
      shoppingCart.quantity = dataUpdate.type === TYPE_UPDATE_QUANTITY_CART.INCREASE_QUANTITY_CART ? shoppingCart.quantity + 1 : shoppingCart.quantity - 1
    }


    const result = await GET_DB().collection(CART_COLLECTION).findOneAndUpdate(
      { userId: new ObjectId(userId) },
      { $set: { shoppingCart: cart.shoppingCart } },
      { returnDocument: 'after' }
    )
    return result.value
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const findById = async (id) => {
  try {
    return await GET_DB().collection(CART_COLLECTION).findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const cartModel = {
  CART_COLLECTION,
  CART_COLLECTION_SCHEMA,
  findById,
  getDetails,
  updateCart,
  updateQuantity

}