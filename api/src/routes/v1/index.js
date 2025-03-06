import { cartRouter } from './cartRouter'
import { CategoryRouter } from './categotyRoute'
import { ProductRouter } from './productRoute'
import { userRoutes } from './userRoute'

const express = require('express')
const Router = express()

Router.use('/products', ProductRouter)

Router.use('/users', userRoutes)

Router.use('/categories', CategoryRouter)

Router.use('/carts', cartRouter)

export const APIs_V1 = Router
