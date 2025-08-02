const recipesCart = document.getElementById("recipesCart");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let skip = 0;
let limit = 10;
let total = 0;

function fetchRecipes() {
    fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    .then(res => res.json())
        .then(data => {
            total = data.total;
            renderRecipes(data.recipes);
        })
}

function renderRecipes(recipes) {
    recipesCart.innerHTML = "";
    for (const recipe of recipes) {
        const recipeCart = document.createElement("div");
        recipeCart.className = "recipeCart";
        const ingredientsList = document.createElement("ul");
        ingredientsList.innerText = "Ingredients:";
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsList.append(li);
        }
        const instructionsList = document.createElement("ol");
        instructionsList.innerText = "Instructions:";
        for (const instruction of recipe.instructions) {
            const li = document.createElement("li");
            li.textContent = instruction;
            instructionsList.append(li);
        }
        const title = document.createElement("h2");
        title.innerText = `${recipe.name}`;
        const img = document.createElement("img");
        img.src = recipe.image;
        const cookingTime = document.createElement("p");
        cookingTime.innerText = `Cooking time: ${recipe.cookTimeMinutes} minutes`;
        const cuisine = document.createElement("p");
        cuisine.innerText = `Cuisine: ${recipe.cuisine}`;
        const difficulty = document.createElement("p");
        difficulty.innerText = `Difficulty: ${recipe.difficulty}`;
        const servings = document.createElement("p");
        servings.innerText = `Servings: ${recipe.servings}`;
        const calories = document.createElement("p");
        calories.innerText = `Calories for serving: ${recipe.caloriesPerServing}`;
        const preparationTime = document.createElement("p");
        preparationTime.innerText = `Preparation time: ${recipe.prepTimeMinutes} minutes`;
        const rating = document.createElement("p");
        rating.innerText = `Dish rate: ${recipe.rating}`;
        const reviewCount = `Reviews: ${recipe.reviewCount}`;
        const tags = document.createElement("div");
        tags.id = "tags";
        for (const tag of recipe.tags) {
            const tagP = document.createElement("p");
            tagP.innerText = tag;
            tags.append(tagP);
        }
        recipeCart.append(
            title,
            img,
            cookingTime,
            difficulty,
            cuisine,
            servings,
            calories,
            preparationTime,
            ingredientsList,
            instructionsList,
            rating,
            reviewCount,
            tags,
        );
        recipesCart.append(recipeCart);
    }
}

previousBtn.addEventListener("click", () => {
    if (skip >= limit) {
        skip -= limit;
        fetchRecipes();
    }
});

nextBtn.addEventListener("click", () => {
    if (skip + limit < total) {
        skip += limit;
        fetchRecipes();
    }
})

fetchRecipes();
