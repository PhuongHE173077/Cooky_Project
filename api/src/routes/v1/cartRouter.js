import { cartController } from '~/controllers/cartController'
import { authMiddlewares } from '~/middlewares/authMiddlewares'

const express = require('express')
const Router = express()

Router.get('/', authMiddlewares.isAuthorized, cartController.getCartByUserId)
  .put('/', authMiddlewares.isAuthorized, cartController.updateCart)

export const cartRouter = Router
