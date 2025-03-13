import { env } from "~/config/environment"
import { GENERATE_RECIPE_OPTION_PROMPT, TYPE_ANSWER_AI } from "~/utils/constants"
const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })



export const resultAnswerByAI = async (userInstruction, type) => {
  let formattedPrompt = ''
  if (type === TYPE_ANSWER_AI.RECIPE) {
    formattedPrompt = `${userInstruction}. ${GENERATE_RECIPE_OPTION_PROMPT}`
  } else {
    formattedPrompt = userInstruction
  }
  const result = await model.generateContent(formattedPrompt)
  let response = result.response.text()

  //Remove code block formatting.
  response = response.replace(/^```json\n/, '')
  response = response.replace(/```$/, '')
  response = response.trim()

  // Check if the response is a request for more information.
  if (response.includes("tell me your preference")) {
    return { error: "More information needed", raw: response }
  }

  try {
    return JSON.parse(response)
  } catch (error) {

    return { error: "Không thể parse JSON", raw: response }
  }
}

