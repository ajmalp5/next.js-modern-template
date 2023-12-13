import NextAuth from "next-auth";
import { authOptions } from "insta/server/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };