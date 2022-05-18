import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../libs/dbConnect";
import User from "../../../models/user.model";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        emailOrUsername: {
          label: "Email or Username",
          type: "text",
          placeholder: "Enter your Email or Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await dbConnect();
        const { emailOrUsername, password } = credentials;
        let user = await User.findOne({
          $or: [{ username: emailOrUsername }, { email: emailOrUsername }],
        }).select("+password");
        console.log(user);
        if (!user || !(await bcrypt.compare(password, user.password)))
          return null;
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.token = token;
      }
      return session;
    },
  },
  theme: {
    colorScheme: "light",
  },
});
