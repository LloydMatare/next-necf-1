"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Eye, EyeOff } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const schema = z
  .object({
    username: z.string().trim().min(3, "Username must be at least 3 characters").max(64),
    password: z.string().min(8, "Password must be at least 8 characters").max(200),
    confirmPassword: z.string().min(1, "Confirm your password"),
    inviteCode: z.string().trim().optional(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type Values = z.infer<typeof schema>

export default function RegisterForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirm, setShowConfirm] = React.useState(false)

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "", confirmPassword: "", inviteCode: "" },
  })

  const [formError, setFormError] = React.useState<string | null>(null)

  async function onSubmit(values: Values) {
    setFormError(null)

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
        inviteCode: values.inviteCode || undefined,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      setFormError(data?.error || "Registration failed.")
      return
    }

    const signInRes = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
    })

    if (signInRes?.error) {
      router.replace("/login")
      router.refresh()
      return
    }

    router.replace("/dashboard")
    router.refresh()
  }

  return (
    <Card className="bg-background/80 shadow-xl ring-1 ring-foreground/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl tracking-tight [font-family:var(--font-display)]">
          Create your admin account
        </CardTitle>
        <CardDescription className="text-sm">
          You may need an invite code depending on environment settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="username"
                      placeholder="yourname"
                      className="h-10 px-3 text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="flex gap-2">
                    <FormControl>
                      <Input
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-10 px-3 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <div className="flex gap-2">
                    <FormControl>
                      <Input
                        autoComplete="new-password"
                        type={showConfirm ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-10 px-3 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => setShowConfirm((v) => !v)}
                      aria-label={showConfirm ? "Hide password confirmation" : "Show password confirmation"}
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inviteCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invite code (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="ADMIN_INVITE_CODE" className="h-10 px-3 text-sm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {formError && (
              <div className="border bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {formError}
              </div>
            )}

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? "Creating..." : "Create account"}
            </Button>

            <div className="text-xs text-muted-foreground">
              Already have access?{" "}
              <Link className="text-foreground underline underline-offset-4" href="/login">
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
