import axios from "axios";

const BASE_URL = 'https://aigurulab.tech';

export const AIGenerateImage = async () => {

  return await axios.post(BASE_URL + '/api/generate-image',
    {
      width: 1024,
      height: 1024,
      input: "self-portrait of a woman, lightning in the background",
      model: 'sdxl',//'flux'
      aspectRatio: "1:1"//Applicable to Flux model only
    },
    {
      headers: {
        'x-api-key': apiKey, // Your API Key
        'Content-Type': 'application/json', // Content Type
      },
    })
  console.log(result.data.image) //Output Result: Base 64 Image
}