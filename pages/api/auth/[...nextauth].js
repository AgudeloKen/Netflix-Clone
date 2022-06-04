import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUBCLIENT,
    }),
    Facebook({
      clientId: process.env.FACEBOOKID,
      clientSecret: process.env.FACEBOOKCLIENT,
    }),
  ],
});
