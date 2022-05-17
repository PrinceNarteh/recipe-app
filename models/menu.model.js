import { Schema, models, model } from "mongoose";

const menuSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["continental", "local"],
    },
    time: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "supper"],
    },
    recipe: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Menu || model("Menu", menuSchema);
