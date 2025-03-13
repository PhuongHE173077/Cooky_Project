import axiosCustomize from "../services/axiosCustomiz"

export const fetchCategoryAPIs = async () => {
  return await axiosCustomize.get('api/v1/categories')
}

export const AnswerForAI = async (prompt: string, type: string) => {
  return await axiosCustomize.post('api/v1/ai', { prompt, type })
}