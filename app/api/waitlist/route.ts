import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body.email ?? '').trim().toLowerCase()
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const entry = { email, ts: new Date().toISOString() }

  // Always log — visible in `vercel logs` so submissions are never silently lost
  console.log('[waitlist]', JSON.stringify(entry))

  // Optional: forward to Resend if RESEND_API_KEY is set
  const resendKey = process.env.RESEND_API_KEY
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL
  if (resendKey && notifyTo) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Tabric Waitlist <onboarding@resend.dev>',
          to: notifyTo,
          subject: `New waitlist signup: ${email}`,
          text: `${email} signed up at ${entry.ts}`,
        }),
      })
    } catch (err) {
      console.error('[waitlist] resend failed', err)
    }
  }

  return NextResponse.json({ ok: true })
}
