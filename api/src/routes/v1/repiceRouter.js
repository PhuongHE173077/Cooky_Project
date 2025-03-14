import { recipeValidation } from '~/validations/repiceVadilation'
import { AiRouter } from './aiRouter'
import { recipeController } from '~/controllers/recipeController'

const express = require('express')
const Router = express()

Router.post('/create', recipeValidation.createNew, AiRouter.post('/'))

Router.get('/', recipeController.getAll)

export const RepiceRouter = Router
