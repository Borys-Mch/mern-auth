import { Schema, model } from "mongoose";

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: { type: Schema.Types.ObjectId, ref: "users", required: true },
});

export const RecipeModel = model("recipes", RecipeSchema);
