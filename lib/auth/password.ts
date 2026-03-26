import crypto from "crypto"
import { promisify } from "util"

const scryptAsync = promisify(crypto.scrypt)

const SALT_BYTES = 16
const KEY_BYTES = 64

export type PasswordDigest = {
  saltHex: string
  hashHex: string
}

export async function hashPassword(password: string): Promise<PasswordDigest> {
  const salt = crypto.randomBytes(SALT_BYTES)
  const hash = (await scryptAsync(password, salt, KEY_BYTES)) as Buffer
  return { saltHex: salt.toString("hex"), hashHex: hash.toString("hex") }
}

export async function verifyPassword(
  password: string,
  digest: PasswordDigest
): Promise<boolean> {
  const salt = Buffer.from(digest.saltHex, "hex")
  const expected = Buffer.from(digest.hashHex, "hex")
  const actual = (await scryptAsync(password, salt, expected.length)) as Buffer

  // Prevent timing attacks.
  return (
    expected.length === actual.length &&
    crypto.timingSafeEqual(expected, actual)
  )
}

