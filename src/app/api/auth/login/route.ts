import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { users } from "@/models/User"

const JWT_SECRET = "your_secret_key"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = users.find(u => u.email === email)
  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1d" })

  return NextResponse.json({ message: "Login successful", token })
}
