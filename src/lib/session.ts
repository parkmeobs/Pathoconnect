import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET!
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSessionToken(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  return encrypt({ userId, expiresAt })
}


export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session?: string) {
  if (!session) return null

  try {
    const { payload } = await jwtVerify(session, encodedKey)
    return payload
  } catch (error) {
    console.log('Failed to verify session')
    return null
  }
}
