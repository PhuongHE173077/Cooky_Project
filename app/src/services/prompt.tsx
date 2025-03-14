export const PROMPT = {
    GENERATE_RECIPE_OPTION_PROMPT: ':Depends on user instruction create 3 different Recipe variant with Recipe Name with Emoji, 2 line description and main ingredient list in JSON format with field recipeName, description, ingredients (without size) only',

    GENERATE_COMPLETE_RECIPE: `- As per recipe Name and Description, Give me all list of ingredients as ingredient,

- emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step recipe as steps

- Total Calories as calories (only number), Minutes to cook as cookTime and serving number as serve To

- relastic image Text prompt as per reciepe as imagePrompt

- Give me response in JSON format only

Example JSON output:
{
"recipeName": "Hearty Beef Stew 🥩🍚",
    "description": "A comforting and classic beef stew, perfect for a chilly evening. Slow-cooked for maximum flavor.",
    "ingredients": [
        {
            "ingredient": "Beef Stew Meat",
            "icon": "🥩",
            "quantity": "2 lbs"
        },
        {
            "ingredient": "All-Purpose Flour",
            "icon": "🍚",
            "quantity": "1/4 cup"
        },
        {
            "ingredient": "Olive Oil",
            "icon": "🫒",
            "quantity": "2 tbsp"
        },
        {
            "ingredient": "Onion",
            "icon": "🧅",
            "quantity": "1 large, chopped"
        },
        {
            "ingredient": "Carrots",
            "icon": "🥕",
            "quantity": "3 medium, chopped"
        },
        {
            "ingredient": "Celery",
            "icon": "🥬",
            "quantity": "2 stalks, chopped"
        },
        {
            "ingredient": "Garlic",
            "icon": "🧄",
            "quantity": "2 cloves, minced"
        },
        {
            "ingredient": "Beef Broth",
            "icon": "🍲",
            "quantity": "4 cups"
        },
        {
            "ingredient": "Tomato Paste",
            "icon": "🍅",
            "quantity": "2 tbsp"
        },
        {
            "ingredient": "Worcestershire Sauce",
            "icon": "🍶",
            "quantity": "1 tbsp"
        },
        {
            "ingredient": "Dried Thyme",
            "icon": "🌿",
            "quantity": "1 tsp"
        },
        {
            "ingredient": "Bay Leaf",
            "icon": "🍃",
            "quantity": "1"
        },
        {
            "ingredient": "Potatoes",
            "icon": "🥔",
            "quantity": "2 lbs, peeled and cubed"
        },
        {
            "ingredient": "Salt",
            "icon": "🧂",
            "quantity": "To taste"
        },
        {
            "ingredient": "Black Pepper",
            "icon": "🌶️",
            "quantity": "To taste"
        }
    ],
    "steps": [
        "Season the beef stew meat with salt and pepper. Dredge in flour, shaking off excess.",
        "Heat olive oil in a large pot or Dutch oven over medium-high heat. Brown the beef in batches, then remove and set aside.",
        "Add onion, carrots, and celery to the pot and cook until softened, about 5-7 minutes. Add garlic and cook for another minute.",
        "Stir in tomato paste and cook for 1 minute.",
        "Pour in beef broth, scraping up any browned bits from the bottom of the pot. Add Worcestershire sauce, thyme, and bay leaf.",
        "Return the beef to the pot. Bring to a simmer, then reduce heat to low, cover, and cook for 2-2.5 hours, or until the beef is tender.",
        "Add potatoes to the stew and cook for another 30-45 minutes, or until the potatoes are tender.",
        "Remove the bay leaf before serving. Adjust seasoning with salt and pepper to taste. Serve hot."
    ],
    "calories": 450,
    "cookTime": 180,
    "serveTo": 6,
    "imagePrompt": "Overhead shot of a steaming bowl of hearty beef stew with chunks of tender beef, carrots, potatoes, and celery, garnished with fresh parsley. The bowl is placed on a rustic wooden table with a checkered tablecloth in the background.  Natural lighting with a warm, inviting tone.",
}
`
}