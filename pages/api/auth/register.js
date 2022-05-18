import { dbConnect } from "../../../libs/dbConnect";
import { generateToken } from "../../../libs/jwt";
import { registrationSchema } from "../../../libs/validations";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    const { success, error, data } = registrationSchema.safeParse(body);
    if (!success) {
      const errors = error.issues.map((err) => err.message);
      return res.status(400).json({ errors });
    }

    let user = await User.findOne({ email: data.email });
    if (user) {
      return res.status(400).json({ error: "Email already in used" });
    }

    user = await User.findOne({ username: data.username });
    if (user) {
      return res.status(400).json({ error: "Email already in used" });
    }

    user = await User.create(value);
    res.status(201).json({ user });
  } else {
    res.status(405).json({ error: "Method Not Allowed. Only POST is allowed" });
  }
}
