'use client'

import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { TrustedFormLoader } from '@/components/ui/trusted-form-loader'
import { cn } from '@/lib/utils'
import { submitVictimLeadForm } from '@/app/actions/lead'
import { Check, ChevronDown, Clock, Loader2, Lock, ShieldCheck } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const spring = { type: 'spring' as const, stiffness: 300, damping: 20 }

const fieldClass =
  'h-11 rounded-xl border-[#E4E1D8] bg-white px-3.5 text-[#202124] placeholder:text-[#9CA3AF] transition-all duration-200 hover:border-[#C6A24A]/40 focus-visible:border-[#C6A24A]/70 focus-visible:ring-[#C6A24A]/15 focus-visible:shadow-[0_0_0_3px_rgba(198,162,74,0.12)]'

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold tracking-wide text-[#4B5563]"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

interface VictimIntakeFormProps {
  /** Anchor id for scroll targeting (also used to derive unique field ids) */
  id?: string
  /** Controlled selected campaign label */
  campaign: string
  onCampaignChange?: (campaign: string) => void
  /** Options for the campaign select (ignored when lockedCampaign is set) */
  campaignOptions?: string[]
  /** When set, the campaign is shown as a locked badge instead of a select */
  lockedCampaign?: string
  heading?: string
  subheading?: string
  /** Called once when a submission succeeds (e.g. to hide a sticky CTA) */
  onSubmitted?: () => void
}

export function VictimIntakeForm({
  id = 'victim-form',
  campaign,
  onCampaignChange,
  campaignOptions = [],
  lockedCampaign,
  heading = 'Begin Your Secure Review',
  subheading = 'Complete the form below. A case specialist may follow up if your information appears to fit.',
  onSubmitted,
}: VictimIntakeFormProps) {
  const prefersReducedMotion = useReducedMotion()

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zip: '',
    notes: '',
    consent: false,
  })

  const fid = (n: string) => `${id}-${n}`

  const popIn = {
    initial: { opacity: 0, scale: 0.96, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: -10 },
    transition: { duration: 0.35, ease },
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return
    setSubmitError(null)

    const fd = new FormData(e.currentTarget)
    // Checkbox is controlled — sync it into the payload explicitly
    fd.set('consent', String(form.consent))
    // TrustedForm injects this hidden field after page load — read it at
    // submit time so the certificate URL travels with the lead
    fd.set(
      'trustedFormCertUrl',
      document.querySelector<HTMLInputElement>(`#${id} input[name="xxTrustedFormCertUrl"]`)?.value ?? ''
    )

    setSubmitting(true)
    const result = await submitVictimLeadForm(fd)
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
      onSubmitted?.()
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  return (
    <div
      id={id}
      className="relative scroll-mt-28 bg-white/85 md:backdrop-blur-[24px] rounded-3xl p-6 md:p-8 border border-[rgba(198,162,74,0.18)] shadow-[0_12px_48px_rgba(32,33,36,0.10)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent"
      />
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" {...popIn}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-2">
              {heading}
            </h2>
            <p className="text-[#4B5563] text-sm mb-5">{subheading}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4B5563] pb-5 mb-5 border-b border-[#E4E1D8]">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C6A24A]" />
                Secure &amp; confidential
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C6A24A]" />
                About 2 minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C6A24A]" />
                No obligation
              </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" data-tf-element-role="offer">
              <TrustedFormLoader />
              {/* Honeypot — bots fill it, humans never see it */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id={fid('first-name')} label="First name">
                  <Input
                    id={fid('first-name')}
                    name="firstName"
                    required
                    autoComplete="given-name"
                    enterKeyHint="next"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={fieldClass}
                  />
                </Field>
                <Field id={fid('last-name')} label="Last name">
                  <Input
                    id={fid('last-name')}
                    name="lastName"
                    required
                    autoComplete="family-name"
                    enterKeyHint="next"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={fieldClass}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id={fid('phone')} label="Phone number">
                  <Input
                    id={fid('phone')}
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    enterKeyHint="next"
                    placeholder="(555) 555-5555"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={fieldClass}
                  />
                </Field>
                <Field id={fid('email')} label="Email address">
                  <Input
                    id={fid('email')}
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    enterKeyHint="next"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id={fid('zip')} label="ZIP code">
                  <Input
                    id={fid('zip')}
                    name="zip"
                    required
                    autoComplete="postal-code"
                    inputMode="numeric"
                    enterKeyHint="next"
                    placeholder="12345"
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className={fieldClass}
                  />
                </Field>
                {lockedCampaign ? (
                  <Field id={fid('campaign')} label="Campaign or topic">
                    <input type="hidden" name="campaign" value={lockedCampaign} />
                    <div
                      className={cn(
                        fieldClass,
                        'flex items-center justify-between gap-2 w-full bg-[#C6A24A]/[0.07] border-[#C6A24A]/40'
                      )}
                    >
                      <span className="truncate text-sm font-medium text-[#202124]">
                        {lockedCampaign}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#9B7830] shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Selected
                      </span>
                    </div>
                  </Field>
                ) : (
                  <Field id={fid('campaign')} label="Campaign or topic">
                    <div className="relative">
                      <select
                        id={fid('campaign')}
                        name="campaign"
                        required
                        value={campaign}
                        onChange={(e) => onCampaignChange?.(e.target.value)}
                        className={cn(
                          fieldClass,
                          'w-full appearance-none pr-10 cursor-pointer',
                          !campaign && 'text-[#9CA3AF]'
                        )}
                      >
                        <option value="" disabled>
                          Select a campaign
                        </option>
                        {campaignOptions.map((label) => (
                          <option key={label} value={label}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
                    </div>
                  </Field>
                )}
              </div>
              <Field id={fid('notes')} label="What happened (optional)">
                <Textarea
                  id={fid('notes')}
                  name="notes"
                  enterKeyHint="done"
                  placeholder="Briefly describe what happened"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className={cn(fieldClass, 'min-h-[96px] py-2.5 h-auto')}
                />
              </Field>
              <label
                data-tf-element-role="consent-language"
                className="flex items-start gap-3 cursor-pointer group rounded-xl border border-[#E4E1D8] bg-[#F8F8F6]/70 p-3.5 transition-colors duration-200 hover:border-[#C6A24A]/50 has-checked:border-[#C6A24A]/60 has-checked:bg-[#C6A24A]/[0.06]"
              >
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  data-tf-element-role="consent-opt-in"
                  className="mt-0.5 w-4 h-4 shrink-0 accent-[#C6A24A] cursor-pointer"
                />
                <span className="text-xs leading-relaxed text-[#4B5563]">
                  By checking the box, you agree to be contacted about your potential case or promotional legal offers sent by or on behalf of{' '}
                  <span data-tf-element-role="consent-advertiser-name" className="font-semibold text-[#202124]">The Torts Attorney</span>, Tortlinks and/or participating law firms. You may receive live calls, automated calls, emails or text messages even if you are on a national or state &ldquo;Do Not Call&rdquo; list. This includes contact even if you are on a Do Not Call registry. Consent is not a condition of any purchase. Contact may include automated dialing or prerecorded messages.
                </span>
              </label>
              {submitError && (
                <p
                  role="alert"
                  className="text-sm text-[#B85C5C] bg-[#B85C5C]/10 border border-[#B85C5C]/30 rounded-xl px-3.5 py-2.5"
                >
                  {submitError}
                </p>
              )}
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={spring}
              >
                <Button
                  type="submit"
                  variant="red"
                  size="lg"
                  disabled={submitting}
                  data-tf-element-role="submit"
                  className="w-full text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    'See If This May Fit'
                  )}
                </Button>
              </motion.div>
              <p className="text-xs text-[#4B5563] text-center">
                Your information is handled according to our Privacy Policy and the disclosures presented with this form.
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" {...popIn} className="text-center py-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...spring, delay: 0.05 }}
              className="w-20 h-20 rounded-full bg-[#C6A24A]/10 flex items-center justify-center mx-auto mb-6"
            >
              <svg viewBox="0 0 52 52" className="w-11 h-11" aria-hidden>
                <motion.circle
                  cx="26"
                  cy="26"
                  r="23"
                  fill="none"
                  stroke="#C6A24A"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease }}
                />
                <motion.path
                  d="M15 27l7 7 15-15"
                  fill="none"
                  stroke="#C6A24A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.45, ease }}
                />
              </svg>
            </motion.div>
            <h2 className="font-serif text-3xl font-bold text-[#202124] mb-4">Thanks. Your information has been received.</h2>
            <p className="text-[#4B5563] leading-relaxed mb-6">
              Your submission may be reviewed against the current campaign criteria. If the information appears to fit, you may be contacted using the methods described in the applicable disclosure and consent language.
            </p>
            <ul className="text-left space-y-3 mb-6 max-w-sm mx-auto">
              {[
                'Your information is reviewed against current campaign criteria.',
                'If it appears to fit, a participating law firm may follow up.',
                'You decide whether to move forward — no obligation.',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C6A24A]/10 text-[#C6A24A] flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {i + 1}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#4B5563]">
              Submitting this form does not guarantee legal representation or acceptance of a claim.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
