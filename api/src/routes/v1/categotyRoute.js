import { categoryController } from '~/controllers/categoryController'
import { authMiddlewares } from '~/middlewares/authMiddlewares'

const express = require('express')
const Router = express()

Router.route('/')
  .get(authMiddlewares.isAuthorized, categoryController.getAll)

export const CategoryRouter = Router