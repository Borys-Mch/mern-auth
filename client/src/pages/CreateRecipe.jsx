import React, { useState } from "react";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  console.log(recipe);
  return (
    <div className="container mx-auto flex flex-col">
      <h2 className="mt-5 text-center text-lg font-bold">Create Recipe</h2>
      <form className="flex flex-col mt-5 mx-auto w-full max-w-md">
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className=" p-2 border border-gray-300 rounded-lg"
        />
        <label htmlFor="description" className="text-lg">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          className=" p-2 border border-gray-300 rounded-lg"
        />
        <label htmlFor="ingredients" className="text-lg">
          Ingredients
        </label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, idx)}
            className="mt-2 p-2 border border-gray-300 rounded-lg"
          />
        ))}
        <button
          onClick={addIngredient}
          type="button"
          className="my-2 mx-auto py-1 px-5 border-2 border-[#03202a] rounded-2xl">
          Add Ingredient
        </button>
        <label htmlFor="instructions" className="text-lg">
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <label htmlFor="imageUrl" className="text-lg">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
          className=" p-2 border border-gray-300 rounded-lg"
        />
        <label htmlFor="cookingTime" className="text-lg">
          Cooking Time (minutes)
        </label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
          className=" p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="my-5 p-3 border-2 bg-[#03202a] border-[#ff5e00] rounded-2xl text-white">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
