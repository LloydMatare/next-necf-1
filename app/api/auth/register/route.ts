export const dynamic = "force-dynamic"

import { NextResponse, type NextRequest } from "next/server"
import { z } from "zod"

import { connectToDB } from "@/lib/connectToDB"
import User from "@/models/user"
import { hashPassword } from "@/lib/auth/password"

const registerSchema = z.object({
  username: z.string().trim().min(3).max(64),
  password: z.string().min(8).max(200),
  inviteCode: z.string().trim().optional(),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = registerSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { username, password, inviteCode } = parsed.data

  const requiredInvite = (process.env.ADMIN_INVITE_CODE || "").trim()
  if (!requiredInvite && process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Registration is disabled" },
      { status: 403 }
    )
  }
  if (requiredInvite && inviteCode !== requiredInvite) {
    return NextResponse.json({ error: "Invalid invite code" }, { status: 403 })
  }

  await connectToDB()

  const existing = await User.findOne({ username }).lean()
  if (existing) {
    return NextResponse.json({ error: "Username already exists" }, { status: 409 })
  }

  const { saltHex, hashHex } = await hashPassword(password)

  const created = await User.create({
    username,
    passwordHash: hashHex,
    passwordSalt: saltHex,
    role: "admin",
  })

  return NextResponse.json(
    { id: created._id.toString(), username: created.username },
    { status: 201 }
  )
}
