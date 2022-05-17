import { Schema, models, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    menus: [
      {
        type: Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.findWithCredentials = async function (body) {
  let user = await this.findOne({
    $or: [{ username: body.username }, { email: body.email }],
  });
  if (!user || !(await bcrypt.compare(body.password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return user;
};

export default models.User || model("User", userSchema);
