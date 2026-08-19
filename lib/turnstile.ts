interface TurnstileVerifyResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
}

export async function verifyTurnstile(token: string | null): Promise<{ success: boolean; errors?: string[] }> {
  const secret = process.env.TURNSTILE_SECRET_KEY

  // If no secret is configured, skip verification (allows development without Turnstile)
  if (!secret) {
    return { success: true }
  }

  if (!token) {
    return { success: false, errors: ['missing-token'] }
  }

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    })

    const data: TurnstileVerifyResponse = await res.json()

    return {
      success: data.success,
      errors: data['error-codes'],
    }
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return { success: false, errors: ['verification-failed'] }
  }
}
