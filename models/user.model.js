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

userSchema.statics.findWithCredentials = async function (
  emailOrUsername,
  password
) {
  let user = await this.findOne({
    $or: [{ username: emailOrUsername }, { email: emailOrUsername }],
  });
  if (!user || !(await bcrypt.compare(password, user.password))) return null;
  return user;
};

export default models.User || model("User", userSchema);
