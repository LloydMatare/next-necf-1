"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Eye, EyeOff } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const schema = z.object({
  username: z.string().trim().min(1, "Enter your username."),
  password: z.string().min(1, "Enter your password."),
})

type Values = z.infer<typeof schema>

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get("next") || "/dashboard"
  const [showPassword, setShowPassword] = React.useState(false)

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  })

  const [formError, setFormError] = React.useState<string | null>(null)

  async function onSubmit(values: Values) {
    setFormError(null)

    const res = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
    })

    if (res?.error) {
      setFormError("Invalid username or password.")
      return
    }

    router.replace(next)
    router.refresh()
  }

  return (
    <Card className="bg-background/80 shadow-xl ring-1 ring-foreground/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl tracking-tight [font-family:var(--font-display)]">
          Welcome back
        </CardTitle>
        <CardDescription className="text-sm">
          Sign in to continue to the admin dashboard.
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
                      placeholder="admin"
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
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••."
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
              {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
            </Button>

            <div className="text-xs text-muted-foreground">
              Need access?{" "}
              <Link className="text-foreground underline underline-offset-4" href="/register">
                Register
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
