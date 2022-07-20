const container = document.querySelector('.container');
const foodTitle = document.querySelector('.food-title');
const foodItem = document.querySelector('.food-item');
const foodButton = document.querySelector('.food');


const getFood = async () => {
    const apiData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=9f84e0adf95c447bac51d4eef9d24191`)
    const jsonData = await apiData.json()
    const foodResult = jsonData.recipes
foodItem.innerText = ''

for (let recipe of foodResult) {
    const foodIngredients = recipe.extendedIngredients
    for(let ingredient of foodIngredients){
        const recipeInfo = document.createElement('div')
        recipeInfo.className = 'recipe-container'
        recipeInfo.innerHTML =
        `<div>${ingredient.aisle}</div>
        `
        foodItem.append(recipeInfo)
        }
    } 
    };
    
foodButton.addEventListener('click', getFood)

