import axios from "../utils/axiosCustomiz"

//Products API
export const fetchAllProductsAPIs = async () => {
  return axios.get('api/v1/products')
}

// user APIs 

export const login = async (data) => {
  return axios.post('api/v1/login', data)
}