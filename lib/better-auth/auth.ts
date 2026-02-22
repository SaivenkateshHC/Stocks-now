import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null

export const getAuthInstance = async () => {
    if (authInstance) return authInstance

    const mongooseConnection = await connectToDatabase()
    const db = mongooseConnection.connection.db

    if (!db) throw new Error('Database connection failed')

    authInstance = betterAuth({
        database: mongodbAdapter(db),
        secret: process.env.NEXT_PUBLIC_BETTER_AUTH_SECRET,
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        emailAndPassword: {
            enabled: false,
            requireEmailVerification: false,
            maxPasswordLength: 128,
            minPasswordLength: 8,
            autoSignIn: true
        },
        plugins: [
            nextCookies(),
        ]
    })

    return authInstance
}

export const auth = await getAuthInstance()