import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

        }),
    ],
}

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
