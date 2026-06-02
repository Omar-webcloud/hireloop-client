import { createAuthClient } from "better-auth/react"
const authClientOptions = process.env.NEXT_PUBLIC_BETTER_AUTH_URL
    ? {
        baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    }
    : {}

export const authClient = createAuthClient(authClientOptions)

export const { signIn, signUp, signOut, useSession } = authClient;
