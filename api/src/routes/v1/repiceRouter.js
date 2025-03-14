import { recipeValidation } from '~/validations/repiceVadilation'
import { AiRouter } from './aiRouter'
import { recipeController } from '~/controllers/recipeController'

const express = require('express')
const Router = express()

Router.get('/', recipeController.getAll)
  .post('/create', recipeValidation.createNew, AiRouter.post('/'))
  .get('/:categoryId', recipeController.getRevipeByCategory)
export const repiceRouter = Router
