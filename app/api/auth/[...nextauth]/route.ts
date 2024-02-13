import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { db } from "@/app/_lib/prisma";

import { env, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/app/env";

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST }