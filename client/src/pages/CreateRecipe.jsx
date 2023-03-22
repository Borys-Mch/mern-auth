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

        <label htmlFor="instructions" className="text-lg">
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
          className=" p-2 border border-gray-300 rounded-lg"
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
      </form>
    </div>
  );
};

export default CreateRecipe;
