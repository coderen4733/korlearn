import "dotenv/config";

export const MONGODB_URL = process.env.MONGODB_URL;
export const MONGODB_NAME = process.env.MONGODB_NAME;

export const SERVER_PORT = Number(process.env.SERVER_PORT);
export const HASH_SALT_ROUNDS = Number(process.env.HASH_SALT_ROUNDS);

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN;
export const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN;