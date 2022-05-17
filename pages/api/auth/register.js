import { dbConnect } from "../../../libs/dbConnect";
import { generateToken } from "../../../libs/jwt";
import { registrationSchema } from "../../../libs/validations";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    const { value, error } = registrationSchema.validate(body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ errors });
    }

    let user = await User.findOne({ email: value.email });
    if (user) {
      return res.status(400).json({ error: "Email already in used" });
    }

    user = await User.findOne({ username: value.username });
    if (user) {
      return res.status(400).json({ error: "Email already in used" });
    }

    user = await User.create(value);
    const token = generateToken(user);

    res.status(201).json({ token });
  } else {
    res.status().json({ error: "Method Not Allowed. Only POST is allowed" });
  }
}
