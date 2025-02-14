//Products API

import axios from "../utils/axiosCustomiz"

export const fetchAllProductsAPIs = async () => {
  return axios.get('api/v1/products')
}