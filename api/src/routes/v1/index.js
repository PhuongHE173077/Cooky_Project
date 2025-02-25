import { ProductRouter } from './productRoute'
import { userRoutes } from './userRoute'

const express = require('express')
const Router = express()

Router.use('/products', ProductRouter)
Router.use('/users', userRoutes)

export const APIs_V1 = Router
