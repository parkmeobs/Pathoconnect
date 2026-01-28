"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setMessage(data.message)

    if (res.ok) router.push("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2" />
        <input placeholder="Email" type="email" onChange={e => setForm({ ...form, email: e.target.value })} className="border p-2" />
        <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="border p-2" />
        <button className="bg-black text-white p-2">Register</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
