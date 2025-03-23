//

export const WHITELIST_DOMAINS = [
  'http://localhost:8081',
  'http://localhost:3039']

export const USER_ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin'
}
export const TYPE_UPDATE_CART = {
  ADD_ITEM_CART: 'addcart',
  DELETE_ITEM_CART: 'deletecart'
}

export const GENERATE_RECIPE_OPTION_PROMPT = `
Based on the user's instructions, generate 3 distinct recipe variations. Return the result as a JSON array of objects. Each object must have the following fields:
- "recipeName": The recipe's name, including an emoji.
- "description": A concise, 2-line description of the recipe.
- "ingredients": An array of the main ingredients (without specific quantities).

Example JSON output:
[
  {
    "recipeName": "Chicken Stir-Fry ",
    "description": "Quick and flavorful chicken stir-fry. Perfect for a weeknight dinner.",
    "ingredients": ["Chicken", "Broccoli", "Soy sauce", "Ginger"]
  },
  {
    "recipeName": "Baked Salmon ",
    "description": "Healthy baked salmon with lemon and herbs. Simple and delicious.",
    "ingredients": ["Salmon", "Lemon", "Dill", "Olive oil"]
  },
  {
    "recipeName": "Vegan Pasta ",
    "description": "Delicious vegan pasta with tomato sauce. A great option for everyone.",
    "ingredients": ["Pasta", "Tomatoes", "Garlic", "Basil"]
  }
]
`

export const TYPE_ANSWER_AI = {
  RECIPE: 'RECIPE',
  RECIPE_DETAIL: 'RECIPE_DETAIL'
}

export const TYPE_UPDATE_QUANTITY_CART = {
  INCREASE_QUANTITY_CART: 'increasequantitycart',
  DECREASE_QUANTITY_CART: 'decreasequantitycart'
}