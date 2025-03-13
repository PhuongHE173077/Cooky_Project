const { default: axios } = require("axios");
const { env } = require("~/config/environment");


export const GenerateRecipeImage = async (input) => {
  try {
    const response = await axios.post('https://aigurulab.tech/api/generate-image',
      {
        width: 1024,
        height: 1024,
        input: input,
        model: 'sdxl',
        aspectRatio: "1:1"
      }
      , {
        headers: {
          'x-api-key': env.EXPO_PUBLIC_AIGURULAB_API_KEY,
          'Content-Type': 'application/json'
        }
      })
    return response.data.image
  } catch (error) {
    throw new Error('Failed to generate image')
  }
}