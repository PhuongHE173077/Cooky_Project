import { AiController } from '~/controllers/aiController'

const express = require('express')
const Router = express()

Router.post('/', AiController.createRecipeAI)
  .post('/imageGenerate', AiController.createImageAI)


export const AiRouter = Router
