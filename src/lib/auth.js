import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

function requireEnv(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is required for auth to work. Set it in your deployment environment.`);
    }
    return value;
}

const mongoUri = requireEnv("MONGO_DB_URI");
const authDbName = requireEnv("AUTH_DB_NAME");
const authSecret = requireEnv("BETTER_AUTH_SECRET");
const authBaseURL = {
    allowedHosts: [
        "localhost:3000",
        "127.0.0.1:3000",
        "[::1]:3000",
        "hireloop-jobs.vercel.app",
        "*.vercel.app",
    ],
};

const client = new MongoClient(mongoUri);
const db = client.db(authDbName);

export const auth = betterAuth({
    secret: authSecret,
    baseURL: authBaseURL,
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: { type: "string", defaultValue: "seeker" },
            subscriptionPlan: { type: "string", defaultValue: "free" },
        },
    },
    // ✅ Expose additionalFields through the session so getSession() returns them
    session: {
        additionalFields: {
            role: { type: "string" },
            subscriptionPlan: { type: "string" },
        },
    },
    database: mongodbAdapter(db, { client }),
});