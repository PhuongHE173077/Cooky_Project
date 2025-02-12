const express = require('express')
const Router = express()

Router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Hello World' })
  })

export const ProductRouter = Router