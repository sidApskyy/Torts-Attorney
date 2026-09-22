// TrustedForm certificate claiming — retains the cert in your ActiveProspect
// account. No-ops until TRUSTEDFORM_API_KEY is set; cert URLs still flow
// through to the lead email either way.
export async function claimTrustedFormCert(certUrl: string, reference: string) {
  const apiKey = process.env.TRUSTEDFORM_API_KEY
  if (!apiKey || !certUrl) return
  // Only POST to genuine cert URLs — the API key travels in the
  // Authorization header, so a bogus URL would leak credentials
  if (!certUrl.startsWith('https://cert.trustedform.com')) return
  try {
    const res = await fetch(certUrl, {
      method: 'POST',
      headers: {
        // TrustedForm auth: username 'API', API key as the password
        Authorization: `Basic ${Buffer.from(`API:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        reference,
        vendor: 'The Torts Attorney',
      }),
    })
    if (!res.ok) {
      console.error('TrustedForm claim failed:', res.status, await res.text())
    }
  } catch (err) {
    console.error('TrustedForm claim error:', err)
  }
}
