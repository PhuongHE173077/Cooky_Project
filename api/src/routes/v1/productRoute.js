import { ProductController } from '~/controllers/productController'

const express = require('express')
const Router = express()

Router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Hello World' })
  })

Router.route('/:id')
  .get(ProductController.getDetails)

export const ProductRouter = Router