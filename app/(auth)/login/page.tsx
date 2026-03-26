import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { options } from "@/app/api/auth/[...nextauth]/options"
import LoginForm from "./LoginForm"

export const dynamic = "force-dynamic"

export default async function LoginPage() {
  const session = await getServerSession(options)
  if (session) redirect("/dashboard")
  return <LoginForm />
}

