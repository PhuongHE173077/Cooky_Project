import axiosCustomize from "../services/axiosCustomiz"
//category APIs
export const fetchCategoryAPIs = async () => {
  return await axiosCustomize.get('api/v1/categories')
}


//AI APIs
export const AnswerForAI = async (prompt: string, type: string) => {
  return await axiosCustomize.post('api/v1/ai', { prompt, type })
}

export const getImageByAI = async (imagePrompt: string) => {
  return await axiosCustomize.post('api/v1/ai/imageGenerate', { imagePrompt })
}


//auth APIs
export const loginAPIs = async (email: string, password: string) => {
  return await axiosCustomize.post('api/v1/users/login', { email, password })
}

//recipe APIs
export const fetchRecipeAPIs = async () => {
  return await axiosCustomize.get('api/v1/recipes')
}

export const fetchRecipeByCategoryAPIs = async (categoryId: any) => {
  return await axiosCustomize.get('api/v1/recipes/' + categoryId)
}

//Product APIs
export const fetchAllProductAPIs = async () => {
  return await axiosCustomize.get('api/v1/products')
}

export const fetchCartAPIs = async () => {
  return await axiosCustomize.get('api/v1/carts')
}

export const paymentAPIs = async () => {
  return await axiosCustomize.post('api/v1/payment')
}

//payment APIs
export const fetchStripeKeys = async () => {
  return await axiosCustomize.get('api/v1/stripe/keys')
}