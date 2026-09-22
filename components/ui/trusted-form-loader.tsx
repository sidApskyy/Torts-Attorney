'use client'

import { useEffect } from 'react'

// TrustedForm Certify Web SDK — injects a hidden xxTrustedFormCertUrl
// field into the form and records the session for TCPA consent proof.
// The SDK requires the form to already exist in the DOM when it loads,
// so this component mounts inside the <form> itself.
export function TrustedFormLoader() {
  useEffect(() => {
    if (document.querySelector('script[data-trustedform]')) return
    const tf = document.createElement('script')
    tf.type = 'text/javascript'
    tf.async = true
    tf.dataset.trustedform = 'true'
    tf.src =
      'https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
      Date.now() +
      Math.random()
    // Ad blockers/privacy extensions block api.trustedform.com — the form
    // still submits; the lead just travels without a certificate URL.
    tf.onerror = () => {
      console.warn('TrustedForm script blocked — submitting leads without certificate')
    }
    document.body.appendChild(tf)
  }, [])
  return null
}
