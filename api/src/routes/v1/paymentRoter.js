import { method } from 'lodash';
import { paymentController } from '~/controllers/paymentController';

const express = require('express')
const Router = express()

Router.route('/')
  .post(paymentController.handlePayment)



export const PaymentRouter = Router