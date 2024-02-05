import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvader from "next-auth/providers/google"

const handle = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
    providers: 
    [GoogleProvader({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
});

export {handle as GET, handle as POST}