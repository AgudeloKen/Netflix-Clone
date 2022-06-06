import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export default NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUBCLIENT,
    }),
  ],
});
