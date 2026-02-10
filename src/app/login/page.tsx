import { cookies } from "next/headers"
import { decrypt } from "@/lib/session"
import { redirect } from "next/navigation"
import LoginForm from "./LoginForm"

export default async function LoginPage() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get("session")?.value
    const session = cookie ? await decrypt(cookie) : null

  if (session?.userId) {
    redirect("/")
  }

  return <LoginForm />
}
