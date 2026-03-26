// Prisma was previously used here, but Prisma 7 requires a new configuration
// format (`prisma.config.ts`). The app has migrated its API routes to use
// Mongoose via `connectToDB` instead.
//
// This module is kept as a compatibility shim for any leftover imports.
const db = {} as const;

export default db;
