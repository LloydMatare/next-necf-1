import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var __mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.__mongooseCache ?? {
  conn: null,
  promise: null,
};

globalThis.__mongooseCache = cached;

function getMongoUri() {
  const raw =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    process.env.MONGO_URL ||
    "";

  // dotenv users sometimes wrap values in quotes in `.env`.
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  const mongoUri = getMongoUri();
  if (!mongoUri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGODB_URI (or MONGO_URI / MONGO_URL) in .env."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
